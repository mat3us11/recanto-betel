import React, { useState } from 'react';
import Image from 'next/image';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');

  const photos = [
    {
      src: '/images/criancas-ao-ar-livre.jpg',
      title: 'Atividades lúdicas ao ar livre',
      category: 'convivencia',
      categoryLabel: 'Convivência',
    },
    {
      src: '/images/apresentacao-cultural.jpg',
      title: 'Espetáculo e apresentação cultural',
      category: 'cultural',
      categoryLabel: 'Cultura',
    },
    {
      src: '/images/oficina-artes.jpg',
      title: 'Oficina de artes com recicláveis',
      category: 'artes',
      categoryLabel: 'Artes',
    },
    {
      src: '/images/futebol-recanto.png',
      title: 'Atividades esportivas e recreação',
      category: 'esporte',
      categoryLabel: 'Esporte',
    },
    {
      src: '/images/sala-sonho.png',
      title: 'Espaço pedagógico "Tudo aqui já foi um sonho"',
      category: 'pedagogico',
      categoryLabel: 'Pedagógico',
    },
    {
      src: '/images/sala-quando-crescer.png',
      title: 'Espaço de convivência infantojuvenil',
      category: 'convivencia',
      categoryLabel: 'Convivência',
    },
    {
      src: '/images/jogos-pedagogicos.jpg',
      title: 'Jogos pedagógicos e raciocínio lógico',
      category: 'pedagogico',
      categoryLabel: 'Pedagógico',
    },
    {
      src: '/images/refeicao-coletiva.jpg',
      title: 'Segurança alimentar e refeição diária',
      category: 'alimentacao',
      categoryLabel: 'Alimentação',
    },
  ];

  const filteredPhotos = filter === 'todos'
    ? photos
    : photos.filter((p) => p.category === filter);

  const categories = [
    { id: 'todos', label: 'Todas as Atividades' },
    { id: 'convivencia', label: 'Convivência' },
    { id: 'pedagogico', label: 'Reforço & Jogos' },
    { id: 'cultural', label: 'Cultura' },
    { id: 'artes', label: 'Artes' },
    { id: 'esporte', label: 'Esporte' },
    { id: 'alimentacao', label: 'Alimentação' },
  ];

  return (
    <section id="galeria" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#1a5fa8] uppercase tracking-widest">
            Nosso Dia a Dia
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Recanto em Ação
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Momentos reais de afeto, aprendizagem, recreação e cuidado diário com nossas crianças e adolescentes.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-[#0d3f73] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs hover:shadow-lg transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300">
                  {item.categoryLabel}
                </span>
                <p className="text-xs font-semibold leading-tight mt-0.5">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
