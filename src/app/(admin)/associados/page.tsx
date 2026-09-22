'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { HeartHandshake, Search, Plus, Eye } from 'lucide-react';
import { useToast } from '@/components/ui/ToastContext';

export default function AssociadosPage() {
  const { showToast } = useToast();
  const [search, setSearch] = useState('');

  const members = [
    { id: '1', name: 'Ana Paula Lima', category: 'Mantenedor Ouro', since: '19/05/2026', phone: '(15) 98111-2233', status: 'Ativo' },
    { id: '2', name: 'Dr. Roberto Silveira', category: 'Sócio Benemérito', since: '10/02/2022', phone: '(15) 98222-3344', status: 'Ativo' },
    { id: '3', name: 'Cooperativa Agrícola de Tatuí', category: 'Pessoa Jurídica Parceira', since: '05/01/2020', phone: '(15) 3251-8899', status: 'Ativo' },
    { id: '4', name: 'Clarice Machado', category: 'Contribuinte Mensal', since: '14/08/2024', phone: '(15) 98333-4455', status: 'Ativo' },
    { id: '5', name: 'Antônio Fagundes Dias', category: 'Voluntário Ativo', since: '03/09/2023', phone: '(15) 98444-5566', status: 'Ativo' },
  ];

  const filtered = members.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Associados' }]} />
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">Associados</h1>
        </div>

        <button
          onClick={() => showToast('Novo Associado', 'Formulário de filiação de novo associado', 'info')}
          className="inline-flex items-center gap-2 bg-[#13233b] hover:bg-[#1a3153] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Novo Associado</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="relative max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar associado..."
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
                <th className="py-3.5 px-4 md:px-6">Associado</th>
                <th className="py-3.5 px-4">Categoria</th>
                <th className="py-3.5 px-4">Data Filiação</th>
                <th className="py-3.5 px-4">Telefone</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4 md:px-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 md:px-6 font-medium text-slate-800">{item.name}</td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs md:text-sm">{item.category}</td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs md:text-sm">{item.since}</td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs md:text-sm">{item.phone}</td>
                  <td className="py-3.5 px-4 text-center">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="py-3.5 px-4 md:px-6 text-right">
                    <button
                      onClick={() => showToast('Detalhes', `Ficha do associado ${item.name}`, 'info')}
                      className="p-1.5 text-slate-400 hover:text-blue-800 rounded"
                    >
                      <Eye className="w-4 h-4" />
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
