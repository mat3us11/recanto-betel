'use client';

import React from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BarChart3, Download, Calendar, Users, HeartPulse, FileText } from 'lucide-react';
import { useToast } from '@/components/ui/ToastContext';

export default function RelatoriosPage() {
  const { showToast } = useToast();

  const handleExport = (name: string) => {
    showToast('Gerando Relatório', `Exportando ${name} em formato PDF/Excel...`, 'success');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Relatórios' }]} />
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">Relatórios & Indicadores</h1>
        </div>

        <button
          onClick={() => handleExport('Relatório Consolidado Geral')}
          className="inline-flex items-center gap-2 bg-[#13233b] hover:bg-[#1a3153] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Exportar Relatório Mensal</span>
        </button>
      </div>

      {/* Grid of Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Frequência e Matrículas</h3>
          <p className="text-xs text-slate-500 mt-1">Taxa de frequência média: 94.8% no mês vigente.</p>
          <button
            onClick={() => handleExport('Relatório de Frequência')}
            className="mt-4 text-xs font-semibold text-blue-800 hover:underline"
          >
            Baixar detalhado →
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center mb-3">
            <HeartPulse className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Atendimentos em Saúde</h3>
          <p className="text-xs text-slate-500 mt-1">1.245 atendimentos multidisciplinares realizados.</p>
          <button
            onClick={() => handleExport('Relatório de Saúde')}
            className="mt-4 text-xs font-semibold text-blue-800 hover:underline"
          >
            Baixar detalhado →
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Prestações de Contas</h3>
          <p className="text-xs text-slate-500 mt-1">Execução financeira com conformidade auditada.</p>
          <button
            onClick={() => handleExport('Prestação de Contas')}
            className="mt-4 text-xs font-semibold text-blue-800 hover:underline"
          >
            Baixar detalhado →
          </button>
        </div>
      </div>
    </div>
  );
}
