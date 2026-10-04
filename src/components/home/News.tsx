import React from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

export const News: React.FC = () => {
  const newsList = [
    {
      date: '2026',
      tag: 'Jubileu de Ouro',
      title: '50 anos de atuação socioassistencial',
      summary: 'Em 2026, o Recanto Betel celebra cinco décadas de trabalho contínuo em Tatuí, reafirmando seu compromisso com a infância e adolescência.',
    },
    {
      date: '2025–2026',
      tag: 'Infraestrutura & Esporte',
      title: 'Projeto Quadra Poliesportiva',
      summary: 'Ampliação e estruturação da quadra poliesportiva para incentivar a prática regular de esportes, lazer e desenvolvimento motor dos usuários.',
    },
    {
      date: 'Em andamento',
      tag: 'Rede de Apoio',
      title: 'Parcerias institucionais e fortalecimento do SCFV',
      summary: 'Continuidade e ampliação dos convênios municipais que sustentam os serviços socioeducativos e a alimentação saudável diária.',
    },
    {
      date: 'Vigente',
      tag: 'Gestão Social',
      title: 'Registros e certificações com regularidade plena',
      summary: 'Manutenção e atualização permanente das inscrições e planos de trabalho junto ao CMAS e CMDCA de Tatuí.',
    },
  ];

  return (
    <section id="noticias" className="py-16 md:py-24 bg-[#fafbff] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#1a5fa8] uppercase tracking-widest">
            Acontecimentos Institucionais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Notícias e Atividades
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Acompanhe os avanços, conquistas e projetos em desenvolvimento na Associação Recanto Betel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsList.map((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-blue-300 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="inline-flex items-center gap-1 font-bold text-[#1a5fa8] bg-blue-50 px-2.5 py-1 rounded-md">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    {item.tag}
                  </span>
                  <span className="text-slate-400 font-medium">{item.date}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1a5fa8]">
                <span>Acompanhar projeto</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
