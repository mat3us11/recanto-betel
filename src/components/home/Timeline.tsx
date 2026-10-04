import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const Timeline: React.FC = () => {
  const events = [
    {
      year: '1976',
      title: 'Fundação Institucional',
      description: 'Fundação do Recanto Santa Cruz no Bairro Valinho, em Tatuí, pela Pastora Aline Castejón Mattar.',
      highlight: false,
    },
    {
      year: '2005',
      title: 'Inscrição no CMAS',
      description: 'Inscrição oficial no Conselho Municipal de Assistência Social — CMAS de Tatuí (Inscrição nº 06).',
      highlight: false,
    },
    {
      year: '2012',
      title: 'Registro no CMDCA',
      description: 'Registro no Conselho Municipal dos Direitos da Criança e do Adolescente — CMDCA de Tatuí.',
      highlight: false,
    },
    {
      year: '2025–2026',
      title: 'Ampliação de Parcerias',
      description: 'Renovação e ampliação de parcerias estratégicas, captação e estruturação da quadra poliesportiva.',
      highlight: false,
    },
    {
      year: '2026',
      title: 'Jubileu de Ouro — 50 Anos',
      description: 'Celebração de cinco décadas ininterruptas de atuação socioassistencial, cidadania e transformação social.',
      highlight: true,
    },
  ];

  return (
    <section id="historia" className="py-16 md:py-20 bg-[#fafbff] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#1a5fa8] uppercase tracking-widest">
            Nossa História
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Marcos da trajetória do Recanto Betel
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Cinco décadas dedicadas ao acolhimento e à promoção dos direitos de crianças e adolescentes em Tatuí.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {events.map((evt, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  evt.highlight
                    ? 'border-amber-400 ring-2 ring-amber-100 shadow-md bg-gradient-to-b from-white to-amber-50/30'
                    : 'border-slate-200/90 shadow-2xs hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-sm font-black px-2.5 py-1 rounded-lg ${
                        evt.highlight
                          ? 'bg-amber-400 text-amber-950 font-black'
                          : 'bg-blue-50 text-blue-800'
                      }`}
                    >
                      {evt.year}
                    </span>
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        evt.highlight ? 'text-amber-500' : 'text-blue-500'
                      }`}
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {evt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
