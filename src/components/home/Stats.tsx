import React from 'react';
import { Calendar, Award, Users, HeartHandshake } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: '50 anos',
      label: 'de atuação socioassistencial',
      icon: Award,
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      value: '1976',
      label: 'ano de fundação em Tatuí',
      icon: Calendar,
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    },
    {
      value: '2,5 milhões+',
      label: 'atendimentos ao longo da trajetória',
      icon: HeartHandshake,
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      value: '6 a 15 anos',
      label: 'faixa etária atendida pelo SCFV',
      icon: Users,
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#fafbff] rounded-2xl p-6 border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.badgeColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Oficial
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1.5 leading-snug">
                    {stat.label}
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
