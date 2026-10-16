import React from 'react';
import { useApp } from '../context/AppContext';
import { StatusBadge } from '../components/StatusBadge';
import { InsightBlock } from '../components/InsightBlock';
import { Landmark, TrendingUp, AlertTriangle } from 'lucide-react';

export const FinancialModelView: React.FC = () => {
  const { financialModel } = useApp();

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            13_Financial Model — Multi-Country Income Statement Waterfall & Net Working Capital (tbl_CountryFinancials)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Full audit waterfall from Gross List Revenue down to Operating EBIT, plus Working Capital (NWC) credit facility stress checks.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="saas-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="saas-table">
            <thead>
              <tr>
                <th>Entity / Country</th>
                <th className="text-right">Gross Revenue</th>
                <th className="text-right text-[var(--color-muted)]">Commercial Discounts</th>
                <th className="text-right font-bold text-[var(--color-primary)]">Net Revenue</th>
                <th className="text-right">COGS (Landed)</th>
                <th className="text-right font-semibold">Gross Profit</th>
                <th className="text-right">GM %</th>
                <th className="text-right">Fulfillment OpEx</th>
                <th className="text-right font-bold text-[var(--color-accent)]">Contribution Margin</th>
                <th className="text-right">CM %</th>
                <th className="text-right">Sales SG&A</th>
                <th className="text-right font-bold text-[var(--color-primary)] bg-[rgba(5,28,44,0.06)]">Operating EBIT</th>
                <th className="text-right">EBIT %</th>
                <th className="text-right font-semibold">NWC (Capital)</th>
                <th className="text-right text-[var(--color-muted)]">Credit Facility</th>
                <th className="text-center">Financing Status</th>
              </tr>
            </thead>
            <tbody>
              {financialModel.map((item) => {
                const isConsol = item.countryCode === 'CONSOL';

                return (
                  <tr
                    key={item.countryCode}
                    className={isConsol ? 'bg-[rgba(5,28,44,0.07)] font-semibold' : 'hover:bg-[rgba(34,81,255,0.02)]'}
                  >
                    <td className="font-mono font-bold text-[var(--color-primary)] text-sm">
                      {isConsol ? '🌐 CONSOL (Group Total)' : item.countryCode}
                    </td>

                    <td className="text-right font-mono text-xs">
                      ${Math.round(item.grossRevenueUsd).toLocaleString()}
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      -${Math.round(item.commercialDiscountsUsd).toLocaleString()}
                    </td>
                    <td className="text-right font-mono font-bold text-xs text-[var(--color-primary)]">
                      ${Math.round(item.netRevenueUsd).toLocaleString()}
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      ${Math.round(item.cogsUsd).toLocaleString()}
                    </td>

                    {/* Gross Profit */}
                    <td className="text-right font-mono font-semibold text-xs text-[var(--color-primary)]">
                      ${Math.round(item.grossProfitUsd).toLocaleString()}
                    </td>
                    <td className="text-right font-mono text-xs">
                      {(item.grossMargin * 100).toFixed(1)}%
                    </td>

                    {/* Fulfillment */}
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      ${Math.round(item.fulfillmentOpExUsd).toLocaleString()}
                    </td>

                    {/* CM */}
                    <td className="text-right font-mono font-bold text-xs text-[var(--color-accent)]">
                      ${Math.round(item.contributionMarginUsd).toLocaleString()}
                    </td>
                    <td className="text-right font-mono text-xs">
                      {(item.contributionMarginRatio * 100).toFixed(1)}%
                    </td>

                    {/* SG&A */}
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      ${Math.round(item.commercialSgaUsd).toLocaleString()}
                    </td>

                    {/* Operating EBIT */}
                    <td className="text-right font-mono font-bold text-sm text-[var(--color-primary)] bg-[rgba(5,28,44,0.04)]">
                      ${Math.round(item.operatingEbitUsd).toLocaleString()}
                    </td>
                    <td className="text-right font-mono text-xs font-semibold">
                      {(item.operatingMargin * 100).toFixed(1)}%
                    </td>

                    {/* NWC */}
                    <td className="text-right font-mono font-bold text-xs text-[var(--color-primary)]">
                      ${Math.round(item.netWorkingCapitalUsd).toLocaleString()}
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      ${Math.round(item.approvedCreditLineUsd).toLocaleString()}
                    </td>

                    {/* Status */}
                    <td className="text-center">
                      <StatusBadge status={item.financingGapAlert} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Working Capital Deficit Warning">
        Net Working Capital (NWC) equals <code>Accounts Receivable (AR) + Inventory Asset - Accounts Payable (AP)</code>. In cross-border distribution, long 8–12 week ocean shipping lead times trap liquidity. If NWC exceeds approved banking lines, aggressive top-line sales growth can lead to technical cash insolvency.
      </InsightBlock>
    </div>
  );
};
