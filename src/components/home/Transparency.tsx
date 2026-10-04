import React from 'react';
import { FileText, FileSpreadsheet, ShieldAlert, Award } from 'lucide-react';

export const Transparency: React.FC = () => {
  const items = [
    {
      title: 'Prestação de Contas',
      description: 'Demonstrativos e balanços contábeis e financeiros submetidos à apreciação dos conselhos municipais.',
      icon: FileSpreadsheet,
      status: 'Documento em breve para download',
    },
    {
      title: 'Parcerias e Convênios',
      description: 'Termos de colaboração e fomento firmados com a administração pública e parceiros privados.',
      icon: FileText,
      status: 'Documento em breve para download',
    },
    {
      title: 'Relatórios Institucionais',
      description: 'Relatórios consolidados de atividades socioassistenciais, atendimentos e planos de trabalho.',
      icon: Award,
      status: 'Documento em breve para download',
    },
    {
      title: 'Certificações e Registros',
      description: 'Certidões de regularidade fiscal, estatuto social registrado e inscrições no CMAS e CMDCA.',
      icon: ShieldAlert,
      status: 'Documento em breve para download',
    },
  ];

  return (
    <section id="transparencia" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#1a5fa8] uppercase tracking-widest">
            Compromisso Público
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Transparência e Prestação de Contas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            A gestão ética e a clareza na aplicação dos recursos públicos e doações da comunidade são pilares da Associação Recanto Betel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#fafbff] rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/60">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
