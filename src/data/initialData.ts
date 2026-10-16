import { AppState, ControlPanelConfig, ProductItem, CountryItem, CostInputItem, DemandOrderItem, QuoteSimulationItem } from '../types';

export const initialControlPanel: ControlPanelConfig = {
  scenarioActive: 'Base',
  baseCurrency: 'USD',
  annualWacc: 0.12, // 12.00%
  targetMargin: 0.25, // 25.00%
  minFloorMargin: 0.12, // 12.00%
  serviceLevelZ: 1.645, // 95% service level
  maxDiscountLimit: 0.15, // 15.00%
  excessInvDays: 120, // 120 days
  feuCbm: 68.0, // 68.0 m³ for 40HQ container
};

export const initialProducts: ProductItem[] = [
  {
    skuCode: 'SKU-1001',
    productDesc: 'Commercial Water Pump 1HP High Flow',
    category: 'Industrial',
    unitsPerCarton: 4,
    unitCbm: 0.045,
    unitWeightKg: 18.5,
    supplierFobUsd: 95.0,
    purchasingCurrency: 'USD',
    supplierMoqUnits: 200,
    shelfLifeDays: 9999,
  },
  {
    skuCode: 'SKU-1002',
    productDesc: 'Industrial Heavy Valve DN50 Ductile Iron',
    category: 'Industrial',
    unitsPerCarton: 6,
    unitCbm: 0.032,
    unitWeightKg: 12.0,
    supplierFobUsd: 68.0,
    purchasingCurrency: 'USD',
    supplierMoqUnits: 300,
    shelfLifeDays: 9999,
  },
  {
    skuCode: 'SKU-2001',
    productDesc: 'Electric Pressure Washer 2000PSI Compact',
    category: 'Consumer',
    unitsPerCarton: 1,
    unitCbm: 0.075,
    unitWeightKg: 14.2,
    supplierFobUsd: 115.0,
    purchasingCurrency: 'USD',
    supplierMoqUnits: 150,
    shelfLifeDays: 1825,
  },
  {
    skuCode: 'SKU-2002',
    productDesc: 'Household Solar Inverter 3kW Pure Sine',
    category: 'Consumer',
    unitsPerCarton: 2,
    unitCbm: 0.052,
    unitWeightKg: 9.8,
    supplierFobUsd: 145.0,
    purchasingCurrency: 'USD',
    supplierMoqUnits: 100,
    shelfLifeDays: 3650,
  },
  {
    skuCode: 'SKU-3001',
    productDesc: 'Reinforced Brass Coupling Pack 3/4"',
    category: 'Accessories',
    unitsPerCarton: 20,
    unitCbm: 0.012,
    unitWeightKg: 4.5,
    supplierFobUsd: 18.5,
    purchasingCurrency: 'USD',
    supplierMoqUnits: 500,
    shelfLifeDays: 9999,
  },
  {
    skuCode: 'SKU-3002',
    productDesc: 'High-Pressure Hose Assembly 15M Steel Braided',
    category: 'Accessories',
    unitsPerCarton: 10,
    unitCbm: 0.024,
    unitWeightKg: 6.2,
    supplierFobUsd: 24.0,
    purchasingCurrency: 'USD',
    supplierMoqUnits: 400,
    shelfLifeDays: 1825,
  },
];

export const initialCountries: CountryItem[] = [
  {
    countryCode: 'GT',
    countryName: 'Guatemala',
    currencyCode: 'GTQ',
    currencySymbol: 'Q',
    fxRateToUsd: 7.8,
    importDutyRate: 0.1, // 10.00%
    vatRate: 0.12, // 12.00%
    vatRecoverable: true,
    customsBrokerageBase: 280.0,
    portDrayageUsd: 450.0,
    localBorrowingRate: 0.085, // 8.50%
    countryMarginUplift: 0.02, // 2.00%
  },
  {
    countryCode: 'SV',
    countryName: 'El Salvador',
    currencyCode: 'USD',
    currencySymbol: '$',
    fxRateToUsd: 1.0,
    importDutyRate: 0.1, // 10.00%
    vatRate: 0.13, // 13.00%
    vatRecoverable: true,
    customsBrokerageBase: 250.0,
    portDrayageUsd: 380.0,
    localBorrowingRate: 0.07, // 7.00%
    countryMarginUplift: 0.0, // 0.00%
  },
  {
    countryCode: 'HN',
    countryName: 'Honduras',
    currencyCode: 'HNL',
    currencySymbol: 'L',
    fxRateToUsd: 24.6,
    importDutyRate: 0.15, // 15.00%
    vatRate: 0.15, // 15.00%
    vatRecoverable: true,
    customsBrokerageBase: 320.0,
    portDrayageUsd: 520.0,
    localBorrowingRate: 0.115, // 11.50%
    countryMarginUplift: 0.04, // 4.00%
  },
  {
    countryCode: 'NI',
    countryName: 'Nicaragua',
    currencyCode: 'NIO',
    currencySymbol: 'C$',
    fxRateToUsd: 36.8,
    importDutyRate: 0.1, // 10.00%
    vatRate: 0.15, // 15.00%
    vatRecoverable: true,
    customsBrokerageBase: 350.0,
    portDrayageUsd: 580.0,
    localBorrowingRate: 0.13, // 13.00%
    countryMarginUplift: 0.06, // 6.00%
  },
];

export const initialCostInputs: CostInputItem[] = [
  {
    countryCode: 'GT',
    oceanFreightFeu: 3200.0,
    marineInsuranceRate: 0.0035, // 0.35%
    warehouseRentPalletMo: 18.0,
    handlingFeePallet: 6.5,
    linehaulPerTonKm: 0.12,
    lastMileDropBaseFee: 35.0,
    lastMileRatePerKg: 0.22,
    salesCommissionRate: 0.025, // 2.50%
    badDebtReserveRate: 0.015, // 1.50%
  },
  {
    countryCode: 'SV',
    oceanFreightFeu: 3100.0,
    marineInsuranceRate: 0.0035,
    warehouseRentPalletMo: 16.5,
    handlingFeePallet: 6.0,
    linehaulPerTonKm: 0.11,
    lastMileDropBaseFee: 30.0,
    lastMileRatePerKg: 0.2,
    salesCommissionRate: 0.02, // 2.00%
    badDebtReserveRate: 0.012, // 1.20%
  },
  {
    countryCode: 'HN',
    oceanFreightFeu: 3400.0,
    marineInsuranceRate: 0.0035,
    warehouseRentPalletMo: 17.0,
    handlingFeePallet: 6.8,
    linehaulPerTonKm: 0.135,
    lastMileDropBaseFee: 38.0,
    lastMileRatePerKg: 0.25,
    salesCommissionRate: 0.025,
    badDebtReserveRate: 0.02, // 2.00%
  },
  {
    countryCode: 'NI',
    oceanFreightFeu: 3600.0,
    marineInsuranceRate: 0.0035,
    warehouseRentPalletMo: 19.0,
    handlingFeePallet: 7.2,
    linehaulPerTonKm: 0.145,
    lastMileDropBaseFee: 42.0,
    lastMileRatePerKg: 0.28,
    salesCommissionRate: 0.03, // 3.00%
    badDebtReserveRate: 0.025, // 2.50%
  },
];

// Helper to seed initial weekly demand across 4 countries and 6 SKUs
export const initialDemandOrders: DemandOrderItem[] = [
  // GT
  { id: 'GT-SKU-1001', countryCode: 'GT', skuCode: 'SKU-1001', forecastWeekId: 'W01-W52', baseDemandQty: 45, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 20, paymentTermsDays: 30 },
  { id: 'GT-SKU-1002', countryCode: 'GT', skuCode: 'SKU-1002', forecastWeekId: 'W01-W52', baseDemandQty: 60, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 30, paymentTermsDays: 30 },
  { id: 'GT-SKU-2001', countryCode: 'GT', skuCode: 'SKU-2001', forecastWeekId: 'W01-W52', baseDemandQty: 30, highScenarioUplift: 0.25, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 10, paymentTermsDays: 30 },
  { id: 'GT-SKU-2002', countryCode: 'GT', skuCode: 'SKU-2002', forecastWeekId: 'W01-W52', baseDemandQty: 25, highScenarioUplift: 0.2, lowScenarioDownside: -0.15, typicalOrderTier: 'Small', orderBatchUnits: 6, paymentTermsDays: 60 },
  { id: 'GT-SKU-3001', countryCode: 'GT', skuCode: 'SKU-3001', forecastWeekId: 'W01-W52', baseDemandQty: 120, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Bulk', orderBatchUnits: 100, paymentTermsDays: 30 },
  { id: 'GT-SKU-3002', countryCode: 'GT', skuCode: 'SKU-3002', forecastWeekId: 'W01-W52', baseDemandQty: 80, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 40, paymentTermsDays: 30 },

  // SV
  { id: 'SV-SKU-1001', countryCode: 'SV', skuCode: 'SKU-1001', forecastWeekId: 'W01-W52', baseDemandQty: 35, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 16, paymentTermsDays: 30 },
  { id: 'SV-SKU-1002', countryCode: 'SV', skuCode: 'SKU-1002', forecastWeekId: 'W01-W52', baseDemandQty: 48, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 24, paymentTermsDays: 30 },
  { id: 'SV-SKU-2001', countryCode: 'SV', skuCode: 'SKU-2001', forecastWeekId: 'W01-W52', baseDemandQty: 25, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 8, paymentTermsDays: 30 },
  { id: 'SV-SKU-2002', countryCode: 'SV', skuCode: 'SKU-2002', forecastWeekId: 'W01-W52', baseDemandQty: 18, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Small', orderBatchUnits: 4, paymentTermsDays: 30 },
  { id: 'SV-SKU-3001', countryCode: 'SV', skuCode: 'SKU-3001', forecastWeekId: 'W01-W52', baseDemandQty: 90, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Bulk', orderBatchUnits: 80, paymentTermsDays: 30 },
  { id: 'SV-SKU-3002', countryCode: 'SV', skuCode: 'SKU-3002', forecastWeekId: 'W01-W52', baseDemandQty: 60, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 30, paymentTermsDays: 30 },

  // HN
  { id: 'HN-SKU-1001', countryCode: 'HN', skuCode: 'SKU-1001', forecastWeekId: 'W01-W52', baseDemandQty: 40, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 20, paymentTermsDays: 60 },
  { id: 'HN-SKU-1002', countryCode: 'HN', skuCode: 'SKU-1002', forecastWeekId: 'W01-W52', baseDemandQty: 52, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 24, paymentTermsDays: 30 },
  { id: 'HN-SKU-2001', countryCode: 'HN', skuCode: 'SKU-2001', forecastWeekId: 'W01-W52', baseDemandQty: 28, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 10, paymentTermsDays: 30 },
  { id: 'HN-SKU-2002', countryCode: 'HN', skuCode: 'SKU-2002', forecastWeekId: 'W01-W52', baseDemandQty: 15, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Small', orderBatchUnits: 4, paymentTermsDays: 60 },
  { id: 'HN-SKU-3001', countryCode: 'HN', skuCode: 'SKU-3001', forecastWeekId: 'W01-W52', baseDemandQty: 85, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 60, paymentTermsDays: 30 },
  { id: 'HN-SKU-3002', countryCode: 'HN', skuCode: 'SKU-3002', forecastWeekId: 'W01-W52', baseDemandQty: 55, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 30, paymentTermsDays: 30 },

  // NI
  { id: 'NI-SKU-1001', countryCode: 'NI', skuCode: 'SKU-1001', forecastWeekId: 'W01-W52', baseDemandQty: 28, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 12, paymentTermsDays: 60 },
  { id: 'NI-SKU-1002', countryCode: 'NI', skuCode: 'SKU-1002', forecastWeekId: 'W01-W52', baseDemandQty: 38, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 18, paymentTermsDays: 60 },
  { id: 'NI-SKU-2001', countryCode: 'NI', skuCode: 'SKU-2001', forecastWeekId: 'W01-W52', baseDemandQty: 18, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Small', orderBatchUnits: 6, paymentTermsDays: 30 },
  { id: 'NI-SKU-2002', countryCode: 'NI', skuCode: 'SKU-2002', forecastWeekId: 'W01-W52', baseDemandQty: 12, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Small', orderBatchUnits: 2, paymentTermsDays: 90 },
  { id: 'NI-SKU-3001', countryCode: 'NI', skuCode: 'SKU-3001', forecastWeekId: 'W01-W52', baseDemandQty: 65, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 40, paymentTermsDays: 30 },
  { id: 'NI-SKU-3002', countryCode: 'NI', skuCode: 'SKU-3002', forecastWeekId: 'W01-W52', baseDemandQty: 42, highScenarioUplift: 0.2, lowScenarioDownside: -0.2, typicalOrderTier: 'Standard', orderBatchUnits: 20, paymentTermsDays: 60 },
];

export const initialQuotes: QuoteSimulationItem[] = [
  { quoteId: 'Q-2026-001', countryCode: 'GT', skuCode: 'SKU-1001', orderUnits: 250, termsDays: 30, deliveryMethod: 'Delivered' },
  { quoteId: 'Q-2026-002', countryCode: 'GT', skuCode: 'SKU-2002', orderUnits: 600, termsDays: 60, deliveryMethod: 'ExWorks' },
  { quoteId: 'Q-2026-003', countryCode: 'SV', skuCode: 'SKU-1002', orderUnits: 80, termsDays: 0, deliveryMethod: 'Delivered' },
  { quoteId: 'Q-2026-004', countryCode: 'HN', skuCode: 'SKU-2001', orderUnits: 15, termsDays: 90, deliveryMethod: 'Delivered' },
  { quoteId: 'Q-2026-005', countryCode: 'NI', skuCode: 'SKU-1001', orderUnits: 300, termsDays: 90, deliveryMethod: 'ExWorks' },
  { quoteId: 'Q-2026-006', countryCode: 'GT', skuCode: 'SKU-3001', orderUnits: 1200, termsDays: 30, deliveryMethod: 'Delivered' },
  { quoteId: 'Q-2026-007', countryCode: 'HN', skuCode: 'SKU-1002', orderUnits: 550, termsDays: 90, deliveryMethod: 'Delivered' },
];

export const initialAppState: AppState = {
  controlPanel: initialControlPanel,
  products: initialProducts,
  countries: initialCountries,
  costInputs: initialCostInputs,
  demandOrders: initialDemandOrders,
  quotes: initialQuotes,
  lastSaved: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
};
