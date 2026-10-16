import React, { useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ActiveSheetId } from '../types';
import {
  Download,
  Upload,
  RotateCcw,
  FileSpreadsheet,
  ShieldAlert,
  BarChart3,
  DollarSign,
  Settings,
  Database,
  Globe2,
  Sliders,
  Calendar,
  Anchor,
  Layers,
  Percent,
  Calculator,
  ShieldCheck,
  Truck,
  Package,
  TrendingUp,
  AlertOctagon,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import { CsvImportModal } from './CsvImportModal';

interface NavItem {
  id: ActiveSheetId;
  label: string;
  code: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Executive & Pricing',
    items: [
      { id: '15_Decision Dashboard', label: 'Decision Dashboard', code: '15', icon: BarChart3 },
      { id: '16_Customer Price Lists', label: 'Customer Price Lists', code: '16', icon: DollarSign },
      { id: '08_Pricing Engine', label: 'Pricing Engine', code: '08', icon: Percent },
      { id: '09_Pricing Matrix', label: 'Pricing Matrix (Quotes)', code: '09', icon: Calculator },
      { id: '10_MOQ & Order Policy', label: 'MOQ & Order Policy', code: '10', icon: ShieldCheck },
    ],
  },
  {
    title: 'Master Data & Parameters',
    items: [
      { id: '01_Control Panel', label: 'Control Panel', code: '01', icon: Settings },
      { id: '02_Product Master', label: 'Product Master', code: '02', icon: Database },
      { id: '03_Country Master', label: 'Country Master', code: '03', icon: Globe2 },
      { id: '04_Cost Inputs', label: 'Cost Inputs', code: '04', icon: Sliders },
      { id: '05_Demand & Orders', label: 'Demand & Orders', code: '05', icon: Calendar },
    ],
  },
  {
    title: 'Cost & Supply Chain',
    items: [
      { id: '06_Landed Cost Engine', label: 'Landed Cost Engine', code: '06', icon: Anchor },
      { id: '07_Cost-to-Serve Engine', label: 'Cost-to-Serve Engine', code: '07', icon: Layers },
      { id: '11_Logistics Scenarios', label: 'Logistics Scenarios', code: '11', icon: Truck },
      { id: '12_Inventory & Purchasing', label: 'Inventory & Purchasing', code: '12', icon: Package },
    ],
  },
  {
    title: 'Financials & Sensitivity',
    items: [
      { id: '13_Financial Model', label: 'Financial Model (P&L)', code: '13', icon: TrendingUp },
      { id: '14_Sensitivity', label: 'Sensitivity Analysis', code: '14', icon: AlertOctagon },
    ],
  },
];

interface SidebarProps {
  isOpenMobile: boolean;
  setIsOpenMobile: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpenMobile, setIsOpenMobile }) => {
  const {
    state,
    activeSheet,
    setActiveSheet,
    exportBackup,
    importBackup,
    resetData,
  } = useApp();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) {
          const success = importBackup(content);
          if (success) {
            alert('Backup successfully restored into localStorage!');
          } else {
            alert('Invalid backup JSON format.');
          }
        }
      };
      reader.readAsText(file);
    }
    if (e.target) e.target.value = '';
  };

  const handleSelectSheet = (sheetId: ActiveSheetId) => {
    setActiveSheet(sheetId);
    setIsOpenMobile(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={() => setIsOpenMobile(false)}
          className="fixed inset-0 z-40 bg-[rgba(5,28,44,0.45)] backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-[270px] bg-[var(--color-surface)] border-r border-[var(--color-border)] flex flex-col justify-between transition-transform duration-250 ease-standard select-none shrink-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top: Brand Identity & Status */}
        <div className="p-4 border-b border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => handleSelectSheet('15_Decision Dashboard')}
            >
              <div className="w-8 h-8 rounded-[8px] bg-[var(--color-primary)] text-white flex items-center justify-center font-serif-heading font-bold text-sm shadow-sm">
                DE
              </div>
              <div>
                <div className="font-serif-heading font-bold text-[15px] leading-tight text-[var(--color-primary)] tracking-[-0.01em]">
                  B2B Decision Engine
                </div>
                <div className="text-[10px] text-[var(--color-muted)] font-mono tracking-wider uppercase">
                  Central America • 4 Countries
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpenMobile(false)}
              className="lg:hidden p-1.5 text-[var(--color-muted)] hover:text-[var(--color-primary)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Status Pill */}
          <div className="mt-3 flex items-center justify-between px-2.5 py-1.5 rounded-[6px] bg-[rgba(5,28,44,0.03)] border border-[rgba(5,28,44,0.06)] text-[11px]">
            <div className="flex items-center gap-1.5 text-[var(--color-muted)] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-positive)] animate-pulse" />
              <span>Saved: <strong className="text-[var(--color-primary)]">{state.lastSaved}</strong></span>
            </div>
            <span className="font-mono font-semibold text-[10px] px-1.5 py-0.5 rounded bg-[rgba(34,81,255,0.1)] text-[var(--color-accent)]">
              {state.controlPanel.scenarioActive}
            </span>
          </div>
        </div>

        {/* Middle: Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-4 scrollbar-thin">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-1">
              <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-muted)]">
                {section.title}
              </div>

              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = activeSheet === item.id;
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectSheet(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-[7px] text-xs transition-all ${
                        isActive
                          ? 'bg-[var(--insight-bg)] text-[var(--color-accent)] font-semibold border-l-[3px] border-[var(--color-accent)] shadow-xs'
                          : 'text-[var(--color-body-text)] hover:bg-[rgba(5,28,44,0.04)] hover:text-[var(--color-primary)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon
                          className={`w-4 h-4 shrink-0 ${
                            isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)]'
                          }`}
                        />
                        <span className="truncate">{item.label}</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                          isActive
                            ? 'bg-[rgba(34,81,255,0.15)] text-[var(--color-accent)] font-bold'
                            : 'bg-[rgba(5,28,44,0.05)] text-[var(--color-muted)]'
                        }`}
                      >
                        {item.code}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Utility Controls */}
        <div className="p-3 border-t border-[var(--color-border)] bg-[rgba(5,28,44,0.015)] space-y-2">
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => setIsCsvModalOpen(true)}
              className="px-2.5 py-1.5 text-[11px] font-medium rounded-[6px] text-[var(--color-primary)] bg-[rgba(5,28,44,0.05)] hover:bg-[rgba(5,28,44,0.1)] transition-colors flex items-center justify-center gap-1.5"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>Bulk CSV</span>
            </button>

            <button
              onClick={exportBackup}
              className="px-2.5 py-1.5 text-[11px] font-medium rounded-[6px] text-[var(--color-primary)] bg-[rgba(5,28,44,0.05)] hover:bg-[rgba(5,28,44,0.1)] transition-colors flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[var(--color-muted)]" />
              <span>Export</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-2.5 py-1.5 text-[11px] font-medium rounded-[6px] text-[var(--color-primary)] bg-[rgba(5,28,44,0.05)] hover:bg-[rgba(5,28,44,0.1)] transition-colors flex items-center justify-center gap-1.5"
            >
              <Upload className="w-3.5 h-3.5 text-[var(--color-muted)]" />
              <span>Import</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept=".json"
              onChange={handleImportFile}
              className="hidden"
            />

            <button
              onClick={() => setResetConfirmOpen(true)}
              className="px-2.5 py-1.5 text-[11px] font-medium rounded-[6px] text-[var(--color-negative)] hover:bg-[rgba(211,47,47,0.08)] transition-colors flex items-center justify-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </aside>

      {/* CSV Import Modal */}
      <CsvImportModal isOpen={isCsvModalOpen} onClose={() => setIsCsvModalOpen(false)} />

      {/* Reset Confirmation Modal */}
      {resetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(5,28,44,0.45)] backdrop-blur-sm p-4">
          <div className="bg-[var(--color-surface)] rounded-[14px] shadow-2xl max-w-md w-full p-6 animate-fade-up">
            <div className="flex items-center gap-3 text-[var(--color-negative)] mb-3">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="font-serif-heading text-lg font-bold">Reset All Model Data?</h3>
            </div>
            <p className="text-xs text-[var(--color-body-text)] leading-relaxed mb-6">
              This action will reset all parameters, products, forecast demand, and custom quotes back to pristine baseline factory defaults. All current localStorage modifications will be overwritten.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setResetConfirmOpen(false)}
                className="px-4 py-2 text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetData();
                  setResetConfirmOpen(false);
                }}
                className="px-4 py-2 text-xs font-semibold rounded-[6px] bg-[var(--color-negative)] text-white hover:opacity-90 transition-opacity"
              >
                Yes, Restore Defaults
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
