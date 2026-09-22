'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import { mockStudents } from '@/data/mockData';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { SignaturePad } from '@/components/ui/SignaturePad';
import { useToast } from '@/components/ui/ToastContext';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function AutorizacaoAtendimentoPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { showToast } = useToast();

  const student =
    mockStudents.find((s) => s.id === resolvedParams.id) || mockStudents[0];

  const [date, setDate] = useState('20/05/2026');
  const [guardianName, setGuardianName] = useState(student.guardian);
  const [guardianCpf, setGuardianCpf] = useState(student.guardianCpf);
  const [guardianPhone, setGuardianPhone] = useState(student.guardianPhone);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      'Autorização Salva!',
      `A autorização de atendimento de ${student.name} foi validada.`,
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
              { label: 'Autorização de Atendimento' },
            ]}
          />
          <h1 className="text-xl font-bold text-slate-900 tracking-tight mt-1">
            Autorização de Atendimento
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            </div>
          </div>

          {/* Seção 2: Autorização */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 mb-3">
              Autorização
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-700 leading-relaxed">
              Eu, <span className="font-semibold text-slate-900">{guardianName}</span>, responsável
              pelo aluno acima identificado, autorizo a{' '}
              <strong className="text-blue-900">Associação Recanto Betel</strong> a realizar os
              atendimentos e inserir no acompanhamento escolar, atividades socioculturais,
              atendimentos em saúde e participação em eventos e passeios promovidos pela instituição.
            </div>
          </div>

          {/* Seção 3: Dados do Responsável & Assinatura */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4">
              Dados do Responsável
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">
                  Nome do Responsável
                </label>
                <input
                  type="text"
                  value={guardianName}
                  onChange={(e) => setGuardianName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">CPF</label>
                <input
                  type="text"
                  value={guardianCpf}
                  onChange={(e) => setGuardianCpf(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Telefone</label>
                <input
                  type="text"
                  value={guardianPhone}
                  onChange={(e) => setGuardianPhone(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            </div>

            <div className="max-w-md">
              <SignaturePad signerName={guardianName} initialSigned={true} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
