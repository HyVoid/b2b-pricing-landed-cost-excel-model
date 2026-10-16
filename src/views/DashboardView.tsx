import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CountryOrConsol, ProductItem } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { InsightBlock } from '../components/InsightBlock';
import { DataBar } from '../components/DataBar';
import { Filter, AlertTriangle, TrendingUp, DollarSign, Percent, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    state,
    financialModel,
    pricingEngineResults,
    costToServeList,
    logisticsScenarios,
    pricingMatrixResults,
    inventoryPlans,
    setActiveSheet,
  } = useApp();

  const [selectedCountry, setSelectedCountry] = useState<CountryOrConsol>('CONSOL');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter products by category
  const filteredProducts = state.products.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  // Financial summary for chosen country
  const currentFin = financialModel.find((f) => f.countryCode === selectedCountry) || financialModel[0];

  // Calculate average DIO for chosen country
  const countryInvs = inventoryPlans.filter(
    (i) => selectedCountry === 'CONSOL' || i.countryCode === selectedCountry
  );
  const avgWeeksCover =
    countryInvs.length > 0
      ? countryInvs.reduce((acc, i) => acc + i.inventoryWeeksCover, 0) / countryInvs.length
      : 0;
  const avgDioDays = Math.round(avgWeeksCover * 7);

  // SKU Decision Table Rows for chosen country
  const targetCountryForSkus = selectedCountry === 'CONSOL' ? 'GT' : selectedCountry;
  const skuRows = filteredProducts.map((p) => {
    const pe = pricingEngineResults.find((r) => r.countryCode === targetCountryForSkus && r.skuCode === p.skuCode);
    const cts = costToServeList.find((r) => r.countryCode === targetCountryForSkus && r.skuCode === p.skuCode);
    const log = logisticsScenarios.find((r) => r.countryCode === targetCountryForSkus && r.skuCode === p.skuCode);

    const targetPrice = pe?.targetPriceUsd || 0;
    const deliveredCost = cts?.totalDeliveredCostUsd || 0;
    const marginRate = targetPrice > 0 ? (targetPrice - deliveredCost) / targetPrice : 0;
    const route = log?.optimalFulfillmentRoute || '🚚 Centralized Regional Hub';

    let healthStatus = '🟢 Core Star SKU';
    if (marginRate < state.controlPanel.minFloorMargin) {
      healthStatus = '🔴 Loss Remediation';
    } else if (marginRate < state.controlPanel.targetMargin) {
      healthStatus = '🟡 Modest Margin';
    }

    return {
      sku: p.skuCode,
      desc: p.productDesc,
      category: p.category,
      targetPrice,
      deliveredCost,
      marginRate,
      healthStatus,
      route,
      crossover: log?.logisticsCrossoverUnits || 0,
      annualDemand: log?.annualActiveDemand || 0,
    };
  });

  // Filter unapproved quotes
  const unapprovedQuotes = pricingMatrixResults.filter(
    (q) => q.approvalStatus !== '✅ Compliant'
  );

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Block A: Interactive Filter Bar */}
      <div className="saas-card p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)]">
              Country Perspective:
            </span>
          </div>

          <div className="inline-flex rounded-[6px] bg-[rgba(5,28,44,0.06)] p-0.5">
            {(['CONSOL', 'GT', 'SV', 'HN', 'NI'] as CountryOrConsol[]).map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCountry(c)}
                className={`px-3 py-1 text-xs font-semibold rounded-[5px] transition-all ${
                  selectedCountry === c
                    ? 'bg-[var(--color-primary)] text-white shadow-xs'
                    : 'text-[var(--color-body-text)] hover:text-[var(--color-primary)]'
                }`}
              >
                {c === 'CONSOL' ? 'CONSOL (Group)' : c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pl-4 border-l border-[var(--color-border)]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)]">
              Category:
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-xs px-2.5 py-1 rounded-[6px] editable-cell font-medium"
            >
              <option value="All">All Categories</option>
              <option value="Industrial">Industrial</option>
              <option value="Consumer">Consumer</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
        </div>

        {/* Macro Scenario Indicator */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-[var(--color-muted)]">Active Scenario:</span>
          <span className="status-pill pill-accent font-semibold font-mono">
            {state.controlPanel.scenarioActive} Case
          </span>
          <button
            onClick={() => setActiveSheet('01_Control Panel')}
            className="text-[11px] text-[var(--color-accent)] hover:underline flex items-center gap-0.5"
          >
            Configure
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Block B: Core Financial & Operating KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* KPI 1 */}
        <div className="saas-card p-4">
          <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mb-1">
            <span className="kpi-label">Annual Net Revenue</span>
            <DollarSign className="w-4 h-4 text-[var(--color-accent)] opacity-80" />
          </div>
          <div className="font-serif-display text-[28px] font-bold text-[var(--color-primary)] leading-tight">
            ${Math.round(currentFin.netRevenueUsd).toLocaleString()}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1.5 flex items-center justify-between">
            <span>List Gross: ${Math.round(currentFin.grossRevenueUsd).toLocaleString()}</span>
            <span>Discounts: -${Math.round(currentFin.commercialDiscountsUsd).toLocaleString()}</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="saas-card p-4">
          <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mb-1">
            <span className="kpi-label">Gross Margin %</span>
            <Percent className="w-4 h-4 text-[var(--color-accent)] opacity-80" />
          </div>
          <div className="font-serif-display text-[28px] font-bold text-[var(--color-primary)] leading-tight">
            {(currentFin.grossMargin * 100).toFixed(1)}%
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1.5">
            COGS: ${Math.round(currentFin.cogsUsd).toLocaleString()}
          </div>
        </div>

        {/* KPI 3 */}
        <div className="saas-card p-4">
          <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mb-1">
            <span className="kpi-label">Operating EBIT</span>
            <TrendingUp className="w-4 h-4 text-[var(--color-accent)] opacity-80" />
          </div>
          <div className={`font-serif-display text-[28px] font-bold leading-tight ${currentFin.operatingEbitUsd < 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'}`}>
            ${Math.round(currentFin.operatingEbitUsd).toLocaleString()}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1.5">
            EBIT Margin: {(currentFin.operatingMargin * 100).toFixed(1)}%
          </div>
        </div>

        {/* KPI 4 */}
        <div className="saas-card p-4">
          <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mb-1">
            <span className="kpi-label">Net Working Capital (NWC)</span>
            <DollarSign className="w-4 h-4 text-[var(--color-accent)] opacity-80" />
          </div>
          <div className="font-serif-display text-[28px] font-bold text-[var(--color-primary)] leading-tight">
            ${Math.round(currentFin.netWorkingCapitalUsd).toLocaleString()}
          </div>
          <div className="mt-1.5">
            <StatusBadge status={currentFin.financingGapAlert} />
          </div>
        </div>

        {/* KPI 5 */}
        <div className="saas-card p-4">
          <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mb-1">
            <span className="kpi-label">Inventory DIO (Days)</span>
            <ShieldCheck className="w-4 h-4 text-[var(--color-accent)] opacity-80" />
          </div>
          <div className="font-serif-display text-[28px] font-bold text-[var(--color-primary)] leading-tight">
            {avgDioDays} <span className="text-sm font-sans font-normal text-[var(--color-muted)]">days</span>
          </div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1.5">
            Threshold: {state.controlPanel.excessInvDays} days limit
          </div>
        </div>
      </div>

      {/* Main Grid: SKU Profitability Matrix (Left) & Escalation Approvals Pool (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Block C: SKU Profitability Quadrant & Logistics Recommendations (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif-heading text-base font-bold text-[var(--color-primary)]">
                SKU Profitability Health & Logistics Indicator ({selectedCountry === 'CONSOL' ? 'Guatemala Base' : selectedCountry})
              </h3>
              <p className="text-[11px] text-[var(--color-muted)]">
                Evaluates delivered unit cost, target margin corridor, and recommended supply chain route.
              </p>
            </div>
          </div>

          <div className="saas-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="saas-table">
                <thead>
                  <tr>
                    <th>SKU Code</th>
                    <th>Product Description</th>
                    <th className="text-right">Target Price</th>
                    <th className="text-right">Delivered Cost</th>
                    <th className="text-right">Margin %</th>
                    <th className="text-center">Health Status</th>
                    <th>Fulfillment Route</th>
                  </tr>
                </thead>
                <tbody>
                  {skuRows.map((row) => (
                    <tr key={row.sku}>
                      <td className="font-mono font-medium text-[var(--color-primary)]">
                        {row.sku}
                      </td>
                      <td className="max-w-[180px] truncate" title={row.desc}>
                        {row.desc}
                      </td>
                      <td className="text-right font-mono">
                        ${row.targetPrice.toFixed(2)}
                      </td>
                      <td className="text-right font-mono text-[var(--color-muted)]">
                        ${row.deliveredCost.toFixed(2)}
                      </td>
                      <td className="text-right">
                        <DataBar value={row.marginRate} showPercent />
                      </td>
                      <td className="text-center">
                        <StatusBadge status={row.healthStatus} />
                      </td>
                      <td className="text-xs whitespace-nowrap">
                        <span className="font-medium text-[var(--color-primary)]">
                          {row.route}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <InsightBlock title="Executive Strategic Takeaway">
            {selectedCountry === 'NI' ? (
              <span>
                Nicaragua bears a +6.0% sovereign risk uplift and heightened import clearance costs. Commercial quotations in this region require strict enforcement of target margins to compensate for currency volatility.
              </span>
            ) : (
              <span>
                Products operating above the 25% target margin baseline should be prioritized for local warehouse stocking once regional annual volume crosses the crossover threshold, reducing cross-border linehaul surcharges.
              </span>
            )}
          </InsightBlock>
        </div>

        {/* Block D: Commercial Escalation Pool & Unapproved Quotes (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif-heading text-base font-bold text-[var(--color-primary)] flex items-center gap-2">
                <span>Sales Discount Escalation Pool</span>
                {unapprovedQuotes.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(211,47,47,0.1)] text-[var(--color-negative)]">
                    {unapprovedQuotes.length} Alerts
                  </span>
                )}
              </h3>
              <p className="text-[11px] text-[var(--color-muted)]">
                Quotations breaching floor margin or exceeding {state.controlPanel.maxDiscountLimit * 100}% maximum discount.
              </p>
            </div>
            <button
              onClick={() => setActiveSheet('09_Pricing Matrix')}
              className="text-[11px] text-[var(--color-accent)] hover:underline font-medium"
            >
              View Quotes →
            </button>
          </div>

          <div className="saas-card overflow-hidden">
            {unapprovedQuotes.length === 0 ? (
              <div className="p-8 text-center text-[var(--color-muted)]">
                <ShieldCheck className="w-8 h-8 text-[var(--color-positive)] mx-auto mb-2 opacity-80" />
                <div className="text-xs font-semibold text-[var(--color-primary)]">
                  All Quotations Are Compliant
                </div>
                <div className="text-[11px] mt-1">
                  No quotes currently breach the minimum floor margin or unauthorized discount caps.
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="saas-table">
                  <thead>
                    <tr>
                      <th>Quote ID</th>
                      <th>Ctry</th>
                      <th>SKU</th>
                      <th className="text-right">Units</th>
                      <th className="text-right">Net Price</th>
                      <th className="text-right">Margin</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unapprovedQuotes.map((q) => (
                      <tr key={q.quoteId} className="interactive-cell">
                        <td className="font-mono font-semibold text-[var(--color-primary)]">
                          {q.quoteId}
                        </td>
                        <td className="font-mono text-xs">{q.countryCode}</td>
                        <td className="font-mono text-xs">{q.skuCode}</td>
                        <td className="text-right font-mono text-xs">{q.orderUnits}</td>
                        <td className="text-right font-mono text-xs">
                          ${q.netEffectivePriceUsd.toFixed(2)}
                        </td>
                        <td className="text-right font-mono text-xs font-medium">
                          <span className={q.actualNetMargin < state.controlPanel.minFloorMargin ? 'text-[var(--color-negative)] font-bold' : ''}>
                            {(q.actualNetMargin * 100).toFixed(1)}%
                          </span>
                        </td>
                        <td className="text-center">
                          <StatusBadge status={q.approvalStatus} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="anomaly-block">
            <div className="text-[12px] font-semibold text-[var(--color-negative)] mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Governance & Compliance Protocol</span>
            </div>
            <div className="text-[12px] leading-relaxed text-[var(--color-body-text)]">
              Any order flagged with <strong>Below Margin Floor</strong> is legally locked from ERP order release until signed off by the Managing Director (MD) or CFO. Extended payment terms (60–90 days) without pricing uplift are the leading trigger for margin erosion.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
