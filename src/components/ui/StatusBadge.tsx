import React from 'react';
import { StudentStatus } from '@/types';

interface StatusBadgeProps {
  status: StudentStatus | string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const isAtivo = status === 'Ativo';

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
        isAtivo
          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
          : 'bg-rose-50 text-rose-700 border border-rose-200'
      } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          isAtivo ? 'bg-emerald-500' : 'bg-rose-500'
        }`}
      />
      {status}
    </span>
  );
};
