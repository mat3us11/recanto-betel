'use client';

import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  isCollapsed: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200/80 px-4 md:px-6 flex items-center justify-between sticky top-0 z-30 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      {/* Left: Sidebar toggle button */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          aria-label="Alternar menu lateral"
          className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-800"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Right: User profile */}
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-slate-800 leading-none">Maria Silva</p>
          <p className="text-xs text-slate-500 mt-1">Administradora</p>
        </div>
        <div className="relative flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold text-sm shadow-sm ring-2 ring-blue-100">
            MS
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
        </div>
      </div>
    </header>
  );
};
