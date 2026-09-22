'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, CheckSquare, Square } from 'lucide-react';
import { mockStudents } from '@/data/mockData';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { SignaturePad } from '@/components/ui/SignaturePad';
import { useToast } from '@/components/ui/ToastContext';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function TermoCompromissoPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { showToast } = useToast();

  const student =
    mockStudents.find((s) => s.id === resolvedParams.id) || mockStudents[0];

  const [date, setDate] = useState('20/05/2026');
  const [commitments, setCommitments] = useState([
    {
      id: 'c1',
      text: 'Garantir a frequência do aluno nas atividades ofertadas pela instituição.',
      checked: true,
    },
    {
      id: 'c2',
      text: 'Informar à instituição qualquer alteração cadastral do aluno ou do responsável.',
      checked: true,
    },
    {
      id: 'c3',
      text: 'Respeitar as normas e orientações da instituição.',
      checked: true,
    },
    {
      id: 'c4',
      text: 'Zelar pelo bom relacionamento e convivência no ambiente institucional.',
      checked: true,
    },
  ]);

  const toggleCommitment = (id: string) => {
    setCommitments(
      commitments.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c))
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      'Termo de Compromisso Salvo!',
      `O termo de compromisso de ${student.name} foi validado e assinado.`,
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
              { label: 'Termo de Compromisso' },
            ]}
          />
          <h1 className="text-xl font-bold text-slate-900 tracking-tight mt-1">
            Termo de Compromisso
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

      {/* Main Card */}
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

          {/* Seção 2: Compromissos */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 mb-2">
              Compromissos
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              O responsável pelo aluno acima identificado assume os seguintes compromissos:
            </p>

            <div className="space-y-3">
              {commitments.map((commitment) => (
                <div
                  key={commitment.id}
                  onClick={() => toggleCommitment(commitment.id)}
                  className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer select-none"
                >
                  <button
                    type="button"
                    className="mt-0.5 text-blue-900 focus:outline-none"
                  >
                    {commitment.checked ? (
                      <CheckSquare className="w-4 h-4 text-blue-800" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  <span className="text-xs text-slate-700 font-medium leading-relaxed">
                    {commitment.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Seção 3: Assinatura */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4">
              Assinatura do Responsável
            </h3>
            <div className="max-w-md">
              <SignaturePad signerName={student.guardian} initialSigned={true} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
