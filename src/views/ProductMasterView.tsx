import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProductItem } from '../types';
import { Plus, Trash2, Box, PackageCheck } from 'lucide-react';
import { getProductContainerCap } from '../utils/engine';

export const ProductMasterView: React.FC = () => {
  const { state, updateProduct, addProduct, deleteProduct } = useApp();
  const { products, controlPanel } = state;

  const [newSku, setNewSku] = useState<Partial<ProductItem>>({
    skuCode: '',
    productDesc: '',
    category: 'Industrial',
    unitsPerCarton: 4,
    unitCbm: 0.035,
    unitWeightKg: 10.0,
    supplierFobUsd: 50.0,
    purchasingCurrency: 'USD',
    supplierMoqUnits: 100,
    shelfLifeDays: 9999,
  });

  const [isAdding, setIsAdding] = useState(false);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSku.skuCode || !newSku.productDesc) {
      alert('SKU Code and Product Description are required.');
      return;
    }
    addProduct(newSku as ProductItem);
    setIsAdding(false);
    setNewSku({
      skuCode: '',
      productDesc: '',
      category: 'Industrial',
      unitsPerCarton: 4,
      unitCbm: 0.035,
      unitWeightKg: 10.0,
      supplierFobUsd: 50.0,
      purchasingCurrency: 'USD',
      supplierMoqUnits: 100,
      shelfLifeDays: 9999,
    });
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            02_Product Master — SKU Physical & Purchasing Master Data (tbl_ProductMaster)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Single source of physical dimensions, packaging standards, and supplier FOB prices.
          </p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-3 py-1.5 text-xs font-semibold rounded-[6px] bg-[var(--color-accent)] text-white shadow-sm hover:opacity-90 flex items-center gap-1.5 transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{isAdding ? 'Close Form' : 'Add New SKU'}</span>
        </button>
      </div>

      {/* Add Form */}
      {isAdding && (
        <form onSubmit={handleAddSubmit} className="saas-card p-5 border border-[var(--color-accent)] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
            <Box className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Create Master SKU Record</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">SKU Code *</label>
              <input
                type="text"
                required
                value={newSku.skuCode}
                onChange={(e) => setNewSku({ ...newSku, skuCode: e.target.value.toUpperCase() })}
                placeholder="SKU-4001"
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono font-bold"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Product Description *</label>
              <input
                type="text"
                required
                value={newSku.productDesc}
                onChange={(e) => setNewSku({ ...newSku, productDesc: e.target.value })}
                placeholder="Industrial Centrifugal Pump 2HP"
                className="w-full text-xs p-2 rounded-[6px] editable-cell"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Category</label>
              <select
                value={newSku.category}
                onChange={(e) => setNewSku({ ...newSku, category: e.target.value as any })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell"
              >
                <option value="Industrial">Industrial</option>
                <option value="Consumer">Consumer</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Units / Carton</label>
              <input
                type="number"
                min="1"
                value={newSku.unitsPerCarton}
                onChange={(e) => setNewSku({ ...newSku, unitsPerCarton: parseInt(e.target.value) || 1 })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Unit CBM (m³)</label>
              <input
                type="number"
                step="0.001"
                min="0.001"
                value={newSku.unitCbm}
                onChange={(e) => setNewSku({ ...newSku, unitCbm: parseFloat(e.target.value) || 0.01 })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Unit Weight (KG)</label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                value={newSku.unitWeightKg}
                onChange={(e) => setNewSku({ ...newSku, unitWeightKg: parseFloat(e.target.value) || 1.0 })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Supplier FOB (USD)</label>
              <input
                type="number"
                step="0.5"
                min="1"
                value={newSku.supplierFobUsd}
                onChange={(e) => setNewSku({ ...newSku, supplierFobUsd: parseFloat(e.target.value) || 10.0 })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono font-bold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Supplier MOQ</label>
              <input
                type="number"
                min="1"
                value={newSku.supplierMoqUnits}
                onChange={(e) => setNewSku({ ...newSku, supplierMoqUnits: parseInt(e.target.value) || 100 })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-[var(--color-primary)] mb-1">Shelf Life (Days)</label>
              <input
                type="number"
                min="30"
                value={newSku.shelfLifeDays}
                onChange={(e) => setNewSku({ ...newSku, shelfLifeDays: parseInt(e.target.value) || 9999 })}
                className="w-full text-xs p-2 rounded-[6px] editable-cell font-mono"
              />
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
              Save SKU to Master
            </button>
          </div>
        </form>
      )}

      {/* Product Table */}
      <div className="saas-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="saas-table">
            <thead>
              <tr>
                <th>SKU Code</th>
                <th>Description</th>
                <th>Category</th>
                <th className="text-right">Units / Ctn</th>
                <th className="text-right">Unit CBM</th>
                <th className="text-right">Unit KG</th>
                <th className="text-right">FOB Price</th>
                <th className="text-right">Supplier MOQ</th>
                <th className="text-right">Carton CBM (Calc)</th>
                <th className="text-right">Carton KG (Calc)</th>
                <th className="text-right">40HQ Cap (Calc)</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                const cartonCbm = p.unitCbm * p.unitsPerCarton;
                const cartonKg = p.unitWeightKg * p.unitsPerCarton;
                const capUnits = getProductContainerCap(p, controlPanel.feuCbm);

                return (
                  <tr key={p.skuCode} className="hover:bg-[rgba(34,81,255,0.02)]">
                    <td className="font-mono font-bold text-[var(--color-primary)]">
                      {p.skuCode}
                    </td>
                    <td>
                      <input
                        type="text"
                        value={p.productDesc}
                        onChange={(e) => updateProduct(p.skuCode, { productDesc: e.target.value })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-full max-w-[200px]"
                      />
                    </td>
                    <td>
                      <select
                        value={p.category}
                        onChange={(e) => updateProduct(p.skuCode, { category: e.target.value as any })}
                        className="text-xs p-1 rounded-[4px] editable-cell"
                      >
                        <option value="Industrial">Industrial</option>
                        <option value="Consumer">Consumer</option>
                        <option value="Accessories">Accessories</option>
                      </select>
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        min="1"
                        value={p.unitsPerCarton}
                        onChange={(e) => updateProduct(p.skuCode, { unitsPerCarton: parseInt(e.target.value) || 1 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                      />
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        step="0.001"
                        value={p.unitCbm}
                        onChange={(e) => updateProduct(p.skuCode, { unitCbm: parseFloat(e.target.value) || 0.01 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-20 text-right font-mono"
                      />
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        step="0.1"
                        value={p.unitWeightKg}
                        onChange={(e) => updateProduct(p.skuCode, { unitWeightKg: parseFloat(e.target.value) || 1 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-18 text-right font-mono"
                      />
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        step="0.5"
                        value={p.supplierFobUsd}
                        onChange={(e) => updateProduct(p.skuCode, { supplierFobUsd: parseFloat(e.target.value) || 1 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-20 text-right font-mono font-bold"
                      />
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        value={p.supplierMoqUnits}
                        onChange={(e) => updateProduct(p.skuCode, { supplierMoqUnits: parseInt(e.target.value) || 1 })}
                        className="text-xs p-1 rounded-[4px] editable-cell w-20 text-right font-mono"
                      />
                    </td>
                    {/* Calculated Columns */}
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      {cartonCbm.toFixed(3)} m³
                    </td>
                    <td className="text-right font-mono text-xs text-[var(--color-muted)]">
                      {cartonKg.toFixed(1)} kg
                    </td>
                    <td className="text-right font-mono text-xs font-semibold text-[var(--color-primary)]">
                      {capUnits.toLocaleString()} pcs
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => {
                          if (confirm(`Delete ${p.skuCode}?`)) deleteProduct(p.skuCode);
                        }}
                        className="p-1 text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors"
                        title="Delete SKU"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
