import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { InsightBlock } from '../components/InsightBlock';
import { DataBar } from '../components/DataBar';
import { Filter } from 'lucide-react';

export const PricingEngineView: React.FC = () => {
  const { state, pricingEngineResults } = useApp();
  const [filterCountry, setFilterCountry] = useState<string>('ALL');

  const filtered = pricingEngineResults.filter(
    (p) => filterCountry === 'ALL' || p.countryCode === filterCountry
  );

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            08_Pricing Engine — Multi-Tier Price Corridor & Discount Buffer (tbl_PricingEngine)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Derives List Price, Target Deal Price, and Absolute Floor Price using reverse-margin equations.
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
                <th className="text-right">Total Delivered Cost</th>
                <th className="text-right">Req. Target Margin</th>
                <th className="text-right">Req. Floor Margin</th>
                <th className="text-right font-semibold text-[var(--color-negative)]">Floor Price (USD)</th>
                <th className="text-right font-bold text-[var(--color-primary)]">Target Price (USD)</th>
                <th className="text-right font-bold text-[var(--color-accent)]">List Price (USD)</th>
                <th className="text-right">Max Discount Buffer</th>
                <th className="text-right font-mono text-xs">List Price (Local)</th>
                <th className="text-right font-mono text-xs">Target Price (Local)</th>
                <th className="text-right font-mono text-xs text-[var(--color-muted)]">Floor Price (Local)</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => {
                const country = state.countries.find((c) => c.countryCode === item.countryCode);
                const currSymbol = country?.currencySymbol || '$';

                return (
                  <tr key={`${item.countryCode}-${item.skuCode}`} className="hover:bg-[rgba(34,81,255,0.02)]">
                    <td className="font-mono font-bold text-[var(--color-primary)]">
                      {item.countryCode}
                    </td>
                    <td className="font-mono font-semibold text-xs">
                      {item.skuCode}
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      ${item.unitDeliveredCostUsd.toFixed(2)}
                    </td>
                    <td className="text-right font-mono text-xs">
                      {(item.requiredTargetMargin * 100).toFixed(1)}%
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      {(item.requiredFloorMargin * 100).toFixed(1)}%
                    </td>

                    {/* Floor */}
                    <td className="text-right font-mono font-bold text-xs text-[var(--color-negative)]">
                      ${item.floorPriceUsd.toFixed(2)}
                    </td>

                    {/* Target */}
                    <td className="text-right font-mono font-bold text-sm text-[var(--color-primary)] bg-[rgba(5,28,44,0.03)]">
                      ${item.targetPriceUsd.toFixed(2)}
                    </td>

                    {/* List */}
                    <td className="text-right font-mono font-bold text-sm text-[var(--color-accent)]">
                      ${item.listPriceUsd.toFixed(2)}
                    </td>

                    {/* Max Discount Buffer */}
                    <td className="text-right">
                      <DataBar value={item.maxAllowableDiscount} showPercent />
                    </td>

                    {/* Local currency conversions */}
                    <td className="text-right font-mono text-xs font-semibold">
                      {currSymbol}{item.listPriceLocal.toFixed(2)}
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-primary)]">
                      {currSymbol}{item.targetPriceLocal.toFixed(2)}
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      {currSymbol}{item.floorPriceLocal.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Mathematical Pricing Hierarchy">
        Prices are calculated using the reverse margin formula <code>Delivered_Cost / (1 - Margin)</code>. Standard List Price embeds a {state.controlPanel.maxDiscountLimit * 100}% negotiation cushion above the Target Deal Price, ensuring that standard customer volume discounts do not erode profitability below the required corporate hurdle rate.
      </InsightBlock>
    </div>
  );
};
