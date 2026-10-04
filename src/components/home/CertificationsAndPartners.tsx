import React from 'react';
import Image from 'next/image';
import { ShieldCheck, FileCheck, Building, Award } from 'lucide-react';

export const CertificationsAndPartners: React.FC = () => {
  const certifications = [
    {
      title: 'CMAS Tatuí',
      description: 'Inscrição nº 06 no Conselho Municipal de Assistência Social.',
      icon: ShieldCheck,
      color: 'text-blue-700 bg-blue-50',
    },
    {
      title: 'CMDCA Tatuí',
      description: 'Registro institucional vigente no Conselho dos Direitos da Criança e do Adolescente.',
      icon: FileCheck,
      color: 'text-emerald-700 bg-emerald-50',
    },
    {
      title: 'Organização da Sociedade Civil',
      description: 'Entidade do terceiro setor sem fins lucrativos (OSC) de utilidade pública.',
      icon: Building,
      color: 'text-purple-700 bg-purple-50',
    },
    {
      title: 'Reconhecimentos Oficiais',
      description: 'Moções de congratulações e reconhecimentos públicos pelos relevantes serviços ao município.',
      icon: Award,
      color: 'text-amber-700 bg-amber-50',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#fafbff] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Certificações e Regularidade */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#1a5fa8] uppercase tracking-widest">
              Credibilidade & Conformidade
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Certificações e Regularidade Institucional
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Plena conformidade legal junto aos órgãos de controle e conselhos tutelares e de assistência social.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Apoio e Parceiros */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Rede de Articulação
            </span>
            <h3 className="text-xl font-bold text-slate-800 mt-1">
              Apoio e Parceiros Institucionais
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <div className="relative w-full max-w-md h-20 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-xs flex items-center justify-center">
              <Image
                src="/images/parceiros-oficiais.png"
                alt="Logos de Apoio e Parceiros da Associação Recanto Betel"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain p-2"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-600">
              <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                🏛️ Prefeitura Municipal de Tatuí
              </span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                📋 CMAS — Tatuí
              </span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                👶 CMDCA — Tatuí
              </span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                🎓 Secretaria de Esporte, Cultura, Turismo e Lazer
              </span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                🇧🇷 Lei Paulo Gustavo · Ministério da Cultura
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
