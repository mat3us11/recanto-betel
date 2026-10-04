import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDonate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonate }) => {
  return (
    <section id="inicio" className="py-10 md:py-16 bg-gradient-to-b from-[#f8fafc] via-white to-slate-50 border-b border-slate-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Lado Esquerdo: Mensagem Institucional */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs sm:text-sm font-bold border border-amber-200/90 shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>1976–2026 • 50 anos em Tatuí</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Proteção social, vínculos e <span className="text-[#0d3f73] underline decoration-amber-400 decoration-wavy decoration-2">cidadania</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Há 50 anos, a Associação Recanto Betel atua no atendimento de crianças e adolescentes em situação de vulnerabilidade social em Tatuí, fortalecendo vínculos familiares e comunitários e promovendo oportunidades para o desenvolvimento integral.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="#atuacao"
                className="inline-flex items-center gap-2 bg-[#0d3f73] hover:bg-[#1a5fa8] text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:translate-y-[-1px] group"
              >
                <span>Conheça nosso trabalho</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={onOpenDonate}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-slate-300 text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-2xs"
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Apoie o Recanto</span>
              </button>
            </div>
          </div>

          {/* Lado Direito: Fotografia Real do Recanto Betel */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200/90 bg-white aspect-[16/9] w-full transition-transform hover:scale-[1.01] duration-300">
              <Image
                src="/images/hero-recanto-betel.jpg"
                alt="Crianças e adolescentes atendidos pela Associação Recanto Betel no pátio da instituição em Tatuí"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* NÃO há gradiente escuro nem texto sobreposto por cima da imagem para preservar o texto original 'Desde 1976' e a marca do canto inferior */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
