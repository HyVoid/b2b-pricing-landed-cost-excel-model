import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { StatusBadge } from '../components/StatusBadge';
import { InsightBlock } from '../components/InsightBlock';
import { Filter, Truck, Warehouse, Ship } from 'lucide-react';

export const LogisticsScenariosView: React.FC = () => {
  const { logisticsScenarios } = useApp();
  const [filterCountry, setFilterCountry] = useState<string>('ALL');

  const filtered = logisticsScenarios.filter(
    (l) => filterCountry === 'ALL' || l.countryCode === filterCountry
  );

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            11_Logistics Scenarios — Centralized Hub vs Local Stocking vs Direct Ship Crossover Analysis (tbl_LogisticsScenarios)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Solves the strategic network trade-off between fixed local warehouse leases and variable cross-border trucking freight.
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
                <th className="text-right">Annual Demand</th>
                <th className="text-right">Hub Transshipment Cost</th>
                <th className="text-right">Local Stocking Cost</th>
                <th className="text-right">Direct Ship Cost</th>
                <th className="text-right text-[var(--color-muted)]">Fixed Rent Delta</th>
                <th className="text-right font-semibold">Crossover Volume</th>
                <th>Optimal Fulfillment Route</th>
                <th className="text-right font-bold text-[var(--color-accent)]">Annual Cost Savings</th>
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
                  <td className="text-right font-mono text-xs font-semibold">
                    {item.annualActiveDemand.toLocaleString()} pcs
                  </td>
                  <td className="text-right font-mono text-xs">
                    ${item.hubFulfillmentCostUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs">
                    ${item.localStockingCostUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    ${item.directShipCostUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    ${item.fixedCostDeltaUsd.toLocaleString()}
                  </td>

                  {/* Crossover Volume */}
                  <td className="text-right font-mono font-bold text-xs text-[var(--color-primary)]">
                    {item.logisticsCrossoverUnits >= 999999 ? 'N/A' : `${item.logisticsCrossoverUnits.toLocaleString()} pcs`}
                  </td>

                  {/* Route */}
                  <td>
                    <StatusBadge status={item.optimalFulfillmentRoute} />
                  </td>

                  {/* Savings */}
                  <td className="text-right font-mono font-bold text-xs text-[var(--color-accent)]">
                    +${Math.round(item.annualCostSavingUsd).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Supply Chain Network Topology Formula">
        The crossover threshold represents <code>Fixed_Warehouse_Rent / (Hub_Unit_Cost - Local_Unit_Cost)</code>. Below this annual demand volume, renting an independent local warehouse creates idle overhead; transferring inventory via the regional hub across borders yields superior return on capital.
      </InsightBlock>
    </div>
  );
};
