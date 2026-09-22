'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Edit2,
  FileText,
  FileCheck,
  HeartPulse,
  ShieldCheck,
  Download,
  Calendar,
  User,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { mockStudents, mockDocuments, mockAttendances } from '@/data/mockData';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { useToast } from '@/components/ui/ToastContext';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function StudentDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { showToast } = useToast();

  const student =
    mockStudents.find((s) => s.id === resolvedParams.id) || mockStudents[0];

  const [activeTab, setActiveTab] = useState<'info' | 'docs' | 'atendimentos' | 'obs'>('info');

  return (
    <div className="space-y-6">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/alunos"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar</span>
          </Link>
          <div>
            <Breadcrumb
              items={[
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Alunos', href: '/alunos' },
                { label: 'Detalhes' },
              ]}
            />
            <h1 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
              Detalhes do Aluno
            </h1>
          </div>
        </div>

        <button
          onClick={() =>
            showToast('Modo de Edição', `Pronto para editar a ficha de ${student.name}`, 'info')
          }
          className="inline-flex items-center justify-center gap-2 bg-[#13233b] hover:bg-[#1a3153] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm self-start sm:self-auto"
        >
          <Edit2 className="w-3.5 h-3.5" />
          <span>Editar</span>
        </button>
      </div>

      {/* Main Grid: Left Profile Card + Right Tabs & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Student Profile Summary Card */}
        <div className="lg:col-span-4 space-y-5">
          <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] p-6 text-center">
            {/* Student Photo */}
            <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-slate-100 shadow-sm">
              <Image
                src={student.avatarUrl}
                alt={student.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-lg font-bold text-slate-900">{student.name}</h2>
            <div className="mt-1.5 mb-5 flex justify-center">
              <StatusBadge status={student.status} />
            </div>

            {/* Profile Info List */}
            <div className="border-t border-slate-100 pt-4 space-y-3.5 text-left text-xs">
              <div>
                <p className="text-slate-400 font-medium">Data de Nascimento</p>
                <p className="text-slate-800 font-semibold mt-0.5">
                  {student.birthDate} ({student.age} anos)
                </p>
              </div>

              <div>
                <p className="text-slate-400 font-medium">Responsável</p>
                <p className="text-slate-800 font-semibold mt-0.5">{student.guardian}</p>
              </div>

              <div>
                <p className="text-slate-400 font-medium">Telefone</p>
                <p className="text-slate-800 font-semibold mt-0.5">{student.guardianPhone}</p>
              </div>

              <div>
                <p className="text-slate-400 font-medium">E-mail</p>
                <p className="text-slate-800 font-semibold mt-0.5">{student.guardianEmail}</p>
              </div>

              <div>
                <p className="text-slate-400 font-medium">Endereço</p>
                <p className="text-slate-800 font-semibold mt-0.5 leading-relaxed">
                  {student.address}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Access to Student Forms/Documents */}
          <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] p-4 space-y-2">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider px-2 mb-2">
              Documentos & Fichas
            </h3>

            <Link
              href={`/alunos/${student.id}/matricula`}
              className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all text-xs font-medium text-slate-700 group"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-blue-700" />
                <span>Ficha de Matrícula</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700" />
            </Link>

            <Link
              href={`/alunos/${student.id}/termo`}
              className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all text-xs font-medium text-slate-700 group"
            >
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-4 h-4 text-emerald-700" />
                <span>Termo de Compromisso</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
            </Link>

            <Link
              href={`/alunos/${student.id}/anamnese`}
              className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all text-xs font-medium text-slate-700 group"
            >
              <div className="flex items-center gap-2.5">
                <HeartPulse className="w-4 h-4 text-rose-700" />
                <span>Ficha de Anamnese</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-700" />
            </Link>

            <Link
              href={`/alunos/${student.id}/autorizacao`}
              className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all text-xs font-medium text-slate-700 group"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-purple-700" />
                <span>Autorização de Atendimento</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-700" />
            </Link>
          </div>
        </div>

        {/* Right Column: Tabbed Content Panel */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-slate-200 flex overflow-x-auto text-xs font-semibold px-4 pt-2">
              <button
                onClick={() => setActiveTab('info')}
                className={`py-3 px-4 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'info'
                    ? 'border-blue-800 text-blue-900 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Informações
              </button>
              <button
                onClick={() => setActiveTab('docs')}
                className={`py-3 px-4 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'docs'
                    ? 'border-blue-800 text-blue-900 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Documentos ({mockDocuments.length})
              </button>
              <button
                onClick={() => setActiveTab('atendimentos')}
                className={`py-3 px-4 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'atendimentos'
                    ? 'border-blue-800 text-blue-900 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Atendimentos ({mockAttendances.length})
              </button>
              <button
                onClick={() => setActiveTab('obs')}
                className={`py-3 px-4 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'obs'
                    ? 'border-blue-800 text-blue-900 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Observações
              </button>
            </div>

            {/* Tab Content Panels */}
            <div className="p-6">
              {/* 1. ABA INFORMAÇÕES */}
              {activeTab === 'info' && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  {/* Seção Informações Pessoais */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                      Informações Pessoais
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs">
                      <div>
                        <p className="text-slate-400 font-medium">Nome Completo</p>
                        <p className="text-slate-800 font-semibold text-sm mt-0.5">{student.name}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 font-medium">CPF</p>
                        <p className="text-slate-800 font-semibold text-sm mt-0.5">{student.cpf}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 font-medium">Sexo</p>
                        <p className="text-slate-800 font-semibold text-sm mt-0.5">{student.gender}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 font-medium">Data de Nascimento</p>
                        <p className="text-slate-800 font-semibold text-sm mt-0.5">
                          {student.birthDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400 font-medium">Naturalidade</p>
                        <p className="text-slate-800 font-semibold text-sm mt-0.5">
                          {student.naturalness}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400 font-medium">Nacionalidade</p>
                        <p className="text-slate-800 font-semibold text-sm mt-0.5">
                          {student.nationality}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Seção Informações da Escola */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                      Informações da Escola
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6 text-xs">
                      <div>
                        <p className="text-slate-400 font-medium">Escola</p>
                        <p className="text-slate-800 font-semibold text-sm mt-0.5">{student.school}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 font-medium">Série / Ano</p>
                        <p className="text-slate-800 font-semibold text-sm mt-0.5">{student.grade}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 font-medium">Período</p>
                        <p className="text-slate-800 font-semibold text-sm mt-0.5">{student.period}</p>
                      </div>
                    </div>
                  </div>

                  {/* Seção Programa Institucional */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                      Programa Institucional Recanto Betel
                    </h3>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 text-xs">
                      <p className="text-slate-500 font-medium">Programa / Oficina Vinculada</p>
                      <p className="text-slate-800 font-semibold text-sm mt-1">{student.program}</p>
                      <p className="text-slate-500 mt-2">
                        Data de ingresso: <span className="font-semibold">{student.registrationDate}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. ABA DOCUMENTOS */}
              {activeTab === 'docs' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-slate-900">Documentos Cadastrados</h3>
                    <button
                      onClick={() =>
                        showToast('Novo Documento', 'Selecione o arquivo digitalizado', 'info')
                      }
                      className="text-xs text-blue-800 hover:text-blue-900 font-semibold"
                    >
                      + Anexar documento
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                    {mockDocuments.map((doc) => (
                      <div
                        key={doc.id}
                        className="p-3.5 flex items-center justify-between hover:bg-slate-50/70 transition-colors text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-[10px]">
                            {doc.type}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">{doc.name}</p>
                            <p className="text-slate-400 text-[11px]">
                              {doc.uploadDate} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            showToast('Download Iniciado', `Baixando ${doc.name}`, 'success')
                          }
                          className="p-1.5 text-slate-400 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
                          title="Baixar arquivo"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. ABA ATENDIMENTOS */}
              {activeTab === 'atendimentos' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-slate-900">Histórico de Atendimentos</h3>
                    <button
                      onClick={() =>
                        showToast('Novo Atendimento', 'Abertura de ficha de acompanhamento', 'info')
                      }
                      className="text-xs text-blue-800 hover:text-blue-900 font-semibold"
                    >
                      + Registrar atendimento
                    </button>
                  </div>

                  <div className="space-y-3">
                    {mockAttendances.map((att) => (
                      <div
                        key={att.id}
                        className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors text-xs space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-blue-900 flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            {att.professional} • {att.specialty}
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {att.date}
                          </span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{att.summary}</p>
                        <div className="flex items-center justify-between pt-1">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${
                              att.status === 'Concluído'
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-amber-50 text-amber-700'
                            }`}
                          >
                            {att.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. ABA OBSERVAÇÕES */}
              {activeTab === 'obs' && (
                <div className="space-y-4 animate-in fade-in duration-200 text-xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Observações da Equipe Multidisciplinar
                  </h3>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-slate-700 leading-relaxed">{student.observations}</p>
                  </div>

                  <div className="pt-2">
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Adicionar Nova Nota ou Observação
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Digite observações sobre o desenvolvimento pedagógico, comportamental ou familiar do aluno..."
                      className="w-full p-3 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-800 focus:outline-none"
                    />
                    <div className="mt-2 flex justify-end">
                      <button
                        onClick={() =>
                          showToast('Observação Salva', 'A anotação foi anexada ao prontuário.', 'success')
                        }
                        className="px-4 py-2 bg-[#13233b] hover:bg-[#1a3153] text-white rounded-lg font-medium"
                      >
                        Salvar Observação
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
