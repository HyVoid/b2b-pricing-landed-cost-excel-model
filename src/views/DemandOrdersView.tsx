import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateActiveDemand } from '../utils/engine';
import { InsightBlock } from '../components/InsightBlock';
import { Filter } from 'lucide-react';

export const DemandOrdersView: React.FC = () => {
  const { state, updateDemandOrder } = useApp();
  const { demandOrders, controlPanel } = state;
  const [filterCountry, setFilterCountry] = useState<string>('ALL');

  const filtered = demandOrders.filter(
    (d) => filterCountry === 'ALL' || d.countryCode === filterCountry
  );

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title & Filter */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            05_Demand & Orders — Weekly Demand Forecast & Commercial Order Profiling (tbl_DemandOrders)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Synchronizes active scenario volume switches ($C$4 = {controlPanel.scenarioActive}), order batching, and payment credit profiles.
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
                <th>Forecast Period</th>
                <th className="text-right">Base Weekly Qty</th>
                <th className="text-right">High Uplift %</th>
                <th className="text-right">Low Downside %</th>
                <th className="text-right font-bold text-[var(--color-accent)]">Active Weekly Qty</th>
                <th>Typical Order Tier</th>
                <th className="text-right">Batch Units / PO</th>
                <th className="text-right">Credit Terms</th>
                <th className="text-right">Annual Delivery Runs</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => {
                const activeQty = calculateActiveDemand(
                  row.baseDemandQty,
                  row.highScenarioUplift,
                  row.lowScenarioDownside,
                  controlPanel.scenarioActive
                );
                const annualRuns = row.orderBatchUnits > 0 ? (activeQty * 52) / row.orderBatchUnits : 0;

                return (
                  <tr key={row.id} className="hover:bg-[rgba(34,81,255,0.02)]">
                    <td className="font-mono font-bold text-[var(--color-primary)]">
                      {row.countryCode}
                    </td>
                    <td className="font-mono text-xs font-semibold">
                      {row.skuCode}
                    </td>
                    <td className="font-mono text-xs text-[var(--color-muted)]">
                      {row.forecastWeekId}
                    </td>

                    {/* Base Qty */}
                    <td className="text-right">
                      <input
                        type="number"
                        min="1"
                        value={row.baseDemandQty}
                        onChange={(e) => updateDemandOrder(row.id, { baseDemandQty: parseInt(e.target.value) || 0 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono font-bold"
                      />
                    </td>

                    {/* High Uplift */}
                    <td className="text-right">
                      <input
                        type="number"
                        step="0.05"
                        value={row.highScenarioUplift}
                        onChange={(e) => updateDemandOrder(row.id, { highScenarioUplift: parseFloat(e.target.value) || 0 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                      />
                    </td>

                    {/* Low Downside */}
                    <td className="text-right">
                      <input
                        type="number"
                        step="0.05"
                        value={row.lowScenarioDownside}
                        onChange={(e) => updateDemandOrder(row.id, { lowScenarioDownside: parseFloat(e.target.value) || 0 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                      />
                    </td>

                    {/* Active Qty (Computed) */}
                    <td className="text-right font-mono font-bold text-[var(--color-accent)] text-sm">
                      {activeQty} <span className="text-[10px] text-[var(--color-muted)] font-normal">/wk</span>
                    </td>

                    {/* Order Tier */}
                    <td>
                      <select
                        value={row.typicalOrderTier}
                        onChange={(e) => updateDemandOrder(row.id, { typicalOrderTier: e.target.value as any })}
                        className="text-xs p-1 rounded-[4px] editable-cell"
                      >
                        <option value="Small">Small (Parcel/LTL)</option>
                        <option value="Standard">Standard (Pallet)</option>
                        <option value="Bulk">Bulk (FCL Direct)</option>
                      </select>
                    </td>

                    {/* Batch Units */}
                    <td className="text-right">
                      <input
                        type="number"
                        min="1"
                        value={row.orderBatchUnits}
                        onChange={(e) => updateDemandOrder(row.id, { orderBatchUnits: parseInt(e.target.value) || 1 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                      />
                    </td>

                    {/* Payment Terms */}
                    <td className="text-right">
                      <select
                        value={row.paymentTermsDays}
                        onChange={(e) => updateDemandOrder(row.id, { paymentTermsDays: parseInt(e.target.value) || 0 })}
                        className="text-xs p-1 rounded-[4px] editable-cell font-mono"
                      >
                        <option value={0}>0 (Cash in Advance)</option>
                        <option value={30}>30 Days Net</option>
                        <option value={60}>60 Days Net</option>
                        <option value={90}>90 Days Net</option>
                      </select>
                    </td>

                    {/* Annual Delivery Runs */}
                    <td className="text-right font-mono text-xs text-[var(--color-primary)] font-semibold">
                      {annualRuns.toFixed(1)} <span className="text-[10px] text-[var(--color-muted)] font-normal">drops/yr</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Scenario Vector Binding">
        The <code>Active_Demand_Qty</code> column responds automatically to the global <code>Control_Panel!$C$4</code> switch. Modifying the scenario immediately scales production requirements, inventory holding capital, and revenue waterfalls.
      </InsightBlock>
    </div>
  );
};
