'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, X, Copy, Check, ShieldCheck } from 'lucide-react';
import { useToast } from '@/components/ui/ToastContext';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useToast();
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const pixKey = '47.818.778/0001-76';

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(pixKey);
    setCopied(true);
    showToast('Chave Pix Copiada!', 'Chave CNPJ 47.818.778/0001-76 copiada com sucesso.', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full p-6 sm:p-7 text-xs text-slate-700 relative animate-in zoom-in-95 duration-200">
        {/* Header do Modal */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                Apoie o Recanto Betel
              </h3>
              <p className="text-[11px] text-slate-500">Doação direta e segura via Pix</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg transition-colors"
            aria-label="Fechar modal de doação"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mensagem Institucional */}
        <p className="text-xs text-slate-600 mb-5 leading-relaxed">
          Sua contribuição ajuda a manter os serviços oferecidos às crianças, adolescentes e famílias atendidas pelo <strong>Recanto Betel</strong> em Tatuí.
        </p>

        {/* QR Code Pix */}
        <div className="flex flex-col items-center justify-center mb-5">
          <div className="relative w-44 h-44 rounded-2xl border-2 border-emerald-300 p-2 bg-white shadow-xs">
            <Image
              src="/images/qr-code-pix.png"
              alt="QR Code Pix Oficial Associação Recanto Betel"
              fill
              sizes="176px"
              className="object-contain p-1"
            />
          </div>
          <span className="text-[10px] text-slate-400 mt-2">
            Aponte a câmera do aplicativo do seu banco para o QR Code acima
          </span>
        </div>

        {/* Chave Pix e Botão Copiar */}
        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 mb-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Chave Pix — CNPJ
            </span>
            <span className="text-[10px] font-medium text-slate-500">
              Associação Recanto Betel
            </span>
          </div>

          <div className="flex items-center justify-between bg-white px-3.5 py-2.5 rounded-xl border border-slate-300">
            <code className="text-xs sm:text-sm font-mono font-bold text-[#0d3f73]">
              {pixKey}
            </code>
            <button
              onClick={handleCopyPix}
              className={`p-1.5 sm:px-3 sm:py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#0d3f73] hover:bg-[#1a5fa8] text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copiar chave Pix</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
        >
          Fechar
        </button>

        <div className="mt-3 text-center">
          <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Chave oficial registrada no Banco Central do Brasil</span>
          </p>
        </div>
      </div>
    </div>
  );
};
