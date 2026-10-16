import React from 'react';

interface StatusBadgeProps {
  status: string;
  variant?: 'neutral' | 'positive' | 'negative' | 'accent';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  variant,
  className = '',
}) => {
  let resolvedVariant = variant;
  if (!resolvedVariant) {
    if (status.includes('🚨') || status.includes('Below') || status.includes('Deficit') || status.includes('Loss') || status.includes('Needs Escalation') || status.includes('⚠️')) {
      resolvedVariant = 'negative';
    } else if (status.includes('✅') || status.includes('Compliant') || status.includes('Adequate') || status.includes('Star') || status.includes('🟢')) {
      resolvedVariant = 'positive';
    } else if (status.includes('🚚') || status.includes('🏬') || status.includes('🚢') || status.includes('Hub') || status.includes('🟡')) {
      resolvedVariant = 'accent';
    } else {
      resolvedVariant = 'neutral';
    }
  }

  const variantClass =
    resolvedVariant === 'positive'
      ? 'pill-positive'
      : resolvedVariant === 'negative'
      ? 'pill-negative'
      : resolvedVariant === 'accent'
      ? 'pill-accent'
      : 'pill-neutral';

  return (
    <span className={`status-pill ${variantClass} ${className}`}>
      {status}
    </span>
  );
};
