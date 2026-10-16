import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import {
  AppState,
  ActiveSheetId,
  ProductItem,
  CountryItem,
  CostInputItem,
  DemandOrderItem,
  QuoteSimulationItem,
  ControlPanelConfig,
  LandedCostResult,
  CostToServeResult,
  PricingEngineResult,
  PricingMatrixResult,
  OrderPolicyResult,
  LogisticsScenarioResult,
  InventoryPlanResult,
  CountryFinancialResult,
} from '../types';
import { initialAppState } from '../data/initialData';
import {
  computeLandedCosts,
  computeCostToServe,
  computePricingEngine,
  computePricingMatrix,
  computeOrderPolicy,
  computeLogisticsScenarios,
  computeInventoryPlan,
  computeFinancialModel,
} from '../utils/engine';

interface AppContextValue {
  state: AppState;
  activeSheet: ActiveSheetId;
  setActiveSheet: (sheet: ActiveSheetId) => void;
  updateControlPanel: (updates: Partial<ControlPanelConfig>) => void;
  updateProduct: (skuCode: string, updates: Partial<ProductItem>) => void;
  addProduct: (product: ProductItem) => void;
  deleteProduct: (skuCode: string) => void;
  updateCountry: (countryCode: string, updates: Partial<CountryItem>) => void;
  updateCostInput: (countryCode: string, updates: Partial<CostInputItem>) => void;
  updateDemandOrder: (id: string, updates: Partial<DemandOrderItem>) => void;
  addDemandOrder: (item: DemandOrderItem) => void;
  deleteDemandOrder: (id: string) => void;
  updateQuote: (quoteId: string, updates: Partial<QuoteSimulationItem>) => void;
  addQuote: (quote: QuoteSimulationItem) => void;
  deleteQuote: (quoteId: string) => void;
  exportBackup: () => void;
  importBackup: (jsonContent: string) => boolean;
  bulkCsvImport: (tableType: 'products' | 'demand' | 'quotes', csvText: string) => { success: boolean; count: number; error?: string };
  resetData: () => void;

  // Memoized Calculation Results
  landedCosts: LandedCostResult[];
  costToServeList: CostToServeResult[];
  pricingEngineResults: PricingEngineResult[];
  pricingMatrixResults: PricingMatrixResult[];
  orderPolicyResults: OrderPolicyResult[];
  logisticsScenarios: LogisticsScenarioResult[];
  inventoryPlans: InventoryPlanResult[];
  financialModel: CountryFinancialResult[];
}

const STORAGE_KEY = 'b2b_pricing_decision_engine_storage_v1';

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeSheet, setActiveSheet] = useState<ActiveSheetId>('15_Decision Dashboard');

  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.controlPanel && parsed.products) {
          return {
            ...initialAppState,
            ...parsed,
            lastSaved: parsed.lastSaved || new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          };
        }
      }
    } catch (e) {
      console.warn('Failed to parse state from localStorage:', e);
    }
    return initialAppState;
  });

  // Auto-save on state mutation
  const persistState = (newState: AppState) => {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const stateToSave = { ...newState, lastSaved: timestamp };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.error('LocalStorage write error:', e);
    }
    setState(stateToSave);
  };

  // Updaters
  const updateControlPanel = (updates: Partial<ControlPanelConfig>) => {
    persistState({
      ...state,
      controlPanel: { ...state.controlPanel, ...updates },
    });
  };

  const updateProduct = (skuCode: string, updates: Partial<ProductItem>) => {
    const newProducts = state.products.map((p) => (p.skuCode === skuCode ? { ...p, ...updates } : p));
    persistState({ ...state, products: newProducts });
  };

  const addProduct = (product: ProductItem) => {
    persistState({ ...state, products: [...state.products, product] });
  };

  const deleteProduct = (skuCode: string) => {
    persistState({
      ...state,
      products: state.products.filter((p) => p.skuCode !== skuCode),
      demandOrders: state.demandOrders.filter((d) => d.skuCode !== skuCode),
      quotes: state.quotes.filter((q) => q.skuCode !== skuCode),
    });
  };

  const updateCountry = (countryCode: string, updates: Partial<CountryItem>) => {
    const newCountries = state.countries.map((c) => (c.countryCode === countryCode ? { ...c, ...updates } : c));
    persistState({ ...state, countries: newCountries });
  };

  const updateCostInput = (countryCode: string, updates: Partial<CostInputItem>) => {
    const newCostInputs = state.costInputs.map((c) => (c.countryCode === countryCode ? { ...c, ...updates } : c));
    persistState({ ...state, costInputs: newCostInputs });
  };

  const updateDemandOrder = (id: string, updates: Partial<DemandOrderItem>) => {
    const newDemand = state.demandOrders.map((d) => (d.id === id ? { ...d, ...updates } : d));
    persistState({ ...state, demandOrders: newDemand });
  };

  const addDemandOrder = (item: DemandOrderItem) => {
    persistState({ ...state, demandOrders: [...state.demandOrders, item] });
  };

  const deleteDemandOrder = (id: string) => {
    persistState({ ...state, demandOrders: state.demandOrders.filter((d) => d.id !== id) });
  };

  const updateQuote = (quoteId: string, updates: Partial<QuoteSimulationItem>) => {
    const newQuotes = state.quotes.map((q) => (q.quoteId === quoteId ? { ...q, ...updates } : q));
    persistState({ ...state, quotes: newQuotes });
  };

  const addQuote = (quote: QuoteSimulationItem) => {
    persistState({ ...state, quotes: [...state.quotes, quote] });
  };

  const deleteQuote = (quoteId: string) => {
    persistState({ ...state, quotes: state.quotes.filter((q) => q.quoteId !== quoteId) });
  };

  const resetData = () => {
    localStorage.removeItem(STORAGE_KEY);
    const resetTimestamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const fresh = { ...initialAppState, lastSaved: resetTimestamp };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    } catch {}
    setState(fresh);
  };

  const exportBackup = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `b2b_decision_engine_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importBackup = (jsonContent: string): boolean => {
    try {
      const parsed = JSON.parse(jsonContent);
      if (parsed && parsed.controlPanel && parsed.products && parsed.countries) {
        persistState(parsed);
        return true;
      }
    } catch (err) {
      console.error('Import parse error:', err);
    }
    return false;
  };

  const bulkCsvImport = (tableType: 'products' | 'demand' | 'quotes', csvText: string) => {
    try {
      const lines = csvText.trim().split(/\r?\n/).filter((l) => l.trim().length > 0);
      if (lines.length < 2) {
        return { success: false, count: 0, error: 'CSV file must contain a header and at least one data row.' };
      }

      const headers = lines[0].split(',').map((h) => h.trim().toLowerCase().replace(/["\s_]/g, ''));

      if (tableType === 'products') {
        const newProducts: ProductItem[] = [];
        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(',').map((c) => c.trim().replace(/^["']|["']$/g, ''));
          if (cols.length >= 6) {
            newProducts.push({
              skuCode: cols[0] || `SKU-${Date.now().toString().slice(-4)}-${i}`,
              productDesc: cols[1] || 'Imported Product',
              category: (cols[2] as any) || 'Industrial',
              unitsPerCarton: Number(cols[3]) || 1,
              unitCbm: Number(cols[4]) || 0.02,
              unitWeightKg: Number(cols[5]) || 5.0,
              supplierFobUsd: Number(cols[6]) || 50.0,
              purchasingCurrency: cols[7] || 'USD',
              supplierMoqUnits: Number(cols[8]) || 100,
              shelfLifeDays: Number(cols[9]) || 9999,
            });
          }
        }
        if (newProducts.length > 0) {
          persistState({ ...state, products: [...state.products, ...newProducts] });
          return { success: true, count: newProducts.length };
        }
      } else if (tableType === 'demand') {
        const newDemands: DemandOrderItem[] = [];
        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(',').map((c) => c.trim().replace(/^["']|["']$/g, ''));
          if (cols.length >= 4) {
            newDemands.push({
              id: `IMP-${Date.now()}-${i}`,
              countryCode: (cols[0].toUpperCase() as any) || 'GT',
              skuCode: cols[1] || 'SKU-1001',
              forecastWeekId: cols[2] || 'W01-W52',
              baseDemandQty: Number(cols[3]) || 20,
              highScenarioUplift: Number(cols[4]) || 0.2,
              lowScenarioDownside: Number(cols[5]) || -0.2,
              typicalOrderTier: (cols[6] as any) || 'Standard',
              orderBatchUnits: Number(cols[7]) || 20,
              paymentTermsDays: Number(cols[8]) || 30,
            });
          }
        }
        if (newDemands.length > 0) {
          persistState({ ...state, demandOrders: [...state.demandOrders, ...newDemands] });
          return { success: true, count: newDemands.length };
        }
      } else if (tableType === 'quotes') {
        const newQuotes: QuoteSimulationItem[] = [];
        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(',').map((c) => c.trim().replace(/^["']|["']$/g, ''));
          if (cols.length >= 4) {
            newQuotes.push({
              quoteId: cols[0] || `Q-${Date.now().toString().slice(-4)}-${i}`,
              countryCode: (cols[1].toUpperCase() as any) || 'GT',
              skuCode: cols[2] || 'SKU-1001',
              orderUnits: Number(cols[3]) || 100,
              termsDays: Number(cols[4]) || 30,
              deliveryMethod: (cols[5] as any) === 'ExWorks' ? 'ExWorks' : 'Delivered',
            });
          }
        }
        if (newQuotes.length > 0) {
          persistState({ ...state, quotes: [...state.quotes, ...newQuotes] });
          return { success: true, count: newQuotes.length };
        }
      }
    } catch (err: any) {
      return { success: false, count: 0, error: err?.message || 'Error processing CSV' };
    }
    return { success: false, count: 0, error: 'No valid rows found' };
  };

  // Instantaneous calculation pipelines
  const landedCosts = useMemo(() => computeLandedCosts(state), [state]);
  const costToServeList = useMemo(() => computeCostToServe(state, landedCosts), [state, landedCosts]);
  const pricingEngineResults = useMemo(() => computePricingEngine(state, costToServeList), [state, costToServeList]);
  const pricingMatrixResults = useMemo(
    () => computePricingMatrix(state, pricingEngineResults, costToServeList),
    [state, pricingEngineResults, costToServeList]
  );
  const orderPolicyResults = useMemo(
    () => computeOrderPolicy(state, pricingEngineResults, landedCosts),
    [state, pricingEngineResults, landedCosts]
  );
  const logisticsScenarios = useMemo(
    () => computeLogisticsScenarios(state, costToServeList, landedCosts),
    [state, costToServeList, landedCosts]
  );
  const inventoryPlans = useMemo(() => computeInventoryPlan(state, landedCosts), [state, landedCosts]);
  const financialModel = useMemo(
    () => computeFinancialModel(state, pricingEngineResults, landedCosts, costToServeList, inventoryPlans),
    [state, pricingEngineResults, landedCosts, costToServeList, inventoryPlans]
  );

  return (
    <AppContext.Provider
      value={{
        state,
        activeSheet,
        setActiveSheet,
        updateControlPanel,
        updateProduct,
        addProduct,
        deleteProduct,
        updateCountry,
        updateCostInput,
        updateDemandOrder,
        addDemandOrder,
        deleteDemandOrder,
        updateQuote,
        addQuote,
        deleteQuote,
        exportBackup,
        importBackup,
        bulkCsvImport,
        resetData,
        landedCosts,
        costToServeList,
        pricingEngineResults,
        pricingMatrixResults,
        orderPolicyResults,
        logisticsScenarios,
        inventoryPlans,
        financialModel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
