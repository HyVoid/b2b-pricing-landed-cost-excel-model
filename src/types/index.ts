/**
 * Data models and calculation types for B2B Cross-Border Distribution Pricing & Profitability Decision Engine
 */

export type ScenarioType = 'Low' | 'Base' | 'High';
export type CountryCode = 'GT' | 'SV' | 'HN' | 'NI';
export type CountryOrConsol = CountryCode | 'CONSOL';
export type OrderTier = 'Small' | 'Standard' | 'Bulk';
export type DeliveryMethod = 'Delivered' | 'ExWorks';

export interface ControlPanelConfig {
  scenarioActive: ScenarioType;
  baseCurrency: string;
  annualWacc: number; // e.g., 0.12 (12%)
  targetMargin: number; // e.g., 0.25 (25%)
  minFloorMargin: number; // e.g., 0.12 (12%)
  serviceLevelZ: number; // e.g., 1.645 (95%)
  maxDiscountLimit: number; // e.g., 0.15 (15%)
  excessInvDays: number; // e.g., 120 days
  feuCbm: number; // e.g., 68.0 m³
}

export interface ProductItem {
  skuCode: string;
  productDesc: string;
  category: 'Industrial' | 'Consumer' | 'Accessories';
  unitsPerCarton: number;
  unitCbm: number;
  unitWeightKg: number;
  supplierFobUsd: number;
  purchasingCurrency: string;
  supplierMoqUnits: number;
  shelfLifeDays: number;
}

export interface CountryItem {
  countryCode: CountryCode;
  countryName: string;
  currencyCode: string;
  currencySymbol: string;
  fxRateToUsd: number; // 1 USD = X Local Currency
  importDutyRate: number; // DAI
  vatRate: number; // IVA/ISV
  vatRecoverable: boolean;
  customsBrokerageBase: number; // USD
  portDrayageUsd: number; // USD
  localBorrowingRate: number; // % annual
  countryMarginUplift: number; // % uplift for risk
}

export interface CostInputItem {
  countryCode: CountryCode;
  oceanFreightFeu: number; // USD per 40HQ
  marineInsuranceRate: number; // %
  warehouseRentPalletMo: number; // USD per pallet / month
  handlingFeePallet: number; // USD per pallet
  linehaulPerTonKm: number; // USD per ton*km
  lastMileDropBaseFee: number; // USD fixed drop fee
  lastMileRatePerKg: number; // USD per kg
  salesCommissionRate: number; // %
  badDebtReserveRate: number; // %
}

export interface DemandOrderItem {
  id: string;
  countryCode: CountryCode;
  skuCode: string;
  forecastWeekId: string;
  baseDemandQty: number;
  highScenarioUplift: number; // e.g., 0.20
  lowScenarioDownside: number; // e.g., -0.20
  typicalOrderTier: OrderTier;
  orderBatchUnits: number;
  paymentTermsDays: number;
}

export interface QuoteSimulationItem {
  quoteId: string;
  countryCode: CountryCode;
  skuCode: string;
  orderUnits: number;
  termsDays: number;
  deliveryMethod: DeliveryMethod;
}

export interface LandedCostResult {
  countryCode: CountryCode;
  skuCode: string;
  fobPriceUsd: number;
  containerCapUnits: number;
  unitFreightUsd: number;
  unitInsuranceUsd: number;
  unitCifUsd: number;
  importDutyRate: number;
  unitDutyDaiUsd: number;
  unitPortDrayageUsd: number;
  unitLandedCostUsd: number;
  unitLandedCostLocal: number;
  unitVatAmountUsd: number;
}

export interface CostToServeResult {
  countryCode: CountryCode;
  skuCode: string;
  unitLandedCostUsd: number;
  unitStorageCostUsd: number;
  unitHandlingCostUsd: number;
  unitLastMileCostUsd: number;
  unitFinancingCostUsd: number;
  unitBadDebtCostUsd: number;
  totalCostToServeUsd: number;
  totalDeliveredCostUsd: number;
}

export interface PricingEngineResult {
  countryCode: CountryCode;
  skuCode: string;
  unitDeliveredCostUsd: number;
  requiredTargetMargin: number;
  requiredFloorMargin: number;
  floorPriceUsd: number;
  targetPriceUsd: number;
  listPriceUsd: number;
  maxAllowableDiscount: number;
  fxRateToUsd: number;
  listPriceLocal: number;
  targetPriceLocal: number;
  floorPriceLocal: number;
}

export interface PricingMatrixResult {
  quoteId: string;
  countryCode: CountryCode;
  skuCode: string;
  orderUnits: number;
  termsDays: number;
  deliveryMethod: DeliveryMethod;
  baseListPriceUsd: number;
  volumeDiscountRate: number;
  creditFinancingRate: number;
  pickupRebateUsd: number;
  netEffectivePriceUsd: number;
  totalOrderAmountUsd: number;
  actualNetMargin: number;
  approvalStatus: '✅ Compliant' | '⚠️ Needs Escalation' | '🚨 Below Margin Floor';
}

export interface OrderPolicyResult {
  countryCode: CountryCode;
  skuCode: string;
  targetPriceUsd: number;
  unitMarginContribution: number;
  fixedDropOrderFee: number;
  customerEconomicMoq: number;
  minimumOrderValueUsd: number;
  freeDeliveryThreshold: number;
  smallOrderSurcharge: number;
  supplierToCustMoqRatio: number;
}

export interface LogisticsScenarioResult {
  countryCode: CountryCode;
  skuCode: string;
  annualActiveDemand: number;
  hubFulfillmentCostUsd: number;
  localStockingCostUsd: number;
  directShipCostUsd: number;
  fixedCostDeltaUsd: number;
  variableCostSavingUsd: number;
  logisticsCrossoverUnits: number;
  optimalFulfillmentRoute: string;
  annualCostSavingUsd: number;
}

export interface InventoryPlanResult {
  countryCode: CountryCode;
  skuCode: string;
  planWeekId: string;
  weeklyActiveDemand: number;
  leadTimeWeeks: number;
  demandStdDevWeekly: number;
  dynamicSafetyStock: number;
  reorderPointRop: number;
  endingInventoryUnits: number;
  suggestedPoUnits: number;
  endingInvValueUsd: number;
  inventoryWeeksCover: number;
  agingRiskProvisionUsd: number;
}

export interface CountryFinancialResult {
  countryCode: CountryOrConsol;
  grossRevenueUsd: number;
  commercialDiscountsUsd: number;
  netRevenueUsd: number;
  cogsUsd: number;
  grossProfitUsd: number;
  grossMargin: number;
  fulfillmentOpExUsd: number;
  contributionMarginUsd: number;
  contributionMarginRatio: number;
  commercialSgaUsd: number;
  operatingEbitUsd: number;
  operatingMargin: number;
  accountsReceivableUsd: number;
  inventoryCapitalUsd: number;
  accountsPayableUsd: number;
  netWorkingCapitalUsd: number;
  approvedCreditLineUsd: number;
  financingGapAlert: string;
  hasFinancingGap: boolean;
}

export interface AppState {
  controlPanel: ControlPanelConfig;
  products: ProductItem[];
  countries: CountryItem[];
  costInputs: CostInputItem[];
  demandOrders: DemandOrderItem[];
  quotes: QuoteSimulationItem[];
  lastSaved: string;
}

export type ActiveSheetId =
  | '15_Decision Dashboard'
  | '16_Customer Price Lists'
  | '01_Control Panel'
  | '02_Product Master'
  | '03_Country Master'
  | '04_Cost Inputs'
  | '05_Demand & Orders'
  | '06_Landed Cost Engine'
  | '07_Cost-to-Serve Engine'
  | '08_Pricing Engine'
  | '09_Pricing Matrix'
  | '10_MOQ & Order Policy'
  | '11_Logistics Scenarios'
  | '12_Inventory & Purchasing'
  | '13_Financial Model'
  | '14_Sensitivity';
