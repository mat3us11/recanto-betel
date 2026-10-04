import React from 'react';
import Image from 'next/image';
import { Award, Sparkles } from 'lucide-react';

interface FiftyYearsProps {
  onOpenDonate: () => void;
}

export const FiftyYearsHighlight: React.FC<FiftyYearsProps> = ({ onOpenDonate }) => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#0d3f73] via-[#102b4e] to-[#0a2340] text-white overflow-hidden border-b border-blue-900/60">
      {/* Big graphic 50 in background */}
      <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] md:text-[300px] font-black text-white/[0.04] select-none pointer-events-none tracking-tighter leading-none">
        50
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jubileu de Ouro • 1976 — 2026</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              50 anos transformando vidas, construindo futuro
            </h2>

            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              São cinco décadas ininterruptas de atuação socioassistencial em Tatuí, garantindo acolhimento, proteção social, estímulo à educação, cultura e convivência comunitária para milhares de crianças, adolescentes e famílias.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenDonate}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <Award className="w-4 h-4" />
                <span>Faça parte desta história • Apoie o Recanto</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 bg-white/95 p-3 rounded-3xl shadow-2xl ring-4 ring-amber-400/30">
              <Image
                src="/images/logo-recanto-betel-50-anos.png"
                alt="Brasão Comemorativo 50 Anos Recanto Betel"
                fill
                sizes="(max-width: 768px) 160px, 208px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
