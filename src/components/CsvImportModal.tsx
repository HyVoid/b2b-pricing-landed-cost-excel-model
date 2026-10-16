import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Upload, X, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface CsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CsvImportModal: React.FC<CsvImportModalProps> = ({ isOpen, onClose }) => {
  const { bulkCsvImport } = useApp();
  const [tableType, setTableType] = useState<'products' | 'demand' | 'quotes'>('products');
  const [csvText, setCsvText] = useState('');
  const [result, setResult] = useState<{ success: boolean; count: number; error?: string } | null>(null);

  if (!isOpen) return null;

  const sampleProducts = `SKU_Code,Product_Desc,Category,Units_Per_Carton,Unit_CBM,Unit_Weight_KG,Supplier_FOB_USD,Currency,Supplier_MOQ,Shelf_Life
SKU-9001,High-Torque Submersible Motor,Industrial,2,0.065,22.0,140.0,USD,100,9999
SKU-9002,Polyethylene Compression Coupling,Accessories,25,0.010,3.2,12.5,USD,600,9999`;

  const sampleDemand = `Country,SKU_Code,Week,Base_Demand,High_Uplift,Low_Downside,Order_Tier,Batch_Units,Terms_Days
GT,SKU-1001,W01-W52,50,0.20,-0.20,Standard,25,30
SV,SKU-2001,W01-W52,30,0.25,-0.20,Standard,12,30`;

  const sampleQuotes = `Quote_ID,Country,SKU_Code,Order_Units,Terms_Days,Delivery_Method
Q-2026-901,GT,SKU-1001,350,30,Delivered
Q-2026-902,HN,SKU-2002,120,60,ExWorks`;

  const handleUseSample = () => {
    if (tableType === 'products') setCsvText(sampleProducts);
    else if (tableType === 'demand') setCsvText(sampleDemand);
    else setCsvText(sampleQuotes);
    setResult(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCsvText((event.target?.result as string) || '');
        setResult(null);
      };
      reader.readAsText(file);
    }
  };

  const handleImport = () => {
    if (!csvText.trim()) {
      setResult({ success: false, count: 0, error: 'Please enter or upload CSV data.' });
      return;
    }
    const res = bulkCsvImport(tableType, csvText);
    setResult(res);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(5,28,44,0.45)] backdrop-blur-sm p-4">
      <div className="bg-[var(--color-surface)] rounded-[14px] shadow-2xl max-w-2xl w-full p-6 animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-[var(--color-accent)]" />
            <h3 className="font-serif-heading text-lg font-bold text-[var(--color-primary)]">
              Bulk CSV Data Import
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)] mb-2">
              Select Target Entity
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => { setTableType('products'); setResult(null); }}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-medium transition-all ${
                  tableType === 'products'
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[rgba(5,28,44,0.06)] text-[var(--color-body-text)] hover:bg-[rgba(5,28,44,0.1)]'
                }`}
              >
                02_Product Master
              </button>
              <button
                type="button"
                onClick={() => { setTableType('demand'); setResult(null); }}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-medium transition-all ${
                  tableType === 'demand'
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[rgba(5,28,44,0.06)] text-[var(--color-body-text)] hover:bg-[rgba(5,28,44,0.1)]'
                }`}
              >
                05_Demand & Orders
              </button>
              <button
                type="button"
                onClick={() => { setTableType('quotes'); setResult(null); }}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-medium transition-all ${
                  tableType === 'quotes'
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[rgba(5,28,44,0.06)] text-[var(--color-body-text)] hover:bg-[rgba(5,28,44,0.1)]'
                }`}
              >
                09_Pricing Quotes
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[var(--color-muted)]">
            <span>Paste CSV lines with comma delimiters or upload a file.</span>
            <button
              type="button"
              onClick={handleUseSample}
              className="text-[var(--color-accent)] hover:underline flex items-center gap-1 font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              Load Sample Template
            </button>
          </div>

          <div>
            <textarea
              rows={8}
              value={csvText}
              onChange={(e) => { setCsvText(e.target.value); setResult(null); }}
              placeholder="Header1,Header2,Header3..."
              className="w-full p-3 font-mono text-xs editable-cell rounded-[6px] resize-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="cursor-pointer inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-[6px] border border-[var(--color-border)] hover:bg-[rgba(5,28,44,0.04)] transition-colors">
              <Upload className="w-4 h-4 text-[var(--color-muted)]" />
              <span>Choose .csv file</span>
              <input type="file" accept=".csv,.txt" onChange={handleFileUpload} className="hidden" />
            </label>

            {result && (
              <div className="flex items-center gap-2 text-xs">
                {result.success ? (
                  <span className="flex items-center gap-1 text-[var(--color-positive)] font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Successfully imported {result.count} records!
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[var(--color-negative)] font-medium">
                    <AlertCircle className="w-4 h-4" />
                    {result.error}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleImport}
            className="px-5 py-2 text-xs font-semibold rounded-[6px] bg-[var(--color-accent)] text-white shadow-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Execute Bulk Import
          </button>
        </div>
      </div>
    </div>
  );
};
