import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { DashboardView } from './views/DashboardView';
import { CustomerPriceListView } from './views/CustomerPriceListView';
import { ControlPanelView } from './views/ControlPanelView';
import { ProductMasterView } from './views/ProductMasterView';
import { CountryMasterView } from './views/CountryMasterView';
import { CostInputsView } from './views/CostInputsView';
import { DemandOrdersView } from './views/DemandOrdersView';
import { LandedCostView } from './views/LandedCostView';
import { CostToServeView } from './views/CostToServeView';
import { PricingEngineView } from './views/PricingEngineView';
import { PricingMatrixView } from './views/PricingMatrixView';
import { OrderPolicyView } from './views/OrderPolicyView';
import { LogisticsScenariosView } from './views/LogisticsScenariosView';
import { InventoryPlanView } from './views/InventoryPlanView';
import { FinancialModelView } from './views/FinancialModelView';
import { SensitivityView } from './views/SensitivityView';
import { ShieldCheck, Lock } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeSheet } = useApp();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderActiveView = () => {
    switch (activeSheet) {
      case '15_Decision Dashboard':
        return <DashboardView />;
      case '16_Customer Price Lists':
        return <CustomerPriceListView />;
      case '01_Control Panel':
        return <ControlPanelView />;
      case '02_Product Master':
        return <ProductMasterView />;
      case '03_Country Master':
        return <CountryMasterView />;
      case '04_Cost Inputs':
        return <CostInputsView />;
      case '05_Demand & Orders':
        return <DemandOrdersView />;
      case '06_Landed Cost Engine':
        return <LandedCostView />;
      case '07_Cost-to-Serve Engine':
        return <CostToServeView />;
      case '08_Pricing Engine':
        return <PricingEngineView />;
      case '09_Pricing Matrix':
        return <PricingMatrixView />;
      case '10_MOQ & Order Policy':
        return <OrderPolicyView />;
      case '11_Logistics Scenarios':
        return <LogisticsScenariosView />;
      case '12_Inventory & Purchasing':
        return <InventoryPlanView />;
      case '13_Financial Model':
        return <FinancialModelView />;
      case '14_Sensitivity':
        return <SensitivityView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen flex bg-[var(--color-bg)]">
      {/* 270px Dedicated Sidebar */}
      <Sidebar isOpenMobile={isMobileOpen} setIsOpenMobile={setIsMobileOpen} />

      {/* Main Content Area to the right */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Compact Top Header with Quick Controls */}
        <TopHeader onToggleMobileMenu={() => setIsMobileOpen(true)} />

        {/* Content View Container */}
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
          {renderActiveView()}
        </main>

        {/* Footer with Mandatory Privacy Security Notice */}
        <footer className="w-full bg-[var(--color-surface)] border-t border-[var(--color-border)] py-5 mt-10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span className="font-medium text-[var(--color-primary)]">
                Client-Side Autonomous Operation
              </span>
              <span>•</span>
              <span>B2B Cross-Border Distribution Pricing & Profitability Decision Engine</span>
            </div>

            <div className="flex items-center gap-1.5 text-center sm:text-right font-mono text-[11px] text-[var(--color-muted)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-positive)] shrink-0" />
              <span>
                Note on Data Privacy & Security: All storage functions of this tool run exclusively in local storage (localStorage); the application itself never collects, transmits, or retains any user data.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
