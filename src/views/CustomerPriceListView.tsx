import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CountryCode } from '../types';
import { Printer, Globe, DollarSign, Info } from 'lucide-react';

export const CustomerPriceListView: React.FC = () => {
  const { state, pricingEngineResults, orderPolicyResults } = useApp();

  const [selectedCountry, setSelectedCountry] = useState<CountryCode>('GT');
  const [currencyMode, setCurrencyMode] = useState<'USD' | 'Local'>('Local');

  const country = state.countries.find((c) => c.countryCode === selectedCountry) || state.countries[0];
  const fxRate = currencyMode === 'USD' ? 1.0 : country.fxRateToUsd;
  const currSymbol = currencyMode === 'USD' ? '$' : country.currencySymbol;

  // Build client price list rows
  const priceListRows = state.products.map((p) => {
    const pe = pricingEngineResults.find((r) => r.countryCode === selectedCountry && r.skuCode === p.skuCode);
    const op = orderPolicyResults.find((r) => r.countryCode === selectedCountry && r.skuCode === p.skuCode);

    const baseListUsd = pe ? pe.listPriceUsd : 0;
    const tier1 = baseListUsd * fxRate;
    const tier2 = (baseListUsd * 0.97) * fxRate; // -3% volume discount
    const tier3 = (baseListUsd * 0.94) * fxRate; // -6% bulk discount

    const moq = op ? op.customerEconomicMoq : p.unitsPerCarton;
    const freeDeliveryThresholdUsd = op ? op.freeDeliveryThreshold : 500;
    const freeDeliveryLocal = freeDeliveryThresholdUsd * fxRate;

    const commercialNotes = `Orders over ${currSymbol}${Math.round(freeDeliveryLocal).toLocaleString()} qualify for free delivery; Standard 30 days credit.`;

    return {
      sku: p.skuCode,
      desc: p.productDesc,
      carton: p.unitsPerCarton,
      moq,
      tier1,
      tier2,
      tier3,
      commercialNotes,
    };
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Top Controls & Commercial Header */}
      <div className="saas-card p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)]">
              Quotation Destination:
            </span>
          </div>

          <div className="inline-flex rounded-[6px] bg-[rgba(5,28,44,0.06)] p-0.5">
            {state.countries.map((c) => (
              <button
                key={c.countryCode}
                onClick={() => setSelectedCountry(c.countryCode)}
                className={`px-3 py-1 text-xs font-semibold rounded-[5px] transition-all ${
                  selectedCountry === c.countryCode
                    ? 'bg-[var(--color-primary)] text-white shadow-xs'
                    : 'text-[var(--color-body-text)] hover:text-[var(--color-primary)]'
                }`}
              >
                {c.countryCode} - {c.countryName}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pl-4 border-l border-[var(--color-border)]">
            <DollarSign className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)]">
              Currency Settlement:
            </span>
            <div className="inline-flex rounded-[6px] bg-[rgba(5,28,44,0.06)] p-0.5">
              <button
                onClick={() => setCurrencyMode('Local')}
                className={`px-3 py-1 text-xs font-medium rounded-[5px] transition-all ${
                  currencyMode === 'Local'
                    ? 'bg-[var(--color-accent)] text-white font-semibold'
                    : 'text-[var(--color-body-text)] hover:text-[var(--color-primary)]'
                }`}
              >
                Local ({country.currencyCode} - {country.currencySymbol})
              </button>
              <button
                onClick={() => setCurrencyMode('USD')}
                className={`px-3 py-1 text-xs font-medium rounded-[5px] transition-all ${
                  currencyMode === 'USD'
                    ? 'bg-[var(--color-accent)] text-white font-semibold'
                    : 'text-[var(--color-body-text)] hover:text-[var(--color-primary)]'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Print / Export Action */}
        <button
          onClick={handlePrint}
          className="px-4 py-2 text-xs font-semibold rounded-[6px] bg-[var(--color-primary)] text-white shadow-sm hover:opacity-90 flex items-center gap-1.5 transition-all"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print / Export Price Catalog</span>
        </button>
      </div>

      {/* Commercial Notice Card */}
      <div className="insight-block flex items-start gap-3">
        <Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed text-[var(--color-body-text)]">
          <strong>Client-Facing Sanitization Active:</strong> Internal FOB purchasing costs, international freight rates, import duties (DAI), and internal corporate contribution margins have been physically scrubbed from this catalog. Quotations are valid for 30 calendar days from issue.
        </div>
      </div>

      {/* Price Catalog Table */}
      <div className="saas-card overflow-hidden">
        <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between bg-[rgba(5,28,44,0.02)]">
          <div>
            <h2 className="font-serif-heading text-lg font-bold text-[var(--color-primary)]">
              Commercial Price Catalog — {country.countryName} ({country.countryCode})
            </h2>
            <div className="text-xs text-[var(--color-muted)] font-mono mt-0.5">
              Settlement Currency: {currencyMode === 'USD' ? 'USD ($)' : `${country.currencyCode} (${country.currencySymbol})`} • FX Rate: 1 USD = {country.fxRateToUsd.toFixed(4)} {country.currencyCode}
            </div>
          </div>
          <span className="status-pill pill-neutral font-mono text-[11px]">
            Official Commercial Terms
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="saas-table">
            <thead>
              <tr>
                <th>SKU Code</th>
                <th>Product Description & Spec</th>
                <th className="text-right">Units / Ctn</th>
                <th className="text-right">MOQ</th>
                <th className="text-right font-bold">Standard (Tier 1)</th>
                <th className="text-right">Volume Tier (-3%)</th>
                <th className="text-right">Bulk Tier (-6%)</th>
                <th>Delivery & Commercial Terms</th>
              </tr>
            </thead>
            <tbody>
              {priceListRows.map((item) => (
                <tr key={item.sku} className="hover:bg-[rgba(34,81,255,0.02)]">
                  <td className="font-mono font-semibold text-[var(--color-primary)]">
                    {item.sku}
                  </td>
                  <td className="font-medium text-[var(--color-primary)]">
                    {item.desc}
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    {item.carton} pcs
                  </td>
                  <td className="text-right font-mono text-xs font-semibold">
                    {item.moq} pcs
                  </td>
                  <td className="text-right font-mono font-bold text-[var(--color-primary)] text-sm">
                    {currSymbol}{item.tier1.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-accent)] font-semibold">
                    {currSymbol}{item.tier2.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-accent)] font-semibold">
                    {currSymbol}{item.tier3.toFixed(2)}
                  </td>
                  <td className="text-xs text-[var(--color-body-text)]">
                    {item.commercialNotes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
