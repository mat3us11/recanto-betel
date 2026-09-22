import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  theme?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  showSubtitle = false,
}) => {
  const isLight = theme === 'light'; // For dark backgrounds (sidebar, login left)
  const iconStroke = isLight ? '#93c5fd' : '#1e3a8a';
  const personFill = isLight ? '#bfdbfe' : '#2563eb';
  const textColor = isLight ? 'text-white' : 'text-slate-900';
  const subtextColor = isLight ? 'text-blue-200' : 'text-slate-600';

  const iconSvg = (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={
        variant === 'vertical'
          ? 'w-20 h-20 md:w-24 md:h-24'
          : variant === 'icon-only'
          ? 'w-9 h-9'
          : 'w-8 h-8'
      }
    >
      {/* House outline */}
      <path
        d="M8 32L32 12L56 32V54C56 55.1046 55.1046 56 54 56H10C8.89543 56 8 55.1046 8 54V32Z"
        stroke={iconStroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cross on roof apex */}
      <path
        d="M32 4V12M28 8H36"
        stroke={iconStroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center adult figure */}
      <circle cx="32" cy="35" r="4.5" fill={personFill} />
      <path
        d="M24 50C24 44.5 27.5 42 32 42C36.5 42 40 44.5 40 50"
        stroke={iconStroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Left child/person */}
      <circle cx="21" cy="38" r="3.5" fill={personFill} />
      <path
        d="M15 50C15 46 17.5 44 21 44C22.5 44 23.8 44.5 24.8 45.4"
        stroke={iconStroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Right child/person */}
      <circle cx="43" cy="38" r="3.5" fill={personFill} />
      <path
        d="M39.2 45.4C40.2 44.5 41.5 44 43 44C46.5 44 49 46 49 50"
        stroke={iconStroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{iconSvg}</div>;
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="mb-4 drop-shadow-sm">{iconSvg}</div>
        <span className={`text-sm uppercase tracking-widest font-medium ${subtextColor}`}>
          Associação
        </span>
        <span className={`text-2xl md:text-3xl font-bold tracking-tight ${textColor}`}>
          Recanto Betel
        </span>
        {showSubtitle && (
          <p className="mt-3 text-sm md:text-base text-blue-100/90 font-normal max-w-xs leading-relaxed">
            Cuidando de vidas, construindo futuros.
          </p>
        )}
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <Link href="/" className={`inline-flex items-center gap-3 select-none group ${className}`}>
      <div className="flex-shrink-0 transition-transform group-hover:scale-105">{iconSvg}</div>
      <div className="flex flex-col leading-tight">
        <span className={`text-[10px] uppercase tracking-wider font-semibold opacity-75 ${subtextColor}`}>
          Associação
        </span>
        <span className={`text-lg font-bold tracking-tight ${textColor}`}>Recanto Betel</span>
      </div>
    </Link>
  );
};
