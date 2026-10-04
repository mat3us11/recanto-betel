import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const isLight = theme === 'light'; // For dark backgrounds (sidebar, login left, footer)
  const textColor = isLight ? 'text-white' : 'text-slate-900';
  const subtextColor = isLight ? 'text-blue-200' : 'text-slate-500';

  if (variant === 'icon-only') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <div className={`relative w-10 h-10 ${isLight ? 'bg-white p-1 rounded-lg shadow-xs' : ''}`}>
          <Image
            src="/images/logo-recanto-betel-50-anos.png"
            alt="Associação Recanto Betel 50 anos"
            fill
            sizes="40px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div
          className={`relative w-36 h-36 md:w-44 md:h-44 mb-3 drop-shadow-md transition-transform hover:scale-105 duration-300 ${
            isLight ? 'bg-white/95 p-3 rounded-2xl ring-2 ring-white/30 shadow-lg' : ''
          }`}
        >
          <Image
            src="/images/logo-recanto-betel-50-anos.png"
            alt="Associação Recanto Betel - 50 anos"
            fill
            sizes="(max-width: 768px) 144px, 176px"
            className="object-contain"
            priority
          />
        </div>
        <span className={`text-xs uppercase tracking-widest font-semibold ${subtextColor}`}>
          Associação
        </span>
        <span className={`text-2xl md:text-3xl font-extrabold tracking-tight ${textColor}`}>
          Recanto Betel
        </span>
        <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-amber-400">
          <span>1976 — 2026</span>
          <span>•</span>
          <span>50 Anos</span>
        </div>
        {showSubtitle && (
          <p className="mt-2 text-xs md:text-sm text-blue-100/90 font-normal max-w-xs leading-relaxed">
            Transformando vidas, construindo futuro.
          </p>
        )}
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 select-none group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-0.5 ${className}`}
      aria-label="Ir para a página inicial da Associação Recanto Betel"
    >
      <div
        className={`relative h-[54px] w-[54px] sm:h-[60px] sm:w-[60px] flex-shrink-0 transition-transform group-hover:scale-105 duration-200 ${
          isLight ? 'bg-white p-1 rounded-xl shadow-xs ring-1 ring-slate-100' : ''
        }`}
      >
        <Image
          src="/images/logo-recanto-betel-50-anos.png"
          alt="Logo Oficial 50 Anos - Associação Recanto Betel"
          fill
          sizes="60px"
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${subtextColor}`}>
          Associação
        </span>
        <span className={`text-base sm:text-lg font-extrabold tracking-tight ${textColor}`}>
          Recanto Betel
        </span>
        <span className="text-[10px] font-bold text-amber-600 tracking-wide flex items-center gap-1">
          50 anos • 1976–2026
        </span>
      </div>
    </Link>
  );
};
