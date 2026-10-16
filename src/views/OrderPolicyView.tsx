import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { InsightBlock } from '../components/InsightBlock';
import { Filter } from 'lucide-react';

export const OrderPolicyView: React.FC = () => {
  const { orderPolicyResults } = useApp();
  const [filterCountry, setFilterCountry] = useState<string>('ALL');

  const filtered = orderPolicyResults.filter(
    (o) => filterCountry === 'ALL' || o.countryCode === filterCountry
  );

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            10_MOQ & Order Policy — Customer MOQ, Minimum Order Value & Free Shipping Thresholds (tbl_OrderPolicy)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Defends distribution profitability by aligning minimum order sizes with fixed vehicle dispatch costs.
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
                <th className="text-right">Target Price</th>
                <th className="text-right">Unit Margin Contrib.</th>
                <th className="text-right">Dispatch Drop Base</th>
                <th className="text-right font-bold text-[var(--color-primary)] bg-[rgba(5,28,44,0.06)]">Customer Economic MOQ</th>
                <th className="text-right font-bold text-[var(--color-accent)]">Min. Order Value (MOV)</th>
                <th className="text-right font-semibold">Free Delivery Threshold</th>
                <th className="text-right">Small Order Surcharge</th>
                <th className="text-right text-[var(--color-muted)]">Supplier / Cust. MOQ Ratio</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={`${row.countryCode}-${row.skuCode}`} className="hover:bg-[rgba(34,81,255,0.02)]">
                  <td className="font-mono font-bold text-[var(--color-primary)]">
                    {row.countryCode}
                  </td>
                  <td className="font-mono font-semibold text-xs">
                    {row.skuCode}
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    ${row.targetPriceUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs">
                    ${row.unitMarginContribution.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    ${row.fixedDropOrderFee.toFixed(2)}
                  </td>

                  {/* Customer MOQ */}
                  <td className="text-right font-mono font-bold text-sm text-[var(--color-primary)] bg-[rgba(5,28,44,0.04)]">
                    {row.customerEconomicMoq.toLocaleString()} pcs
                  </td>

                  {/* Minimum Order Value */}
                  <td className="text-right font-mono font-bold text-xs text-[var(--color-accent)]">
                    ${Math.round(row.minimumOrderValueUsd).toLocaleString()}
                  </td>

                  {/* Free Delivery Threshold */}
                  <td className="text-right font-mono text-xs font-semibold text-[var(--color-primary)]">
                    ${row.freeDeliveryThreshold.toLocaleString()}
                  </td>

                  {/* Small Order Surcharge */}
                  <td className="text-right font-mono text-xs text-[var(--color-negative)] font-medium">
                    ${row.smallOrderSurcharge}
                  </td>

                  {/* Ratio */}
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    {row.supplierToCustMoqRatio}x
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Small-Order Profit Defense Principle">
        Fixed vehicle dispatch costs ($30–$42 per trip) generate severe operational losses when orders are small. The <strong>Customer Economic MOQ</strong> ensures that gross profit per drop order strictly surpasses the dispatch baseline, with carton packaging constraints strictly preserved.
      </InsightBlock>
    </div>
  );
};
