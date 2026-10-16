import React from 'react';
import { useApp } from '../context/AppContext';
import { InsightBlock } from '../components/InsightBlock';
import { Sliders, AlertOctagon, TrendingDown } from 'lucide-react';

export const SensitivityView: React.FC = () => {
  const { state, financialModel, pricingEngineResults, costToServeList } = useApp();
  const consol = financialModel.find((f) => f.countryCode === 'CONSOL') || financialModel[financialModel.length - 1];

  // 1. Demand Scenario Multiplier Table
  const scenarios = [
    { name: 'Low Scenario (-20%)', multiplier: 0.8 },
    { name: 'Base Scenario (0%)', multiplier: 1.0 },
    { name: 'High Scenario (+20%)', multiplier: 1.2 },
  ];

  const baseRev = consol.netRevenueUsd;
  const baseCogs = consol.cogsUsd;
  const baseFulfillment = consol.fulfillmentOpExUsd;
  const fixedRentAll = 12000 * 4;
  const varFulfillment = Math.max(0, baseFulfillment - fixedRentAll);

  const scenarioRows = scenarios.map((s) => {
    const scenRev = baseRev * s.multiplier;
    const scenCogs = baseCogs * s.multiplier;
    const scenFulfillment = varFulfillment * s.multiplier + fixedRentAll;
    const scenSga = scenRev * 0.035;
    const scenEbit = scenRev - scenCogs - scenFulfillment - scenSga;
    const scenMargin = scenRev > 0 ? scenEbit / scenRev : 0;
    const scenNwc = consol.netWorkingCapitalUsd * s.multiplier;

    // Delta vs Base
    const baseEbit = baseRev - baseCogs - (varFulfillment + fixedRentAll) - baseRev * 0.035;
    const ebitDelta = baseEbit !== 0 ? (scenEbit - baseEbit) / Math.abs(baseEbit) : 0;

    return {
      name: s.name,
      multiplier: s.multiplier,
      revenue: scenRev,
      ebit: scenEbit,
      margin: scenMargin,
      nwc: scenNwc,
      delta: ebitDelta,
    };
  });

  // 2. Freight x Discount 2D Matrix
  const freightLevels = [2500, 4000, 5500, 7000, 8500];
  const discountLevels = [0.0, 0.05, 0.1, 0.15, 0.2];

  const avgTargetPrice =
    pricingEngineResults.length > 0
      ? pricingEngineResults.reduce((s, p) => s + p.targetPriceUsd, 0) / pricingEngineResults.length
      : 80;

  const avgDeliveredCost =
    costToServeList.length > 0
      ? costToServeList.reduce((s, c) => s + c.totalDeliveredCostUsd, 0) / costToServeList.length
      : 60;

  const baseFreight = 3200;
  const avgFeuCbm = state.controlPanel.feuCbm || 68;

  // 3. FX Devaluation Shock Table
  const fxShockCountries = state.countries.filter((c) => c.countryCode !== 'SV'); // SV uses USD
  const devaluations = [0.05, 0.1, 0.15, 0.2];

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div>
        <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
          14_Sensitivity — Multi-Dimensional Macro Stress Testing & Vulnerability Matrices
        </h2>
        <p className="text-xs text-[var(--color-muted)] mt-0.5">
          Quantifies operating leverage under demand contraction, freight supply shocks, and sovereign currency devaluation.
        </p>
      </div>

      {/* Part 1: Demand Scenario Analysis */}
      <div className="saas-card overflow-hidden">
        <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[var(--color-accent)]" />
            <h3 className="font-serif-heading text-base font-bold text-[var(--color-primary)]">
              Dimension 1: Demand Fluctuation & Operating Leverage (tbl_ScenarioSensitivity)
            </h3>
          </div>
          <span className="text-xs text-[var(--color-muted)]">Fixed warehouse overhead = $48,000/yr</span>
        </div>

        <div className="overflow-x-auto">
          <table className="saas-table">
            <thead>
              <tr>
                <th>Scenario Name</th>
                <th className="text-right">Multiplier</th>
                <th className="text-right font-bold">Consol. Net Revenue</th>
                <th className="text-right font-bold text-[var(--color-primary)]">Consol. Operating EBIT</th>
                <th className="text-right font-semibold">EBIT Margin %</th>
                <th className="text-right">NWC Capital</th>
                <th className="text-right font-bold">EBIT Delta vs Base</th>
              </tr>
            </thead>
            <tbody>
              {scenarioRows.map((row) => (
                <tr key={row.name} className="hover:bg-[rgba(34,81,255,0.02)]">
                  <td className="font-semibold text-[var(--color-primary)]">{row.name}</td>
                  <td className="text-right font-mono text-xs">{(row.multiplier * 100).toFixed(0)}%</td>
                  <td className="text-right font-mono font-bold text-xs text-[var(--color-primary)]">
                    ${Math.round(row.revenue).toLocaleString()}
                  </td>
                  <td className={`text-right font-mono font-bold text-sm ${row.ebit < 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'}`}>
                    ${Math.round(row.ebit).toLocaleString()}
                  </td>
                  <td className="text-right font-mono text-xs font-semibold">
                    {(row.margin * 100).toFixed(1)}%
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    ${Math.round(row.nwc).toLocaleString()}
                  </td>
                  <td className={`text-right font-mono font-bold text-xs ${row.delta < 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-positive)]'}`}>
                    {row.delta >= 0 ? '+' : ''}{(row.delta * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Part 2: 2D Matrix (Ocean Freight x Commercial Discount) */}
      <div className="saas-card overflow-hidden">
        <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertOctagon className="w-4 h-4 text-[var(--color-accent)]" />
            <h3 className="font-serif-heading text-base font-bold text-[var(--color-primary)]">
              Dimension 2: Container Freight Spike ($/FEU) × Commercial Discount (%) Stress Matrix
            </h3>
          </div>
          <span className="text-xs text-[var(--color-muted)] font-mono">
            Values display Net Contribution Margin %
          </span>
        </div>

        <div className="p-4 overflow-x-auto">
          <table className="saas-table border border-[var(--color-border)]">
            <thead>
              <tr>
                <th className="bg-[rgba(5,28,44,0.08)]">Ocean Freight \ Discount</th>
                {discountLevels.map((d) => (
                  <th key={d} className="text-center font-mono">
                    {(d * 100).toFixed(1)}% Disc
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {freightLevels.map((f) => (
                <tr key={f}>
                  <td className="font-mono font-bold text-[var(--color-primary)] bg-[rgba(5,28,44,0.04)]">
                    ${f.toLocaleString()} / FEU
                  </td>
                  {discountLevels.map((d) => {
                    const freightIncreasePerUnit = (f - baseFreight) / avgFeuCbm;
                    const stressedNetPrice = avgTargetPrice * (1 - d);
                    const stressedCost = avgDeliveredCost + freightIncreasePerUnit;
                    const netMargin = stressedNetPrice > 0 ? (stressedNetPrice - stressedCost) / stressedNetPrice : 0;

                    const isBreach = netMargin < state.controlPanel.minFloorMargin;
                    const isLoss = netMargin <= 0;

                    return (
                      <td
                        key={d}
                        className={`text-center font-mono text-xs font-semibold interactive-cell transition-all ${
                          isLoss
                            ? 'bg-[rgba(211,47,47,0.18)] text-[var(--color-negative)] font-bold'
                            : isBreach
                            ? 'bg-[rgba(211,47,47,0.08)] text-[var(--color-negative)]'
                            : 'hover:bg-[rgba(34,81,255,0.08)] text-[var(--color-primary)]'
                        }`}
                        title={`Freight: $${f}, Discount: ${(d*100)}% -> Net Margin: ${(netMargin*100).toFixed(1)}%`}
                      >
                        {(netMargin * 100).toFixed(1)}%
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Part 3: Foreign Currency Devaluation Shock */}
      <div className="saas-card overflow-hidden">
        <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-[var(--color-accent)]" />
            <h3 className="font-serif-heading text-base font-bold text-[var(--color-primary)]">
              Dimension 3: Sovereign Currency Devaluation Stress Shock (GTQ, HNL, NIO)
            </h3>
          </div>
          <span className="text-xs text-[var(--color-muted)]">
            Impact on Gross Margin % assuming rigid local selling price
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="saas-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Currency</th>
                <th className="text-right font-mono">Current Spot FX</th>
                <th className="text-right font-semibold">Baseline Margin</th>
                {devaluations.map((shock) => (
                  <th key={shock} className="text-right font-mono">
                    +{(shock * 100)}% Deval.
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fxShockCountries.map((c) => {
                const fin = financialModel.find((f) => f.countryCode === c.countryCode);
                const baseGm = fin ? fin.grossMargin : 0.28;

                return (
                  <tr key={c.countryCode} className="hover:bg-[rgba(34,81,255,0.02)]">
                    <td className="font-mono font-bold text-[var(--color-primary)]">
                      {c.countryCode}
                    </td>
                    <td className="font-mono text-xs">
                      {c.currencyCode} ({c.currencySymbol})
                    </td>
                    <td className="text-right font-mono text-xs font-semibold">
                      {c.fxRateToUsd.toFixed(4)}
                    </td>
                    <td className="text-right font-mono text-xs font-bold text-[var(--color-primary)]">
                      {(baseGm * 100).toFixed(1)}%
                    </td>
                    {devaluations.map((shock) => {
                      const stressedGm = baseGm - shock * 0.65;
                      return (
                        <td
                          key={shock}
                          className={`text-right font-mono text-xs font-semibold ${
                            stressedGm < state.controlPanel.minFloorMargin
                              ? 'text-[var(--color-negative)] font-bold'
                              : 'text-[var(--color-primary)]'
                          }`}
                        >
                          {(stressedGm * 100).toFixed(1)}%
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Risk Mitigation Recommendation">
        Cells shaded in red indicate operating conditions where product margins collapse below the 12% governance threshold. When container rates exceed $5,500/FEU or local currencies depreciate by 10%+, sales representatives must immediately cease discounts above 5% and enforce local currency list price revisions.
      </InsightBlock>
    </div>
  );
};
