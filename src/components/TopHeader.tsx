import React from 'react';
import { useApp } from '../context/AppContext';
import { Menu, Layers, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { ScenarioType } from '../types';

interface TopHeaderProps {
  onToggleMobileMenu: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onToggleMobileMenu }) => {
  const { state, activeSheet, updateControlPanel, setActiveSheet } = useApp();

  const handleScenarioChange = (scenario: ScenarioType) => {
    updateControlPanel({ scenarioActive: scenario });
  };

  return (
    <header className="h-[52px] sticky top-0 z-30 w-full bg-[var(--color-surface)] border-b border-[var(--color-border)] px-6 flex items-center justify-between select-none shadow-xs">
      {/* Left: Mobile trigger & Current Sheet Breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-1.5 rounded-[6px] text-[var(--color-primary)] hover:bg-[rgba(5,28,44,0.06)] transition-colors"
          title="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[var(--color-accent)]" />
          <span className="font-serif-heading font-bold text-sm text-[var(--color-primary)] tracking-[-0.01em]">
            {activeSheet}
          </span>
        </div>
      </div>

      {/* Right: Quick Scenario Controller & Base Currency */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-[rgba(5,28,44,0.04)] px-2.5 py-1 rounded-[6px] text-xs">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--color-muted)]" />
          <span className="text-[11px] text-[var(--color-muted)] font-medium hidden sm:inline">
            Macro Scenario:
          </span>
          <div className="flex items-center gap-1 ml-1">
            {(['Low', 'Base', 'High'] as ScenarioType[]).map((scen) => (
              <button
                key={scen}
                onClick={() => handleScenarioChange(scen)}
                className={`px-2 py-0.5 rounded-[4px] text-[11px] font-semibold transition-all ${
                  state.controlPanel.scenarioActive === scen
                    ? 'bg-[var(--color-accent)] text-white shadow-xs'
                    : 'text-[var(--color-body-text)] hover:bg-[rgba(5,28,44,0.08)]'
                }`}
              >
                {scen}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-[6px] bg-[rgba(5,28,44,0.04)] text-[11px] font-mono text-[var(--color-muted)]">
          <span>Currency:</span>
          <strong className="text-[var(--color-primary)]">{state.controlPanel.baseCurrency}</strong>
        </div>

        {activeSheet !== '01_Control Panel' && (
          <button
            onClick={() => setActiveSheet('01_Control Panel')}
            className="text-[11px] font-medium text-[var(--color-accent)] hover:underline flex items-center gap-0.5 hidden sm:flex"
          >
            <span>Config</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        )}
      </div>
    </header>
  );
};
