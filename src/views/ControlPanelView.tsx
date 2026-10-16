import React from 'react';
import { useApp } from '../context/AppContext';
import { InsightBlock } from '../components/InsightBlock';
import { Settings, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export const ControlPanelView: React.FC = () => {
  const { state, updateControlPanel } = useApp();
  const { controlPanel, products } = state;

  // Duplicate check
  const skuList = products.map((p) => p.skuCode);
  const uniqueSkus = new Set(skuList);
  const isHealthy = skuList.length === uniqueSkus.size;

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            01_Control Panel — Global Decision & Governance Parameters
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Single point of truth for corporate governance, hurdle rates, and macro simulation triggers.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isHealthy ? (
            <span className="status-pill pill-positive font-mono text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Model Health: Master SKU List Clean
            </span>
          ) : (
            <span className="status-pill pill-negative font-mono text-xs">
              <AlertCircle className="w-3.5 h-3.5" />
              Warning: Duplicate SKU codes detected!
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Global Parameters Form (8 cols) */}
        <div className="lg:col-span-8 saas-card p-6 space-y-6">
          <div className="border-b border-[var(--color-border)] pb-3 flex items-center justify-between">
            <h3 className="font-serif-heading text-base font-bold text-[var(--color-primary)] flex items-center gap-2">
              <Settings className="w-4 h-4 text-[var(--color-accent)]" />
              Strategic Hurdle Rates & Boundaries
            </h3>
            <span className="text-[11px] text-[var(--color-muted)]">
              Yellow cells denote editable parameters
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Scenario */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-1">
                Active Macro Scenario ($C$4)
              </label>
              <select
                value={controlPanel.scenarioActive}
                onChange={(e) => updateControlPanel({ scenarioActive: e.target.value as any })}
                className="w-full text-xs p-2.5 rounded-[6px] editable-cell font-semibold"
              >
                <option value="Base">Base Case (Expected Baseline)</option>
                <option value="High">High Case (+20% Demand Surge)</option>
                <option value="Low">Low Case (-20% Demand Contraction)</option>
              </select>
              <span className="text-[11px] text-[var(--color-muted)] mt-1 block">
                Controls all 52-week demand vectors and sales throughput.
              </span>
            </div>

            {/* Base Currency */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-1">
                Base Reporting Currency ($C$5)
              </label>
              <input
                type="text"
                value={controlPanel.baseCurrency}
                onChange={(e) => updateControlPanel({ baseCurrency: e.target.value })}
                className="w-full text-xs p-2.5 rounded-[6px] editable-cell font-mono font-bold"
              />
              <span className="text-[11px] text-[var(--color-muted)] mt-1 block">
                Corporate benchmark standard for consolidation.
              </span>
            </div>

            {/* Target Contribution Margin */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-1">
                Target Contribution Margin ($C$7)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.01"
                  min="0.05"
                  max="0.9"
                  value={controlPanel.targetMargin}
                  onChange={(e) => updateControlPanel({ targetMargin: parseFloat(e.target.value) || 0 })}
                  className="w-full text-xs p-2.5 rounded-[6px] editable-cell font-mono font-bold"
                />
                <span className="text-xs font-mono font-semibold text-[var(--color-primary)] shrink-0 w-12">
                  {(controlPanel.targetMargin * 100).toFixed(1)}%
                </span>
              </div>
              <span className="text-[11px] text-[var(--color-muted)] mt-1 block">
                Base rate for Recommended Target Price formula.
              </span>
            </div>

            {/* Minimum Floor Margin */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-1">
                Minimum Floor Margin Floor ($C$8)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  max="0.5"
                  value={controlPanel.minFloorMargin}
                  onChange={(e) => updateControlPanel({ minFloorMargin: parseFloat(e.target.value) || 0 })}
                  className="w-full text-xs p-2.5 rounded-[6px] editable-cell font-mono font-bold text-[var(--color-negative)]"
                />
                <span className="text-xs font-mono font-semibold text-[var(--color-primary)] shrink-0 w-12">
                  {(controlPanel.minFloorMargin * 100).toFixed(1)}%
                </span>
              </div>
              <span className="text-[11px] text-[var(--color-muted)] mt-1 block">
                Hard threshold below which quotations trigger emergency locks.
              </span>
            </div>

            {/* Annual WACC Rate */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-1">
                Annual Capital Cost (WACC) ($C$6)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.005"
                  min="0.01"
                  max="0.3"
                  value={controlPanel.annualWacc}
                  onChange={(e) => updateControlPanel({ annualWacc: parseFloat(e.target.value) || 0 })}
                  className="w-full text-xs p-2.5 rounded-[6px] editable-cell font-mono font-bold"
                />
                <span className="text-xs font-mono font-semibold text-[var(--color-primary)] shrink-0 w-12">
                  {(controlPanel.annualWacc * 100).toFixed(1)}%
                </span>
              </div>
              <span className="text-[11px] text-[var(--color-muted)] mt-1 block">
                Applied to credit terms and pipeline inventory carrying cost.
              </span>
            </div>

            {/* Max Sales Discount Limit */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-1">
                Max Sales Discount Limit ($C$10)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  max="0.4"
                  value={controlPanel.maxDiscountLimit}
                  onChange={(e) => updateControlPanel({ maxDiscountLimit: parseFloat(e.target.value) || 0 })}
                  className="w-full text-xs p-2.5 rounded-[6px] editable-cell font-mono font-bold"
                />
                <span className="text-xs font-mono font-semibold text-[var(--color-primary)] shrink-0 w-12">
                  {(controlPanel.maxDiscountLimit * 100).toFixed(1)}%
                </span>
              </div>
              <span className="text-[11px] text-[var(--color-muted)] mt-1 block">
                Maximum standard rep autonomy before MD signature required.
              </span>
            </div>

            {/* Service Level Z-Score */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-1">
                Safety Stock Z-Score ($C$9)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.05"
                  min="1.0"
                  max="3.0"
                  value={controlPanel.serviceLevelZ}
                  onChange={(e) => updateControlPanel({ serviceLevelZ: parseFloat(e.target.value) || 0 })}
                  className="w-full text-xs p-2.5 rounded-[6px] editable-cell font-mono font-bold"
                />
                <span className="text-xs font-mono font-semibold text-[var(--color-primary)] shrink-0 w-12">
                  Z={controlPanel.serviceLevelZ.toFixed(3)}
                </span>
              </div>
              <span className="text-[11px] text-[var(--color-muted)] mt-1 block">
                1.645 corresponds to 95.0% order fulfillment probability.
              </span>
            </div>

            {/* Excess Inventory Days */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-1">
                Excess Inventory Alert Days ($C$11)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="10"
                  min="30"
                  max="365"
                  value={controlPanel.excessInvDays}
                  onChange={(e) => updateControlPanel({ excessInvDays: parseInt(e.target.value) || 0 })}
                  className="w-full text-xs p-2.5 rounded-[6px] editable-cell font-mono font-bold"
                />
                <span className="text-xs font-mono font-semibold text-[var(--color-primary)] shrink-0 w-12">
                  {controlPanel.excessInvDays}d
                </span>
              </div>
              <span className="text-[11px] text-[var(--color-muted)] mt-1 block">
                Threshold triggering 30% aging write-down provision.
              </span>
            </div>

            {/* FEU Capacity CBM */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-1">
                40HQ FEU Volume Capacity ($C$12)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="1.0"
                  min="50"
                  max="80"
                  value={controlPanel.feuCbm}
                  onChange={(e) => updateControlPanel({ feuCbm: parseFloat(e.target.value) || 0 })}
                  className="w-full text-xs p-2.5 rounded-[6px] editable-cell font-mono font-bold"
                />
                <span className="text-xs font-mono font-semibold text-[var(--color-primary)] shrink-0 w-12">
                  {controlPanel.feuCbm.toFixed(1)} m³
                </span>
              </div>
              <span className="text-[11px] text-[var(--color-muted)] mt-1 block">
                Effective stowage cube for container ocean freight allocation.
              </span>
            </div>
          </div>
        </div>

        {/* Right: Architecture & Impact Notes (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="saas-card p-5">
            <h4 className="font-serif-heading text-sm font-bold text-[var(--color-primary)] mb-2 flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-[var(--color-accent)]" />
              Dynamic Recalculation Flow
            </h4>
            <p className="text-xs text-[var(--color-body-text)] leading-relaxed">
              In accordance with Microsoft 365 dynamic array best practices, editing any parameter in this panel immediately triggers zero-lag client-side recalculation across all 15 downstream worksheets:
            </p>
            <ul className="text-xs text-[var(--color-muted)] space-y-1.5 mt-3 list-disc pl-4">
              <li>Landed Cost & Duty DAI calculations</li>
              <li>Cost-to-Serve financing allocations</li>
              <li>Four-tier price corridor models (Floor/Target/List)</li>
              <li>Safety stocks and replenishment PO triggers</li>
              <li>Consolidated Group P&L and Working Capital NWC</li>
            </ul>
          </div>

          <InsightBlock title="Policy Governance Protocol">
            Never hardcode margin percentages or tax rates in individual product sheets. All operational rules derive strictly from this panel and <code>03_Country Master</code>.
          </InsightBlock>
        </div>
      </div>
    </div>
  );
};
