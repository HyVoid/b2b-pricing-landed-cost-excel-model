import React from 'react';

interface DataBarProps {
  value: number; // 0 to 1 or any max
  max?: number;
  label?: string;
  showPercent?: boolean;
}

export const DataBar: React.FC<DataBarProps> = ({
  value,
  max = 1,
  label,
  showPercent = false,
}) => {
  const percentage = Math.min(100, Math.max(0, (value / (max || 1)) * 100));

  return (
    <div className="flex items-center gap-2 w-full max-w-[140px] ml-auto">
      <div className="data-bar-track flex-1">
        <div
          className="data-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {(label || showPercent) && (
        <span className="text-[11px] font-medium text-[var(--color-primary)] shrink-0 w-9 text-right font-mono">
          {label || `${(value * 100).toFixed(1)}%`}
        </span>
      )}
    </div>
  );
};
