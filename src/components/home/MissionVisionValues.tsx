import React from 'react';
import { Target, Compass, HeartHandshake, Check } from 'lucide-react';

export const MissionVisionValues: React.FC = () => {
  const values = [
    'Respeito à dignidade humana',
    'Defesa dos direitos de crianças e adolescentes',
    'Equidade e justiça social',
    'Transparência na gestão e prestação de contas',
    'Comprometimento ético com a comunidade',
    'Participação comunitária e cidadania',
    'Universalidade do acesso aos serviços',
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#1a5fa8] uppercase tracking-widest">
            Diretrizes Institucionais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Missão, Visão e Valores
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Missão */}
          <div className="bg-[#fafbff] rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Missão</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ofertar serviços socioassistenciais de proteção social básica a crianças, adolescentes e famílias em situação de vulnerabilidade e risco social, promovendo o acesso a direitos, a convivência comunitária e o fortalecimento de vínculos familiares e sociais.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200/60 text-xs font-semibold text-blue-800">
              Proteção Social Básica
            </div>
          </div>

          {/* Card Visão */}
          <div className="bg-[#fafbff] rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visão</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consolidar-se como organização de referência na proteção socioassistencial de crianças e adolescentes em Tatuí e região, contribuindo para a redução das situações de vulnerabilidade, exclusão e violação de direitos.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200/60 text-xs font-semibold text-amber-800">
              Referência e Excelência Social
            </div>
          </div>

          {/* Card Valores */}
          <div className="bg-[#fafbff] rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Valores</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {values.map((val, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200/60 text-xs font-semibold text-emerald-800">
              Compromisso Ético e Humano
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
