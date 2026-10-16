import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { InsightBlock } from '../components/InsightBlock';
import { Anchor, Filter } from 'lucide-react';

export const LandedCostView: React.FC = () => {
  const { state, landedCosts } = useApp();
  const [filterCountry, setFilterCountry] = useState<string>('ALL');

  const filtered = landedCosts.filter(
    (l) => filterCountry === 'ALL' || l.countryCode === filterCountry
  );

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            06_Landed Cost Engine — SKU × Country Total Landed Cost (tbl_LandedCost)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Full capitalization of non-refundable CIF, customs duties (DAI), and port drayage into inventory asset values.
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
                <th className="text-right">Supplier FOB</th>
                <th className="text-right">40HQ Cap</th>
                <th className="text-right">Unit Freight</th>
                <th className="text-right">Unit Insurance</th>
                <th className="text-right font-semibold">Unit CIF</th>
                <th className="text-right">Duty Rate (DAI)</th>
                <th className="text-right">Unit Duty (DAI)</th>
                <th className="text-right">Port & Drayage</th>
                <th className="text-right font-bold text-[var(--color-primary)] bg-[rgba(5,28,44,0.06)]">Unit Landed (USD)</th>
                <th className="text-right font-bold text-[var(--color-accent)]">Unit Landed (Local)</th>
                <th className="text-right text-[var(--color-muted)]">Input VAT (Memo)</th>
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
                      ${item.fobPriceUsd.toFixed(2)}
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      {item.containerCapUnits.toLocaleString()} pcs
                    </td>
                    <td className="text-right font-mono text-xs">
                      ${item.unitFreightUsd.toFixed(2)}
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      ${item.unitInsuranceUsd.toFixed(3)}
                    </td>
                    <td className="text-right font-mono text-xs font-semibold">
                      ${item.unitCifUsd.toFixed(2)}
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      {(item.importDutyRate * 100).toFixed(1)}%
                    </td>
                    <td className="text-right font-mono text-xs">
                      ${item.unitDutyDaiUsd.toFixed(2)}
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      ${item.unitPortDrayageUsd.toFixed(2)}
                    </td>

                    {/* Unit Landed Cost USD */}
                    <td className="text-right font-mono font-bold text-sm text-[var(--color-primary)] bg-[rgba(5,28,44,0.04)]">
                      ${item.unitLandedCostUsd.toFixed(2)}
                    </td>

                    {/* Unit Landed Cost Local */}
                    <td className="text-right font-mono font-bold text-xs text-[var(--color-accent)]">
                      {currSymbol}{item.unitLandedCostLocal.toFixed(2)}
                    </td>

                    {/* VAT Memo */}
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      ${item.unitVatAmountUsd.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Landed Cost Accounting Isolation">
        <strong>Unit Landed Cost (USD)</strong> forms the definitive COGS basis for inventory capitalization. Input Value Added Tax (VAT / IVA / ISV) is explicitly tracked in the memo column and prohibited from entering inventory cost, preventing false cost escalation.
      </InsightBlock>
    </div>
  );
};
