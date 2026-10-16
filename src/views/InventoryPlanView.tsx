import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { InsightBlock } from '../components/InsightBlock';
import { Filter, AlertCircle, ShoppingCart } from 'lucide-react';

export const InventoryPlanView: React.FC = () => {
  const { state, inventoryPlans } = useApp();
  const [filterCountry, setFilterCountry] = useState<string>('ALL');

  const filtered = inventoryPlans.filter(
    (i) => filterCountry === 'ALL' || i.countryCode === filterCountry
  );

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            12_Inventory & Purchasing — Statistical Safety Stock & Dynamic ROP Replenishment (tbl_InventoryPlan)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Statistical buffer model (Z={state.controlPanel.serviceLevelZ}) with Supplier MOQ and master carton constraints.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span className="text-xs font-semibold text-[var(--color-primary)]">Filter Country:</span>
          <select
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
            className="text-xs p-1.5 rounded-[6px] editable-cell font-mono"
          >
            <option value="ALL">All Countries</option>
            <option value="GT">GT - Guatemala</option>
            <option value="SV">SV - El Salvador</option>
            <option value="HN">HN - Honduras</option>
            <option value="NI">NI - Nicaragua</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="saas-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="saas-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>SKU Code</th>
                <th className="text-right">Weekly Demand</th>
                <th className="text-right">Lead Time (LT)</th>
                <th className="text-right">Demand StdDev (σ)</th>
                <th className="text-right font-semibold">Dynamic Safety Stock</th>
                <th className="text-right font-semibold text-[var(--color-primary)]">Reorder Point (ROP)</th>
                <th className="text-right font-bold text-[var(--color-primary)] bg-[rgba(5,28,44,0.06)]">Ending Inventory</th>
                <th className="text-right font-bold text-[var(--color-accent)]">Suggested PO Units</th>
                <th className="text-right font-mono">Inv. Capital (USD)</th>
                <th className="text-right">Weeks Cover</th>
                <th className="text-right text-[var(--color-negative)] font-medium">Aging Provision</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={`${item.countryCode}-${item.skuCode}`} className="hover:bg-[rgba(34,81,255,0.02)]">
                  <td className="font-mono font-bold text-[var(--color-primary)]">
                    {item.countryCode}
                  </td>
                  <td className="font-mono font-semibold text-xs">
                    {item.skuCode}
                  </td>
                  <td className="text-right font-mono text-xs">
                    {item.weeklyActiveDemand} pcs
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    {item.leadTimeWeeks} wks
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    {item.demandStdDevWeekly.toFixed(1)}
                  </td>

                  {/* Safety Stock */}
                  <td className="text-right font-mono text-xs font-semibold">
                    {item.dynamicSafetyStock.toLocaleString()} pcs
                  </td>

                  {/* ROP */}
                  <td className="text-right font-mono text-xs font-bold text-[var(--color-primary)]">
                    {item.reorderPointRop.toLocaleString()} pcs
                  </td>

                  {/* Ending Inv */}
                  <td className="text-right font-mono font-bold text-sm text-[var(--color-primary)] bg-[rgba(5,28,44,0.04)]">
                    {item.endingInventoryUnits.toLocaleString()} pcs
                  </td>

                  {/* Suggested PO */}
                  <td className="text-right font-mono font-bold text-xs">
                    {item.suggestedPoUnits > 0 ? (
                      <span className="text-[var(--color-accent)]">
                        +{item.suggestedPoUnits.toLocaleString()} pcs
                      </span>
                    ) : (
                      <span className="text-[var(--color-muted)]">0 pcs</span>
                    )}
                  </td>

                  {/* Value */}
                  <td className="text-right font-mono text-xs text-[var(--color-primary)]">
                    ${Math.round(item.endingInvValueUsd).toLocaleString()}
                  </td>

                  {/* Weeks cover */}
                  <td className="text-right font-mono text-xs">
                    {item.inventoryWeeksCover.toFixed(1)} wks
                  </td>

                  {/* Aging Risk */}
                  <td className="text-right font-mono text-xs">
                    {item.agingRiskProvisionUsd > 0 ? (
                      <span className="text-[var(--color-negative)] font-bold">
                        ${Math.round(item.agingRiskProvisionUsd).toLocaleString()}
                      </span>
                    ) : (
                      <span className="text-[var(--color-muted)]">$0</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Replenishment Double-Constraint Rule">
        Factory purchase orders generated by the ROP trigger enforce both <strong>Supplier MOQ</strong> (factory run economy) and <strong>Units per Master Carton</strong> (packaging integrity), preventing loose parcel damage during international ocean transport.
      </InsightBlock>
    </div>
  );
};
