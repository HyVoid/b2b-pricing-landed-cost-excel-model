/**
 * Core Decision Engine logic implementing all Excel workbook formulas faithfully.
 */

import {
  AppState,
  CountryCode,
  CountryOrConsol,
  LandedCostResult,
  CostToServeResult,
  PricingEngineResult,
  PricingMatrixResult,
  OrderPolicyResult,
  LogisticsScenarioResult,
  InventoryPlanResult,
  CountryFinancialResult,
  ProductItem,
} from '../types';

/**
 * 1. Product Container Capacity (Sheet 02)
 */
export function getProductContainerCap(product: ProductItem, feuCbm: number): number {
  if (product.unitCbm <= 0) return 0;
  return Math.floor(feuCbm / product.unitCbm);
}

/**
 * 2. Active Demand Calculation (Sheet 05)
 */
export function calculateActiveDemand(
  baseQty: number,
  highUplift: number,
  lowDownside: number,
  scenario: 'Low' | 'Base' | 'High'
): number {
  switch (scenario) {
    case 'High':
      return Math.round(baseQty * (1 + highUplift));
    case 'Low':
      return Math.round(baseQty * (1 + lowDownside));
    case 'Base':
    default:
      return baseQty;
  }
}

/**
 * 3. SKU x Country Landed Cost Engine (Sheet 06)
 */
export function computeLandedCosts(state: AppState): LandedCostResult[] {
  const results: LandedCostResult[] = [];
  const { products, countries, costInputs, controlPanel } = state;

  countries.forEach((country) => {
    const cost = costInputs.find((c) => c.countryCode === country.countryCode);
    const oceanFreight = cost ? cost.oceanFreightFeu : 3200;
    const marineInsRate = cost ? cost.marineInsuranceRate : 0.0035;

    products.forEach((product) => {
      const capUnits = getProductContainerCap(product, controlPanel.feuCbm);
      const fobPrice = product.supplierFobUsd;
      const unitFreight = capUnits > 0 ? oceanFreight / capUnits : 0;
      const unitInsurance = (fobPrice + unitFreight) * marineInsRate;
      const unitCif = fobPrice + unitFreight + unitInsurance;
      const unitDutyDai = unitCif * country.importDutyRate;
      const unitPortDrayage = capUnits > 0 ? (country.customsBrokerageBase + country.portDrayageUsd) / capUnits : 0;

      // Note: VAT is recoverable, so excluded from landed inventory cost
      const unitLandedCostUsd = unitCif + unitDutyDai + unitPortDrayage;
      const unitLandedCostLocal = unitLandedCostUsd * country.fxRateToUsd;
      const unitVatAmountUsd = (unitCif + unitDutyDai) * country.vatRate;

      results.push({
        countryCode: country.countryCode,
        skuCode: product.skuCode,
        fobPriceUsd: fobPrice,
        containerCapUnits: capUnits,
        unitFreightUsd: unitFreight,
        unitInsuranceUsd: unitInsurance,
        unitCifUsd: unitCif,
        importDutyRate: country.importDutyRate,
        unitDutyDaiUsd: unitDutyDai,
        unitPortDrayageUsd: unitPortDrayage,
        unitLandedCostUsd,
        unitLandedCostLocal,
        unitVatAmountUsd,
      });
    });
  });

  return results;
}

/**
 * 4. Cost-to-Serve Engine (Sheet 07)
 */
export function computeCostToServe(state: AppState, landedCosts: LandedCostResult[]): CostToServeResult[] {
  const results: CostToServeResult[] = [];
  const { products, countries, costInputs } = state;

  landedCosts.forEach((landed) => {
    const product = products.find((p) => p.skuCode === landed.skuCode);
    const country = countries.find((c) => c.countryCode === landed.countryCode);
    const cost = costInputs.find((c) => c.countryCode === landed.countryCode);

    if (!product || !country || !cost) return;

    const standardPalletCbm = 1.2;
    const unitStorageCostUsd = (product.unitCbm / standardPalletCbm) * cost.warehouseRentPalletMo;
    const unitHandlingCostUsd = (product.unitCbm / standardPalletCbm) * cost.handlingFeePallet;

    const avgOrderUnits = 50;
    const unitLastMileCostUsd = (cost.lastMileDropBaseFee / avgOrderUnits) + (product.unitWeightKg * cost.lastMileRatePerKg);

    const creditDays = 30;
    const unitFinancingCostUsd = landed.unitLandedCostUsd * country.localBorrowingRate * (creditDays / 365);
    const unitBadDebtCostUsd = landed.unitLandedCostUsd * cost.badDebtReserveRate;

    const totalCostToServeUsd =
      unitStorageCostUsd +
      unitHandlingCostUsd +
      unitLastMileCostUsd +
      unitFinancingCostUsd +
      unitBadDebtCostUsd;

    const totalDeliveredCostUsd = landed.unitLandedCostUsd + totalCostToServeUsd;

    results.push({
      countryCode: landed.countryCode,
      skuCode: landed.skuCode,
      unitLandedCostUsd: landed.unitLandedCostUsd,
      unitStorageCostUsd,
      unitHandlingCostUsd,
      unitLastMileCostUsd,
      unitFinancingCostUsd,
      unitBadDebtCostUsd,
      totalCostToServeUsd,
      totalDeliveredCostUsd,
    });
  });

  return results;
}

/**
 * 5. Pricing Engine (Sheet 08)
 */
export function computePricingEngine(
  state: AppState,
  costToServeList: CostToServeResult[]
): PricingEngineResult[] {
  const results: PricingEngineResult[] = [];
  const { countries, controlPanel } = state;

  costToServeList.forEach((cts) => {
    const country = countries.find((c) => c.countryCode === cts.countryCode);
    if (!country) return;

    const requiredTargetMargin = controlPanel.targetMargin + country.countryMarginUplift;
    const requiredFloorMargin = controlPanel.minFloorMargin;

    const deliveredCost = cts.totalDeliveredCostUsd;
    const floorPriceUsd = requiredFloorMargin < 1 ? deliveredCost / (1 - requiredFloorMargin) : 0;
    const targetPriceUsd = requiredTargetMargin < 1 ? deliveredCost / (1 - requiredTargetMargin) : 0;
    const listPriceUsd = controlPanel.maxDiscountLimit < 1 ? targetPriceUsd / (1 - controlPanel.maxDiscountLimit) : targetPriceUsd;

    const maxAllowableDiscount = listPriceUsd > 0 ? (listPriceUsd - floorPriceUsd) / listPriceUsd : 0;

    results.push({
      countryCode: cts.countryCode,
      skuCode: cts.skuCode,
      unitDeliveredCostUsd: deliveredCost,
      requiredTargetMargin,
      requiredFloorMargin,
      floorPriceUsd,
      targetPriceUsd,
      listPriceUsd,
      maxAllowableDiscount,
      fxRateToUsd: country.fxRateToUsd,
      listPriceLocal: listPriceUsd * country.fxRateToUsd,
      targetPriceLocal: targetPriceUsd * country.fxRateToUsd,
      floorPriceLocal: floorPriceUsd * country.fxRateToUsd,
    });
  });

  return results;
}

/**
 * 6. Pricing Matrix & Quotation Simulation (Sheet 09)
 */
export function computePricingMatrix(
  state: AppState,
  pricingEngine: PricingEngineResult[],
  costToServeList: CostToServeResult[]
): PricingMatrixResult[] {
  const { quotes, countries, controlPanel } = state;

  return quotes.map((q) => {
    const pe = pricingEngine.find((p) => p.countryCode === q.countryCode && p.skuCode === q.skuCode);
    const cts = costToServeList.find((c) => c.countryCode === q.countryCode && c.skuCode === q.skuCode);
    const country = countries.find((c) => c.countryCode === q.countryCode);

    const baseListPriceUsd = pe ? pe.listPriceUsd : 0;
    const floorPriceUsd = pe ? pe.floorPriceUsd : 0;
    const minFloorMargin = pe ? pe.requiredFloorMargin : controlPanel.minFloorMargin;

    // Volume discount
    let volumeDiscountRate = 0;
    if (q.orderUnits >= 500) volumeDiscountRate = 0.08;
    else if (q.orderUnits >= 200) volumeDiscountRate = 0.05;
    else if (q.orderUnits >= 50) volumeDiscountRate = 0.02;

    // Credit financing adjustment
    let creditFinancingRate = 0;
    const borrowRate = country ? country.localBorrowingRate : 0.08;
    if (q.termsDays === 0) {
      creditFinancingRate = -0.015; // cash early payment rebate
    } else if (q.termsDays === 30) {
      creditFinancingRate = 0.0;
    } else if (q.termsDays === 60) {
      creditFinancingRate = borrowRate * (30 / 365);
    } else if (q.termsDays === 90) {
      creditFinancingRate = borrowRate * (60 / 365);
    }

    // Pickup rebate if ExWorks
    const pickupRebateUsd = q.deliveryMethod === 'ExWorks' && cts ? cts.unitLastMileCostUsd : 0;

    // Net effective price
    const netEffectivePriceUsd = baseListPriceUsd * (1 - volumeDiscountRate + creditFinancingRate) - pickupRebateUsd;
    const totalOrderAmountUsd = q.orderUnits * netEffectivePriceUsd;

    const actualCost = cts
      ? (q.deliveryMethod === 'ExWorks' ? cts.totalDeliveredCostUsd - pickupRebateUsd : cts.totalDeliveredCostUsd)
      : 0;

    const actualNetMargin = netEffectivePriceUsd > 0 ? (netEffectivePriceUsd - actualCost) / netEffectivePriceUsd : 0;
    const discountRate = baseListPriceUsd > 0 ? (baseListPriceUsd - netEffectivePriceUsd) / baseListPriceUsd : 0;

    let approvalStatus: '✅ Compliant' | '⚠️ Needs Escalation' | '🚨 Below Margin Floor' = '✅ Compliant';
    if (actualNetMargin < minFloorMargin || netEffectivePriceUsd < floorPriceUsd) {
      approvalStatus = '🚨 Below Margin Floor';
    } else if (discountRate > controlPanel.maxDiscountLimit) {
      approvalStatus = '⚠️ Needs Escalation';
    }

    return {
      quoteId: q.quoteId,
      countryCode: q.countryCode,
      skuCode: q.skuCode,
      orderUnits: q.orderUnits,
      termsDays: q.termsDays,
      deliveryMethod: q.deliveryMethod,
      baseListPriceUsd,
      volumeDiscountRate,
      creditFinancingRate,
      pickupRebateUsd,
      netEffectivePriceUsd,
      totalOrderAmountUsd,
      actualNetMargin,
      approvalStatus,
    };
  });
}

/**
 * 7. MOQ & Order Policy (Sheet 10)
 */
export function computeOrderPolicy(
  state: AppState,
  pricingEngine: PricingEngineResult[],
  landedCosts: LandedCostResult[]
): OrderPolicyResult[] {
  const results: OrderPolicyResult[] = [];
  const { products, costInputs, controlPanel } = state;

  pricingEngine.forEach((pe) => {
    const product = products.find((p) => p.skuCode === pe.skuCode);
    const landed = landedCosts.find((l) => l.countryCode === pe.countryCode && l.skuCode === pe.skuCode);
    const cost = costInputs.find((c) => c.countryCode === pe.countryCode);
    if (!product || !landed || !cost) return;

    const targetPriceUsd = pe.targetPriceUsd;
    const unitMarginContribution = targetPriceUsd - landed.unitLandedCostUsd;
    const fixedDropOrderFee = cost.lastMileDropBaseFee;

    const cartonUnits = product.unitsPerCarton || 1;
    const breakEvenUnits = unitMarginContribution > 0 ? Math.ceil(fixedDropOrderFee / unitMarginContribution) : 1;
    const customerEconomicMoq = Math.ceil(breakEvenUnits / cartonUnits) * cartonUnits;

    const minimumOrderValueUsd = customerEconomicMoq * targetPriceUsd;
    const freeDeliveryThreshold = controlPanel.targetMargin > 0
      ? Math.ceil((fixedDropOrderFee / controlPanel.targetMargin) / 10) * 10
      : 500;

    const smallOrderSurcharge = Math.round(fixedDropOrderFee * 1.2);
    const supplierToCustMoqRatio = customerEconomicMoq > 0
      ? Number((product.supplierMoqUnits / customerEconomicMoq).toFixed(1))
      : 0;

    results.push({
      countryCode: pe.countryCode,
      skuCode: pe.skuCode,
      targetPriceUsd,
      unitMarginContribution,
      fixedDropOrderFee,
      customerEconomicMoq,
      minimumOrderValueUsd,
      freeDeliveryThreshold,
      smallOrderSurcharge,
      supplierToCustMoqRatio,
    });
  });

  return results;
}

/**
 * 8. Logistics Scenarios (Sheet 11)
 */
export function computeLogisticsScenarios(
  state: AppState,
  costToServeList: CostToServeResult[],
  landedCosts: LandedCostResult[]
): LogisticsScenarioResult[] {
  const results: LogisticsScenarioResult[] = [];
  const { products, costInputs, demandOrders, controlPanel } = state;

  costToServeList.forEach((cts) => {
    const product = products.find((p) => p.skuCode === cts.skuCode);
    const landed = landedCosts.find((l) => l.countryCode === cts.countryCode && l.skuCode === cts.skuCode);
    const cost = costInputs.find((c) => c.countryCode === cts.countryCode);
    if (!product || !landed || !cost) return;

    // Annual active demand
    const demandRow = demandOrders.find((d) => d.countryCode === cts.countryCode && d.skuCode === cts.skuCode);
    const weeklyActive = demandRow
      ? calculateActiveDemand(
          demandRow.baseDemandQty,
          demandRow.highScenarioUplift,
          demandRow.lowScenarioDownside,
          controlPanel.scenarioActive
        )
      : 30;
    const annualActiveDemand = weeklyActive * 52;

    // Cross border distance km from Central Hub (Guatemala/Panama)
    let crossBorderKm = 0;
    if (cts.countryCode === 'SV') crossBorderKm = 250;
    else if (cts.countryCode === 'HN') crossBorderKm = 450;
    else if (cts.countryCode === 'NI') crossBorderKm = 750;

    const weightTon = product.unitWeightKg / 1000;
    const linehaulCost = weightTon * cost.linehaulPerTonKm * crossBorderKm;
    const hubHandling = 0.45;

    const hubFulfillmentCostUsd = cts.totalDeliveredCostUsd + linehaulCost + hubHandling;
    const localStockingCostUsd = cts.totalDeliveredCostUsd;
    const directShipCostUsd = landed.unitCifUsd + landed.unitDutyDaiUsd;

    const fixedCostDeltaUsd = 12000; // Local warehouse fixed annual base rent
    const variableCostSavingUsd = hubFulfillmentCostUsd - localStockingCostUsd;

    const crossoverUnits = variableCostSavingUsd > 0
      ? Math.ceil(fixedCostDeltaUsd / variableCostSavingUsd / 100) * 100
      : 999999;

    const typicalTier = demandRow?.typicalOrderTier || 'Standard';

    let optimalRoute = '🚚 Centralized Regional Hub';
    if (typicalTier === 'Bulk') {
      optimalRoute = '🚢 Direct FCL Shipment';
    } else if (annualActiveDemand >= crossoverUnits) {
      optimalRoute = '🏬 Local Stocking Warehouse';
    }

    let annualCostSavingUsd = 0;
    const hubTotal = annualActiveDemand * hubFulfillmentCostUsd;
    const localTotal = annualActiveDemand * localStockingCostUsd + fixedCostDeltaUsd;
    const directTotal = annualActiveDemand * directShipCostUsd;

    if (optimalRoute === '🚢 Direct FCL Shipment') {
      annualCostSavingUsd = Math.max(0, hubTotal - directTotal);
    } else if (optimalRoute === '🏬 Local Stocking Warehouse') {
      annualCostSavingUsd = Math.max(0, hubTotal - localTotal);
    } else {
      annualCostSavingUsd = Math.max(0, localTotal - hubTotal);
    }

    results.push({
      countryCode: cts.countryCode,
      skuCode: cts.skuCode,
      annualActiveDemand,
      hubFulfillmentCostUsd,
      localStockingCostUsd,
      directShipCostUsd,
      fixedCostDeltaUsd,
      variableCostSavingUsd,
      logisticsCrossoverUnits: crossoverUnits,
      optimalFulfillmentRoute: optimalRoute,
      annualCostSavingUsd,
    });
  });

  return results;
}

/**
 * 9. Inventory & Purchasing Simulation (Sheet 12)
 */
export function computeInventoryPlan(
  state: AppState,
  landedCosts: LandedCostResult[]
): InventoryPlanResult[] {
  const results: InventoryPlanResult[] = [];
  const { products, demandOrders, controlPanel } = state;

  demandOrders.forEach((demandRow) => {
    const product = products.find((p) => p.skuCode === demandRow.skuCode);
    const landed = landedCosts.find((l) => l.countryCode === demandRow.countryCode && l.skuCode === demandRow.skuCode);
    if (!product || !landed) return;

    const weeklyActiveDemand = calculateActiveDemand(
      demandRow.baseDemandQty,
      demandRow.highScenarioUplift,
      demandRow.lowScenarioDownside,
      controlPanel.scenarioActive
    );

    const leadTimeWeeks = 10; // Standard 8-12 week ocean shipping lead time
    const sigma = weeklyActiveDemand * 0.25; // 25% demand standard deviation

    const dynamicSafetyStock = Math.ceil(controlPanel.serviceLevelZ * Math.sqrt(leadTimeWeeks) * sigma);
    const reorderPointRop = Math.ceil(weeklyActiveDemand * leadTimeWeeks + dynamicSafetyStock);

    // Simulated average ending inventory (approx safety stock + cycle stock)
    const cycleStock = (product.supplierMoqUnits || 100) / 2;
    const endingInventoryUnits = Math.round(dynamicSafetyStock + cycleStock * 0.7);

    // Suggested PO Units with Supplier MOQ and carton constraints
    let suggestedPoUnits = 0;
    if (endingInventoryUnits < reorderPointRop) {
      const netDeficit = reorderPointRop - endingInventoryUnits;
      const targetPo = Math.max(netDeficit, product.supplierMoqUnits);
      const carton = product.unitsPerCarton || 1;
      suggestedPoUnits = Math.ceil(targetPo / carton) * carton;
    }

    const endingInvValueUsd = endingInventoryUnits * landed.unitLandedCostUsd;
    const inventoryWeeksCover = weeklyActiveDemand > 0 ? Number((endingInventoryUnits / weeklyActiveDemand).toFixed(1)) : 99;

    const maxDaysAllowed = controlPanel.excessInvDays;
    const maxWeeksAllowed = maxDaysAllowed / 7;
    const agingRiskProvisionUsd = inventoryWeeksCover > maxWeeksAllowed ? endingInvValueUsd * 0.3 : 0;

    results.push({
      countryCode: demandRow.countryCode,
      skuCode: demandRow.skuCode,
      planWeekId: demandRow.forecastWeekId,
      weeklyActiveDemand,
      leadTimeWeeks,
      demandStdDevWeekly: Number(sigma.toFixed(2)),
      dynamicSafetyStock,
      reorderPointRop,
      endingInventoryUnits,
      suggestedPoUnits,
      endingInvValueUsd,
      inventoryWeeksCover,
      agingRiskProvisionUsd,
    });
  });

  return results;
}

/**
 * 10. Financial Model (Income Statement Waterfall & NWC) (Sheet 13)
 */
export function computeFinancialModel(
  state: AppState,
  pricingEngine: PricingEngineResult[],
  landedCosts: LandedCostResult[],
  costToServeList: CostToServeResult[],
  inventoryPlan: InventoryPlanResult[]
): CountryFinancialResult[] {
  const { countries, demandOrders, costInputs, products, controlPanel } = state;
  const list: CountryFinancialResult[] = [];

  const approvedCreditLines: Record<CountryCode, number> = {
    GT: 200000,
    SV: 160000,
    HN: 180000,
    NI: 150000,
  };

  countries.forEach((country) => {
    const countryDemands = demandOrders.filter((d) => d.countryCode === country.countryCode);
    const costInput = costInputs.find((c) => c.countryCode === country.countryCode);

    let grossRevenueUsd = 0;
    let netRevenueUsd = 0;
    let cogsUsd = 0;
    let varFulfillmentCostUsd = 0;
    let fobPurchasesUsd = 0;

    countryDemands.forEach((d) => {
      const activeDemandAnnual =
        calculateActiveDemand(d.baseDemandQty, d.highScenarioUplift, d.lowScenarioDownside, controlPanel.scenarioActive) *
        52;

      const pe = pricingEngine.find((p) => p.countryCode === d.countryCode && p.skuCode === d.skuCode);
      const landed = landedCosts.find((l) => l.countryCode === d.countryCode && l.skuCode === d.skuCode);
      const cts = costToServeList.find((c) => c.countryCode === d.countryCode && c.skuCode === d.skuCode);
      const product = products.find((p) => p.skuCode === d.skuCode);

      const listPrice = pe ? pe.listPriceUsd : 0;
      const targetPrice = pe ? pe.targetPriceUsd : 0;
      const landedCost = landed ? landed.unitLandedCostUsd : 0;
      const costToServe = cts ? cts.totalCostToServeUsd : 0;
      const fob = product ? product.supplierFobUsd : 0;

      grossRevenueUsd += activeDemandAnnual * listPrice;
      netRevenueUsd += activeDemandAnnual * targetPrice;
      cogsUsd += activeDemandAnnual * landedCost;
      varFulfillmentCostUsd += activeDemandAnnual * costToServe;
      fobPurchasesUsd += activeDemandAnnual * fob;
    });

    const commercialDiscountsUsd = Math.max(0, grossRevenueUsd - netRevenueUsd);
    const grossProfitUsd = netRevenueUsd - cogsUsd;
    const grossMargin = netRevenueUsd > 0 ? grossProfitUsd / netRevenueUsd : 0;

    const fixedWarehouseRent = 12000;
    const fulfillmentOpExUsd = varFulfillmentCostUsd + fixedWarehouseRent;

    const contributionMarginUsd = grossProfitUsd - fulfillmentOpExUsd;
    const contributionMarginRatio = netRevenueUsd > 0 ? contributionMarginUsd / netRevenueUsd : 0;

    const commRate = costInput ? costInput.salesCommissionRate : 0.025;
    const badDebtRate = costInput ? costInput.badDebtReserveRate : 0.015;
    const commercialSgaUsd = netRevenueUsd * (commRate + badDebtRate);

    const operatingEbitUsd = contributionMarginUsd - commercialSgaUsd;
    const operatingMargin = netRevenueUsd > 0 ? operatingEbitUsd / netRevenueUsd : 0;

    // NWC
    const avgDso = 45;
    const accountsReceivableUsd = netRevenueUsd * (avgDso / 365);

    const countryInv = inventoryPlan.filter((i) => i.countryCode === country.countryCode);
    const inventoryCapitalUsd = countryInv.reduce((sum, item) => sum + item.endingInvValueUsd, 0);

    const avgDpo = 30;
    const accountsPayableUsd = fobPurchasesUsd * (avgDpo / 365);

    const netWorkingCapitalUsd = accountsReceivableUsd + inventoryCapitalUsd - accountsPayableUsd;
    const approvedCreditLineUsd = approvedCreditLines[country.countryCode] || 160000;

    const gap = netWorkingCapitalUsd - approvedCreditLineUsd;
    const hasFinancingGap = gap > 0;
    const financingGapAlert = hasFinancingGap
      ? `🚨 Credit Deficit: $${Math.round(gap).toLocaleString()}`
      : '✅ Capital Adequate';

    list.push({
      countryCode: country.countryCode,
      grossRevenueUsd,
      commercialDiscountsUsd,
      netRevenueUsd,
      cogsUsd,
      grossProfitUsd,
      grossMargin,
      fulfillmentOpExUsd,
      contributionMarginUsd,
      contributionMarginRatio,
      commercialSgaUsd,
      operatingEbitUsd,
      operatingMargin,
      accountsReceivableUsd,
      inventoryCapitalUsd,
      accountsPayableUsd,
      netWorkingCapitalUsd,
      approvedCreditLineUsd,
      financingGapAlert,
      hasFinancingGap,
    });
  });

  // CONSOLIDATED (CONSOL)
  const consolGrossRev = list.reduce((s, c) => s + c.grossRevenueUsd, 0);
  const consolCommDisc = list.reduce((s, c) => s + c.commercialDiscountsUsd, 0);
  const consolNetRev = list.reduce((s, c) => s + c.netRevenueUsd, 0);
  const consolCogs = list.reduce((s, c) => s + c.cogsUsd, 0);
  const consolGrossProfit = consolNetRev - consolCogs;
  const consolGrossMargin = consolNetRev > 0 ? consolGrossProfit / consolNetRev : 0;
  const consolFulfillmentOpEx = list.reduce((s, c) => s + c.fulfillmentOpExUsd, 0);
  const consolContributionMargin = consolGrossProfit - consolFulfillmentOpEx;
  const consolContributionMarginRatio = consolNetRev > 0 ? consolContributionMargin / consolNetRev : 0;
  const consolSga = list.reduce((s, c) => s + c.commercialSgaUsd, 0);
  const consolEbit = consolContributionMargin - consolSga;
  const consolEbitMargin = consolNetRev > 0 ? consolEbit / consolNetRev : 0;

  const consolAr = list.reduce((s, c) => s + c.accountsReceivableUsd, 0);
  const consolInv = list.reduce((s, c) => s + c.inventoryCapitalUsd, 0);
  const consolAp = list.reduce((s, c) => s + c.accountsPayableUsd, 0);
  const consolNwc = consolAr + consolInv - consolAp;
  const consolCredit = list.reduce((s, c) => s + c.approvedCreditLineUsd, 0);
  const consolGap = consolNwc - consolCredit;

  list.push({
    countryCode: 'CONSOL',
    grossRevenueUsd: consolGrossRev,
    commercialDiscountsUsd: consolCommDisc,
    netRevenueUsd: consolNetRev,
    cogsUsd: consolCogs,
    grossProfitUsd: consolGrossProfit,
    grossMargin: consolGrossMargin,
    fulfillmentOpExUsd: consolFulfillmentOpEx,
    contributionMarginUsd: consolContributionMargin,
    contributionMarginRatio: consolContributionMarginRatio,
    commercialSgaUsd: consolSga,
    operatingEbitUsd: consolEbit,
    operatingMargin: consolEbitMargin,
    accountsReceivableUsd: consolAr,
    inventoryCapitalUsd: consolInv,
    accountsPayableUsd: consolAp,
    netWorkingCapitalUsd: consolNwc,
    approvedCreditLineUsd: consolCredit,
    financingGapAlert: consolGap > 0 ? `🚨 Group Deficit: $${Math.round(consolGap).toLocaleString()}` : '✅ Group Capital Adequate',
    hasFinancingGap: consolGap > 0,
  });

  return list;
}
