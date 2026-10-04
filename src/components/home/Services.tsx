import React from 'react';
import { Users, BookOpen, Palette, Trophy, HeartPulse, Home } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Serviço de Convivência e Fortalecimento de Vínculos',
      subtitle: 'SCFV',
      description: 'Atividades voltadas à convivência, socialização e fortalecimento dos vínculos familiares e comunitários.',
      icon: Users,
      color: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    {
      title: 'Acompanhamento Pedagógico',
      subtitle: 'Educação & Aprendizagem',
      description: 'Apoio ao desempenho escolar, estímulo à aprendizagem e ao protagonismo das crianças e adolescentes.',
      icon: BookOpen,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      title: 'Oficinas Socioculturais',
      subtitle: 'Projeto Samaritano',
      description: 'Atividades artísticas, culturais e criativas desenvolvidas também por meio do Projeto Samaritano.',
      icon: Palette,
      color: 'bg-purple-50 text-purple-700 border-purple-100',
    },
    {
      title: 'Esporte e Lazer',
      subtitle: 'Socialização & Saúde',
      description: 'Práticas esportivas e recreativas utilizadas como instrumentos de socialização, saúde e desenvolvimento.',
      icon: Trophy,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
    },
    {
      title: 'Atenção à Saúde Integral',
      subtitle: 'Acompanhamento Multidisciplinar',
      description: 'Acompanhamento psicossocial e odontológico, além da articulação com a rede municipal de saúde.',
      icon: HeartPulse,
      color: 'bg-rose-50 text-rose-700 border-rose-100',
    },
    {
      title: 'Orientação e Apoio Sociofamiliar',
      subtitle: 'Rede de Proteção',
      description: 'Atendimento e orientação às famílias para fortalecimento dos vínculos e acesso à rede de proteção social.',
      icon: Home,
      color: 'bg-sky-50 text-sky-700 border-sky-100',
    },
  ];

  return (
    <section id="atuacao" className="py-16 md:py-24 bg-[#fafbff] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#1a5fa8] uppercase tracking-widest">
            Serviços e Ações
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Nosso trabalho
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Ações socioassistenciais integradas para o desenvolvimento humano, afetivo e cidadão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-blue-300"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${item.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
