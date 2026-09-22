'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import { mockStudents } from '@/data/mockData';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { useToast } from '@/components/ui/ToastContext';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function AnamnesePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { showToast } = useToast();

  const student =
    mockStudents.find((s) => s.id === resolvedParams.id) || mockStudents[0];

  const [formData, setFormData] = useState({
    date: '20/05/2026',
    bloodType: 'O+',
    allergies: 'Nenhuma',
    chronicDiseases: 'Nenhuma',
    medications: 'Nenhum',
    disability: 'Não',
    observations: 'Nenhuma observação relevante de saúde.',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      'Ficha de Anamnese Salva!',
      `O histórico de saúde de ${student.name} foi atualizado com sucesso.`,
      'success'
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Breadcrumb
            items={[
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Alunos', href: '/alunos' },
              { label: student.name, href: `/alunos/${student.id}` },
              { label: 'Ficha de Anamnese' },
            ]}
          />
          <h1 className="text-xl font-bold text-slate-900 tracking-tight mt-1">
            Ficha de Anamnese
          </h1>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href={`/alunos/${student.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar</span>
          </Link>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#13233b] hover:bg-[#1a3153] text-white text-xs font-semibold transition-colors shadow-sm"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Salvar</span>
          </button>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] p-6 md:p-8">
        <form onSubmit={handleSave} className="space-y-8">
          {/* Seção 1: Dados do Aluno */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4">
              Dados do Aluno
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Aluno</label>
                <input
                  type="text"
                  readOnly
                  value={student.name}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Data</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            </div>
          </div>

          {/* Seção 2: Informações de Saúde */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4">
              Informações de Saúde
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">
                  Tipo Sanguíneo
                </label>
                <input
                  type="text"
                  value={formData.bloodType}
                  onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Alergias</label>
                <input
                  type="text"
                  value={formData.allergies}
                  onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">
                  Doenças Crônicas
                </label>
                <input
                  type="text"
                  value={formData.chronicDiseases}
                  onChange={(e) =>
                    setFormData({ ...formData, chronicDiseases: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">
                  Uso de Medicamentos
                </label>
                <input
                  type="text"
                  value={formData.medications}
                  onChange={(e) => setFormData({ ...formData, medications: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">
                  Possui Deficiência?
                </label>
                <input
                  type="text"
                  value={formData.disability}
                  onChange={(e) => setFormData({ ...formData, disability: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-xs font-medium text-slate-500 mb-1">
                  Observações de Saúde
                </label>
                <textarea
                  rows={3}
                  value={formData.observations}
                  onChange={(e) =>
                    setFormData({ ...formData, observations: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
