'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  UserCheck,
  HeartHandshake,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  X,
} from 'lucide-react';
import { Logo } from '@/components/branding/Logo';

interface SidebarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
  isCollapsed: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isMobileOpen,
  setIsMobileOpen,
  isCollapsed,
}) => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Alunos', href: '/alunos', icon: Users },
    { label: 'Funcionários', href: '/funcionarios', icon: UserCheck },
    { label: 'Associados', href: '/associados', icon: HeartHandshake },
    { label: 'Documentos', href: '/documentos', icon: FileText },
    { label: 'Relatórios', href: '/relatorios', icon: BarChart3 },
    { label: 'Configurações', href: '/configuracoes', icon: Settings },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#13233b] text-white">
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-blue-900/40">
        {!isCollapsed ? (
          <div className="flex items-center gap-2">
            <Logo variant="horizontal" theme="light" />
          </div>
        ) : (
          <div className="mx-auto">
            <Logo variant="icon-only" theme="light" />
          </div>
        )}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href === '/alunos' && pathname.startsWith('/alunos'));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-600/90 text-white shadow-sm font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              } ${isCollapsed ? 'justify-center px-2' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout / Exit button */}
      <div className="p-3 border-t border-blue-900/40">
        <Link
          href="/login"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-rose-300 hover:bg-rose-500/10 transition-colors ${
            isCollapsed ? 'justify-center px-2' : ''
          }`}
          title="Sair"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!isCollapsed && <span>Sair</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col flex-shrink-0 transition-all duration-300 border-r border-slate-800 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </div>
    </>
  );
};
