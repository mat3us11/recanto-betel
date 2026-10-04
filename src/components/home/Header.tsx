'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { Logo } from '@/components/branding/Logo';

interface HeaderProps {
  onOpenDonate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDonate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Nossa História', href: '#historia' },
    { label: 'Transparência', href: '#transparencia' },
    { label: 'Notícias', href: '#noticias' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_12px_rgba(26,95,168,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logotipo Oficial 50 Anos */}
        <Logo variant="horizontal" theme="dark" />

        {/* Links Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-700 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Botão de Destaque Doe Agora (sem Acessar Sistema) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDonate}
            className="inline-flex items-center gap-2 bg-[#0d3f73] hover:bg-[#1a5fa8] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95"
            aria-label="Abrir opções de doação para o Recanto Betel"
          >
            <Heart className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>Doe Agora</span>
          </button>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Gaveta Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-3 bg-[#0d3f73] hover:bg-[#1a5fa8] text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Faça uma Doação pelo Pix</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
