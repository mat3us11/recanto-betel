'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { UserCheck, Search, Plus, Eye, Edit2 } from 'lucide-react';
import { useToast } from '@/components/ui/ToastContext';

export default function FuncionariosPage() {
  const { showToast } = useToast();
  const [search, setSearch] = useState('');

  const employees = [
    { id: '1', name: 'Maria Silva', role: 'Administradora Geral', dept: 'Gestão', status: 'Ativo', email: 'maria.silva@recantobetel.org.br' },
    { id: '2', name: 'Dra. Camila Ribeiro', role: 'Psicóloga Infantil', dept: 'Saúde & Acolhimento', status: 'Ativo', email: 'camila.ribeiro@recantobetel.org.br' },
    { id: '3', name: 'Prof. Marcos Vinicius', role: 'Coordenador Pedagógico', dept: 'Educação', status: 'Ativo', email: 'marcos.pedagogo@recantobetel.org.br' },
    { id: '4', name: 'Letícia Vasconcelos', role: 'Assistente Social', dept: 'Serviço Social', status: 'Ativo', email: 'leticia.social@recantobetel.org.br' },
    { id: '5', name: 'Carlos Eduardo', role: 'Instrutor de Esportes', dept: 'Esportes & Lazer', status: 'Ativo', email: 'carlos.esportes@recantobetel.org.br' },
    { id: '6', name: 'Juliana Castro', role: 'Enfermeira de Triagem', dept: 'Saúde', status: 'Ativo', email: 'juliana.saude@recantobetel.org.br' },
  ];

  const filtered = employees.filter(e => e.name.toLowerCase().includes(search.toLowerCase()) || e.role.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Funcionários' }]} />
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">Funcionários</h1>
        </div>

        <button
          onClick={() => showToast('Novo Funcionário', 'Abertura de formulário de contratação', 'info')}
          className="inline-flex items-center gap-2 bg-[#13233b] hover:bg-[#1a3153] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Novo Funcionário</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="relative max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar funcionário ou cargo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-4 md:px-6">Nome</th>
                <th className="py-3.5 px-4">Cargo / Função</th>
                <th className="py-3.5 px-4">Departamento</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4 md:px-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 md:px-6 font-medium text-slate-800">
                    <div>{item.name}</div>
                    <div className="text-xs text-slate-400 font-normal">{item.email}</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs md:text-sm">{item.role}</td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs md:text-sm">{item.dept}</td>
                  <td className="py-3.5 px-4 text-center">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="py-3.5 px-4 md:px-6 text-right">
                    <button
                      onClick={() => showToast('Visualização', `Perfil de ${item.name}`, 'info')}
                      className="p-1.5 text-slate-400 hover:text-blue-800 rounded"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => showToast('Editar', `Editar dados de ${item.name}`, 'info')}
                      className="p-1.5 text-slate-400 hover:text-slate-700 rounded"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
