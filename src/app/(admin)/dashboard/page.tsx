import React from 'react';
import { mockStats, mockActivities } from '@/data/mockData';
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentActivities } from '@/components/dashboard/RecentActivities';
import Link from 'next/link';
import { UserPlus, FileCheck, Calendar, ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-0.5">Resumo geral da instituição</p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/alunos"
            className="inline-flex items-center gap-2 bg-[#13233b] hover:bg-[#1a3153] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <UserPlus className="w-4 h-4" />
            <span>Gerenciar Alunos</span>
          </Link>
        </div>
      </div>

      {/* 6 Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {mockStats.map((stat, index) => (
          <StatCard key={index} data={stat} />
        ))}
      </div>

      {/* Quick Access Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/alunos"
          className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-xl p-4 flex items-center justify-between shadow-sm hover:opacity-95 transition-opacity"
        >
          <div>
            <p className="text-xs font-medium text-blue-200">Acesso Rápido</p>
            <p className="text-sm font-semibold mt-0.5">Cadastro e Fichas de Alunos</p>
          </div>
          <ArrowRight className="w-4 h-4 text-blue-200" />
        </Link>

        <Link
          href="/documentos"
          className="bg-white border border-slate-200/80 rounded-xl p-4 flex items-center justify-between shadow-sm hover:border-slate-300 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Documentação</p>
              <p className="text-sm font-semibold text-slate-800">Termos & Anamneses</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400" />
        </Link>

        <Link
          href="/relatorios"
          className="bg-white border border-slate-200/80 rounded-xl p-4 flex items-center justify-between shadow-sm hover:border-slate-300 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Atendimentos</p>
              <p className="text-sm font-semibold text-slate-800">Acompanhamentos do Mês</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400" />
        </Link>
      </div>

      {/* Recent Activities Section */}
      <RecentActivities activities={mockActivities} />
    </div>
  );
}
