import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f1d33] text-white border-t border-slate-800 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80">
          {/* Coluna 1: Logo e Apresentação Institucional */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-3 bg-white p-2.5 rounded-2xl shadow-sm">
              <div className="relative h-14 w-14">
                <Image
                  src="/images/logo-recanto-betel-50-anos.png"
                  alt="Associação Recanto Betel 50 Anos"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-slate-900 leading-tight pr-2">
                <span className="text-[10px] uppercase font-bold text-slate-500">Associação</span>
                <span className="text-base font-extrabold text-[#0d3f73]">Recanto Betel</span>
                <span className="text-[10px] font-bold text-amber-600">50 anos • 1976–2026</span>
              </div>
            </div>

            <div className="text-xs text-slate-300 space-y-1.5 max-w-md leading-relaxed">
              <p className="font-bold text-white text-sm">Associação Recanto Betel</p>
              <p className="text-slate-400">Organização da Sociedade Civil sem fins lucrativos</p>
              <p className="text-slate-300">
                Desde 1976 promovendo proteção social e fortalecendo vínculos em Tatuí.
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-400 font-mono space-y-0.5">
              <p>CNPJ 47.818.778/0001-76</p>
              <p>Tatuí – SP</p>
            </div>
          </div>

          {/* Coluna 2: Links Institucionais */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="#inicio" className="hover:text-amber-300 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-amber-300 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#atuacao" className="hover:text-amber-300 transition-colors">
                  Atuação
                </Link>
              </li>
              <li>
                <Link href="#historia" className="hover:text-amber-300 transition-colors">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="#transparencia" className="hover:text-amber-300 transition-colors">
                  Transparência
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-amber-300 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Presença Comunitária */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Comunidade
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Acompanhe as atividades e projetos nas redes sociais da Associação Recanto Betel.
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                Instagram
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                Facebook
              </span>
            </div>
          </div>
        </div>

        {/* Rodapé inferior (sem Área Restrita nem links de admin) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© 1976–2026 Associação Recanto Betel • 50 Anos de História.</p>
          <p className="mt-2 sm:mt-0 text-[11px] text-slate-500">
            Tatuí – SP • Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};
