'use client';

import React, { useState } from 'react';
import { RotateCcw, Check, PenTool } from 'lucide-react';

interface SignaturePadProps {
  signerName?: string;
  className?: string;
  initialSigned?: boolean;
}

export const SignaturePad: React.FC<SignaturePadProps> = ({
  signerName = 'Carlos Silva',
  className = '',
  initialSigned = true,
}) => {
  const [isSigned, setIsSigned] = useState(initialSigned);

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
          Assinatura
        </label>
        <button
          type="button"
          onClick={() => setIsSigned(!isSigned)}
          className="text-xs text-blue-800 hover:text-blue-900 font-medium inline-flex items-center gap-1 transition-colors"
        >
          {isSigned ? (
            <>
              <RotateCcw className="w-3 h-3" /> Limpar assinatura
            </>
          ) : (
            <>
              <PenTool className="w-3 h-3" /> Inserir rubrica digital
            </>
          )}
        </button>
      </div>

      <div className="relative border border-slate-300 rounded-lg bg-white p-4 h-24 flex items-center justify-center overflow-hidden group hover:border-slate-400 transition-colors">
        {isSigned ? (
          <div className="flex flex-col items-center justify-center select-none animate-in fade-in duration-200">
            {/* Elegant stylized cursive signature SVG */}
            <svg
              viewBox="0 0 240 60"
              className="w-48 h-14 text-slate-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 40 C 25 15, 30 10, 45 35 C 50 45, 60 48, 70 30 C 75 20, 85 25, 95 38 C 105 50, 120 40, 135 25 C 145 15, 160 45, 175 35 C 190 25, 210 28, 230 40" />
              <path d="M40 38 Q 90 55 180 42" strokeWidth="1.8" />
              <path d="M185 41 Q 195 40 215 35" strokeWidth="1.5" />
            </svg>
            <div className="absolute bottom-1 right-2 text-[10px] text-emerald-600 flex items-center gap-0.5">
              <Check className="w-2.5 h-2.5" /> Assinado digitalmente
            </div>
          </div>
        ) : (
          <div
            onClick={() => setIsSigned(true)}
            className="cursor-pointer text-center text-slate-400 text-xs flex flex-col items-center justify-center gap-1 select-none"
          >
            <PenTool className="w-4 h-4 text-slate-400" />
            <span>Clique aqui para assinar digitalmente</span>
          </div>
        )}
      </div>
      <p className="text-[11px] text-slate-500">
        Assinante identificado: <span className="font-medium text-slate-700">{signerName}</span>
      </p>
    </div>
  );
};
