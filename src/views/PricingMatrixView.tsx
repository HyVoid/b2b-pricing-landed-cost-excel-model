import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { QuoteSimulationItem, CountryCode, DeliveryMethod } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { InsightBlock } from '../components/InsightBlock';
import { Plus, Trash2, Calculator, AlertTriangle } from 'lucide-react';

export const PricingMatrixView: React.FC = () => {
  const { state, pricingMatrixResults, updateQuote, addQuote, deleteQuote } = useApp();
  const { quotes, products, countries } = state;

  const [isAdding, setIsAdding] = useState(false);
  const [newQuote, setNewQuote] = useState<QuoteSimulationItem>({
    quoteId: `Q-${Date.now().toString().slice(-4)}`,
    countryCode: 'GT',
    skuCode: 'SKU-1001',
    orderUnits: 150,
    termsDays: 30,
    deliveryMethod: 'Delivered',
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addQuote(newQuote);
    setIsAdding(false);
    setNewQuote({
      quoteId: `Q-${Date.now().toString().slice(-4)}`,
      countryCode: 'GT',
      skuCode: 'SKU-1001',
      orderUnits: 150,
      termsDays: 30,
      deliveryMethod: 'Delivered',
    });
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            09_Pricing Matrix — Multi-Factor Commercial Quote Simulator (tbl_PricingMatrix)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Real-time evaluation of volume tiers, credit payment days, and customer pickup rebates with governance triggers.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-3 py-1.5 text-xs font-semibold rounded-[6px] bg-[var(--color-accent)] text-white shadow-sm hover:opacity-90 flex items-center gap-1.5 transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{isAdding ? 'Close Simulation' : 'New Quote Simulation'}</span>
        </button>
      </div>

      {/* Add Simulation Form */}
      {isAdding && (
        <form onSubmit={handleAddSubmit} className="saas-card p-5 border border-[var(--color-accent)] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Simulate Commercial Proposal</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Quote Ref ID</label>
              <input
                type="text"
                required
                value={newQuote.quoteId}
                onChange={(e) => setNewQuote({ ...newQuote, quoteId: e.target.value })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono font-bold"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Country</label>
              <select
                value={newQuote.countryCode}
                onChange={(e) => setNewQuote({ ...newQuote, countryCode: e.target.value as CountryCode })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono"
              >
                {countries.map((c) => (
                  <option key={c.countryCode} value={c.countryCode}>
                    {c.countryCode} - {c.countryName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">SKU</label>
              <select
                value={newQuote.skuCode}
                onChange={(e) => setNewQuote({ ...newQuote, skuCode: e.target.value })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono"
              >
                {products.map((p) => (
                  <option key={p.skuCode} value={p.skuCode}>
                    {p.skuCode} - {p.productDesc.slice(0, 24)}...
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Order Units</label>
              <input
                type="number"
                min="1"
                value={newQuote.orderUnits}
                onChange={(e) => setNewQuote({ ...newQuote, orderUnits: parseInt(e.target.value) || 1 })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Payment Terms</label>
              <select
                value={newQuote.termsDays}
                onChange={(e) => setNewQuote({ ...newQuote, termsDays: parseInt(e.target.value) || 0 })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono"
              >
                <option value={0}>0 Days (Cash Advance -1.5%)</option>
                <option value={30}>30 Days (Standard 0%)</option>
                <option value={60}>60 Days (+Interest)</option>
                <option value={90}>90 Days (+Interest)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Delivery Method</label>
              <select
                value={newQuote.deliveryMethod}
                onChange={(e) => setNewQuote({ ...newQuote, deliveryMethod: e.target.value as DeliveryMethod })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell"
              >
                <option value="Delivered">Delivered to Customer Door</option>
                <option value="ExWorks">Customer Pickup (ExWorks Rebate)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3 py-1.5 text-xs text-[var(--color-muted)] hover:text-[var(--color-primary)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-xs font-semibold rounded-[6px] bg-[var(--color-primary)] text-white hover:opacity-90"
            >
              Simulate Proposal
            </button>
          </div>
        </form>
      )}

      {/* Pricing Matrix Table */}
      <div className="saas-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="saas-table">
            <thead>
              <tr>
                <th>Quote ID</th>
                <th>Ctry</th>
                <th>SKU Code</th>
                <th className="text-right">Units</th>
                <th className="text-right">Terms</th>
                <th>Delivery Mode</th>
                <th className="text-right">List Price</th>
                <th className="text-right">Vol Disc %</th>
                <th className="text-right">Credit Adj %</th>
                <th className="text-right">Pickup Rebate</th>
                <th className="text-right font-bold text-[var(--color-primary)] bg-[rgba(5,28,44,0.06)]">Net Effective Price</th>
                <th className="text-right">Total Deal Amount</th>
                <th className="text-right font-bold">Net Margin %</th>
                <th className="text-center">Approval Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {pricingMatrixResults.map((row) => (
                <tr key={row.quoteId} className="hover:bg-[rgba(34,81,255,0.02)]">
                  <td className="font-mono font-bold text-[var(--color-primary)]">
                    {row.quoteId}
                  </td>
                  <td className="font-mono text-xs font-semibold">
                    {row.countryCode}
                  </td>
                  <td className="font-mono text-xs">
                    {row.skuCode}
                  </td>

                  {/* Order Units Editable */}
                  <td className="text-right">
                    <input
                      type="number"
                      min="1"
                      value={row.orderUnits}
                      onChange={(e) => updateQuote(row.quoteId, { orderUnits: parseInt(e.target.value) || 1 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                    />
                  </td>

                  {/* Terms Editable */}
                  <td className="text-right">
                    <select
                      value={row.termsDays}
                      onChange={(e) => updateQuote(row.quoteId, { termsDays: parseInt(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell font-mono"
                    >
                      <option value={0}>0d</option>
                      <option value={30}>30d</option>
                      <option value={60}>60d</option>
                      <option value={90}>90d</option>
                    </select>
                  </td>

                  {/* Delivery Method Editable */}
                  <td>
                    <select
                      value={row.deliveryMethod}
                      onChange={(e) => updateQuote(row.quoteId, { deliveryMethod: e.target.value as DeliveryMethod })}
                      className="text-xs p-1 rounded-[4px] editable-cell"
                    >
                      <option value="Delivered">Delivered</option>
                      <option value="ExWorks">ExWorks</option>
                    </select>
                  </td>

                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    ${row.baseListPriceUsd.toFixed(2)}
                  </td>
                  <td className="text-right font-mono text-xs">
                    -{(row.volumeDiscountRate * 100).toFixed(1)}%
                  </td>
                  <td className="text-right font-mono text-xs">
                    {row.creditFinancingRate >= 0 ? '+' : ''}{(row.creditFinancingRate * 100).toFixed(1)}%
                  </td>
                  <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                    {row.pickupRebateUsd > 0 ? `-$${row.pickupRebateUsd.toFixed(2)}` : '$0.00'}
                  </td>

                  {/* Net Effective Price */}
                  <td className="text-right font-mono font-bold text-sm text-[var(--color-primary)] bg-[rgba(5,28,44,0.04)]">
                    ${row.netEffectivePriceUsd.toFixed(2)}
                  </td>

                  {/* Total Deal Amount */}
                  <td className="text-right font-mono font-semibold text-xs text-[var(--color-primary)]">
                    ${Math.round(row.totalOrderAmountUsd).toLocaleString()}
                  </td>

                  {/* Margin % */}
                  <td className="text-right font-mono font-bold text-xs">
                    <span className={row.actualNetMargin < state.controlPanel.minFloorMargin ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'}>
                      {(row.actualNetMargin * 100).toFixed(1)}%
                    </span>
                  </td>

                  {/* Status */}
                  <td className="text-center">
                    <StatusBadge status={row.approvalStatus} />
                  </td>

                  {/* Delete */}
                  <td className="text-center">
                    <button
                      onClick={() => deleteQuote(row.quoteId)}
                      className="p-1 text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors"
                      title="Delete Quote"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Compound Discount Audit Rule">
        Granting 90-day credit terms while allowing 8% volume discount and free delivery frequently pushes the transaction below the 12% contribution floor. This matrix calculates the true consolidated net margin instantly, stopping margin leakages before commercial contracts are signed.
      </InsightBlock>
    </div>
  );
};
