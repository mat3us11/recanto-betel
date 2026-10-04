import React from 'react';
import Image from 'next/image';
import { Building2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Fotografia Real da Sede / Fachada */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 aspect-[4/3] bg-slate-100">
              <Image
                src="/images/criancas-ao-ar-livre.jpg"
                alt="Convivência e desenvolvimento integral no Recanto Betel"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Selo oficial de fundação */}
            <div className="absolute -bottom-5 -right-4 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-black text-sm">
                1976
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Fundada em 05 de agosto de 1976</p>
                <p className="text-[11px] text-slate-500">Pela Pastora Aline Castejón Mattar</p>
              </div>
            </div>
          </div>

          {/* Lado Direito: Texto Institucional Real */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold text-[#1a5fa8] uppercase tracking-widest">
                Quem Somos
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Cinco décadas de referência socioassistencial em Tatuí
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              A <strong>Associação Recanto Betel</strong>, originalmente denominada <em>Recanto Santa Cruz</em>, foi fundada em <strong>5 de agosto de 1976</strong>, pela <strong>Pastora Aline Castejón Mattar</strong>.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Seu trabalho teve início no <strong>Bairro Valinho, em Tatuí/SP</strong>, oferecendo acolhimento e atenção humanizada a crianças em situação de vulnerabilidade social e exclusão.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Ao longo de cinco décadas, a organização consolidou-se como uma referência local e regional na execução de ações socioassistenciais destinadas às crianças, adolescentes e suas famílias.
            </p>

            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-3">
                <Building2 className="w-5 h-5 text-blue-700 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 font-bold">Organização da Sociedade Civil</strong>
                  <span className="text-slate-500 text-xs">Entidade sem fins lucrativos (OSC)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 font-bold">Proteção Social Básica</strong>
                  <span className="text-slate-500 text-xs">Executora oficial do SCFV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
