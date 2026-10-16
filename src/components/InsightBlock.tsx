import React from 'react';

interface InsightBlockProps {
  title?: string;
  children: React.ReactNode;
  isAnomaly?: boolean;
  className?: string;
}

export const InsightBlock: React.FC<InsightBlockProps> = ({
  title,
  children,
  isAnomaly = false,
  className = '',
}) => {
  return (
    <div className={`${isAnomaly ? 'anomaly-block' : 'insight-block'} ${className}`}>
      {title && (
        <div className={`text-[12px] font-semibold mb-1 uppercase tracking-[0.05em] ${isAnomaly ? 'text-[var(--color-negative)]' : 'text-[var(--color-accent)]'}`}>
          {title}
        </div>
      )}
      <div className="text-[13px] leading-relaxed text-[var(--color-body-text)]">
        {children}
      </div>
    </div>
  );
};
