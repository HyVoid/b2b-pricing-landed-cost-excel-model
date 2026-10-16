import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { InsightBlock } from '../components/InsightBlock';
import { Filter } from 'lucide-react';

export const CostToServeView: React.FC = () => {
  const { costToServeList } = useApp();
  const [filterCountry, setFilterCountry] = useState<string>('ALL');

  const filtered = costToServeList.filter(
    (c) => filterCountry === 'ALL' || c.countryCode === filterCountry
  );

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            07_Cost-to-Serve Engine — End-to-End Fulfillment & Commercial Financing (tbl_CostToServe)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Micro-allocates 3PL storage, handling, last-mile dispatch, credit term financing, and default provisions.
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
                <th className="text-right">Unit Landed Cost</th>
                <th className="text-right">Unit Storage (Mo)</th>
                <th className="text-right">Unit Handling</th>
                <th className="text-right">Unit Last-Mile</th>
                <th className="text-right">Credit Financing</th>
                <th className="text-right">Bad Debt Prov.</th>
                <th className="text-right font-semibold text-[var(--color-accent)]">Total Cost-to-Serve</th>
                <th className="text-right font-bold text-[var(--color-primary)] bg-[rgba(5,28,44,0.06)]">Total Delivered Cost</th>
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
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    ${item.unitLandedCostUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs">
                    ${item.unitStorageCostUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs">
                    ${item.unitHandlingCostUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs">
                    ${item.unitLastMileCostUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs">
                    ${item.unitFinancingCostUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs">
                    ${item.unitBadDebtCostUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono font-semibold text-xs text-[var(--color-accent)]">
                    ${item.totalCostToServeUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono font-bold text-sm text-[var(--color-primary)] bg-[rgba(5,28,44,0.04)]">
                    ${item.totalDeliveredCostUsd.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="True Cost-to-Serve Revelation">
        Products with bulky packaging (such as pressure washers or water pumps) incur substantial storage footprint charges and freight weight surcharges. Incorporating these hidden service costs into the <strong>Total Delivered Cost</strong> baseline protects commercial contracts from hidden operational bleeding.
      </InsightBlock>
    </div>
  );
};
