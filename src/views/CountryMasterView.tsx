import React from 'react';
import { useApp } from '../context/AppContext';
import { InsightBlock } from '../components/InsightBlock';
import { Globe2, ShieldCheck } from 'lucide-react';

export const CountryMasterView: React.FC = () => {
  const { state, updateCountry } = useApp();
  const { countries } = state;

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            03_Country Master — Four-Country Macro, Tariff & Risk Parameters (tbl_CountryMaster)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Macroeconomic exchange rates, import duties (DAI), local short-term interest rates, and sovereign risk adders.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="saas-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="saas-table">
            <thead>
              <tr>
                <th>Country Code</th>
                <th>Country Name</th>
                <th>Currency</th>
                <th className="text-right">FX Rate to USD</th>
                <th className="text-right">Import Duty (DAI)</th>
                <th className="text-right">VAT Rate</th>
                <th className="text-center">VAT Recov.</th>
                <th className="text-right">Brokerage / Bill</th>
                <th className="text-right">Port Drayage / FCL</th>
                <th className="text-right">Borrowing Rate</th>
                <th className="text-right">Risk Margin Uplift</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((c) => (
                <tr key={c.countryCode} className="hover:bg-[rgba(34,81,255,0.02)]">
                  <td className="font-mono font-bold text-[var(--color-primary)] text-sm">
                    {c.countryCode}
                  </td>
                  <td className="font-medium text-[var(--color-primary)]">
                    {c.countryName}
                  </td>
                  <td className="font-mono text-xs">
                    {c.currencyCode} ({c.currencySymbol})
                  </td>

                  {/* FX */}
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      value={c.fxRateToUsd}
                      onChange={(e) => updateCountry(c.countryCode, { fxRateToUsd: parseFloat(e.target.value) || 1 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-20 text-right font-mono font-bold"
                    />
                  </td>

                  {/* DAI */}
                  <td className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <input
                        type="number"
                        step="0.01"
                        value={c.importDutyRate}
                        onChange={(e) => updateCountry(c.countryCode, { importDutyRate: parseFloat(e.target.value) || 0 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                      />
                      <span className="text-[11px] font-mono text-[var(--color-muted)]">%</span>
                    </div>
                  </td>

                  {/* VAT */}
                  <td className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <input
                        type="number"
                        step="0.01"
                        value={c.vatRate}
                        onChange={(e) => updateCountry(c.countryCode, { vatRate: parseFloat(e.target.value) || 0 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                      />
                      <span className="text-[11px] font-mono text-[var(--color-muted)]">%</span>
                    </div>
                  </td>

                  {/* VAT Recoverable */}
                  <td className="text-center font-mono text-xs">
                    <span className="status-pill pill-positive">
                      <ShieldCheck className="w-3 h-3" />
                      TRUE
                    </span>
                  </td>

                  {/* Brokerage */}
                  <td className="text-right">
                    <input
                      type="number"
                      value={c.customsBrokerageBase}
                      onChange={(e) => updateCountry(c.countryCode, { customsBrokerageBase: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-20 text-right font-mono"
                    />
                  </td>

                  {/* Drayage */}
                  <td className="text-right">
                    <input
                      type="number"
                      value={c.portDrayageUsd}
                      onChange={(e) => updateCountry(c.countryCode, { portDrayageUsd: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-20 text-right font-mono"
                    />
                  </td>

                  {/* Borrowing Rate */}
                  <td className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <input
                        type="number"
                        step="0.005"
                        value={c.localBorrowingRate}
                        onChange={(e) => updateCountry(c.countryCode, { localBorrowingRate: parseFloat(e.target.value) || 0 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                      />
                      <span className="text-[11px] font-mono text-[var(--color-muted)]">
                        {(c.localBorrowingRate * 100).toFixed(1)}%
                      </span>
                    </div>
                  </td>

                  {/* Risk Margin Uplift */}
                  <td className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <input
                        type="number"
                        step="0.01"
                        value={c.countryMarginUplift}
                        onChange={(e) => updateCountry(c.countryCode, { countryMarginUplift: parseFloat(e.target.value) || 0 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono font-bold text-[var(--color-accent)]"
                      />
                      <span className="text-[11px] font-mono text-[var(--color-accent)]">
                        +{(c.countryMarginUplift * 100).toFixed(1)}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audit Insight */}
      <InsightBlock title="Cross-Border Tax & Cost Segregation Principle">
        In strict compliance with international tax standards, <strong>Import Duties (DAI)</strong> are non-refundable and thus capitalized into the unit inventory landed cost. Conversely, <strong>Import VAT (IVA/ISV)</strong> is recoverable against sales output tax and is segregated into a tracking memorandum column to prevent price inflation and loss of competitive positioning.
      </InsightBlock>
    </div>
  );
};
