'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  SlidersHorizontal,
  Plus,
  Eye,
  Edit2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  X,
  UserCheck,
} from 'lucide-react';
import { mockStudents } from '@/data/mockData';
import { Student } from '@/types';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { useToast } from '@/components/ui/ToastContext';

export default function AlunosPage() {
  const { showToast } = useToast();
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'Todos' | 'Ativo' | 'Inativo'>('Todos');
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [showNewStudentModal, setShowNewStudentModal] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  // New student form state
  const [newStudent, setNewStudent] = useState({
    name: '',
    birthDate: '',
    guardian: '',
    guardianPhone: '',
    status: 'Ativo' as 'Ativo' | 'Inativo',
    grade: '6º ano',
    period: 'Manhã' as 'Manhã' | 'Tarde' | 'Integral',
  });

  // Filtered list
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.guardian.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'Todos' || student.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [students, searchQuery, statusFilter]);

  // Handle adding student
  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.guardian) {
      showToast('Preencha os campos obrigatórios', 'Nome e Responsável são necessários', 'error');
      return;
    }

    const created: Student = {
      id: String(Date.now()),
      name: newStudent.name,
      birthDate: newStudent.birthDate || '01/01/2012',
      age: 14,
      gender: 'Masculino',
      cpf: '000.000.000-00',
      naturalness: 'Tatuí - SP',
      nationality: 'Brasileira',
      guardian: newStudent.guardian,
      guardianCpf: '000.000.000-00',
      guardianPhone: newStudent.guardianPhone || '(15) 99999-9999',
      guardianEmail: 'contato@email.com',
      guardianRelationship: 'Responsável',
      address: 'Tatuí - SP',
      school: 'Escola Municipal de Tatuí',
      grade: newStudent.grade,
      period: newStudent.period,
      program: 'Serviço de Convivência e Fortalecimento de Vínculos',
      status: newStudent.status,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      registrationDate: '20/05/2026',
      observations: 'Novo aluno cadastrado recentemente no protótipo.',
    };

    setStudents([created, ...students]);
    setShowNewStudentModal(false);
    setNewStudent({
      name: '',
      birthDate: '',
      guardian: '',
      guardianPhone: '',
      status: 'Ativo',
      grade: '6º ano',
      period: 'Manhã',
    });
    showToast('Aluno cadastrado com sucesso!', `${created.name} foi adicionado à lista.`);
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Breadcrumb
            items={[
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Alunos' },
            ]}
          />
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">Alunos</h1>
        </div>

        <button
          onClick={() => setShowNewStudentModal(true)}
          className="inline-flex items-center justify-center gap-2 bg-[#13233b] hover:bg-[#1a3153] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Novo Aluno</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80 md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar aluno..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={() => setShowFiltersModal(!showFiltersModal)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors ${
              statusFilter !== 'Todos' || showFiltersModal
                ? 'bg-blue-50 border-blue-200 text-blue-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <span>Filtros</span>
            {statusFilter !== 'Todos' && (
              <span className="w-2 h-2 rounded-full bg-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Filter Panel */}
      {showFiltersModal && (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center gap-4 text-xs">
          <span className="font-semibold text-slate-700">Filtrar por status:</span>
          <div className="flex gap-2">
            {(['Todos', 'Ativo', 'Inativo'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  statusFilter === status
                    ? 'bg-[#13233b] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
          {statusFilter !== 'Todos' && (
            <button
              onClick={() => setStatusFilter('Todos')}
              className="text-blue-800 underline ml-auto"
            >
              Limpar filtros
            </button>
          )}
        </div>
      )}

      {/* Students Data Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-4 md:px-6">Nome</th>
                <th className="py-3.5 px-4">Data de Nascimento</th>
                <th className="py-3.5 px-4">Responsável</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4 md:px-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-3.5 px-4 md:px-6 font-medium text-slate-800">
                      <Link
                        href={`/alunos/${student.id}`}
                        className="hover:text-blue-900 transition-colors"
                      >
                        {student.name}
                      </Link>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 text-xs md:text-sm">
                      {student.birthDate}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 text-xs md:text-sm">
                      {student.guardian}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <StatusBadge status={student.status} />
                    </td>
                    <td className="py-3.5 px-4 md:px-6 text-right">
                      <div className="relative inline-flex items-center justify-end gap-1.5">
                        <Link
                          href={`/alunos/${student.id}`}
                          title="Visualizar Detalhes"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => {
                            showToast('Modo de Edição', `Editando dados de ${student.name}`, 'info');
                          }}
                          title="Editar"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() =>
                              setActiveMenuId(activeMenuId === student.id ? null : student.id)
                            }
                            title="Mais opções"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>

                          {activeMenuId === student.id && (
                            <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-20 text-left text-xs">
                              <Link
                                href={`/alunos/${student.id}/matricula`}
                                className="block px-4 py-2 text-slate-700 hover:bg-slate-50"
                              >
                                Ficha de Matrícula
                              </Link>
                              <Link
                                href={`/alunos/${student.id}/termo`}
                                className="block px-4 py-2 text-slate-700 hover:bg-slate-50"
                              >
                                Termo de Compromisso
                              </Link>
                              <Link
                                href={`/alunos/${student.id}/anamnese`}
                                className="block px-4 py-2 text-slate-700 hover:bg-slate-50"
                              >
                                Ficha de Anamnese
                              </Link>
                              <Link
                                href={`/alunos/${student.id}/autorizacao`}
                                className="block px-4 py-2 text-slate-700 hover:bg-slate-50"
                              >
                                Autorização Atendimento
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400 text-sm">
                    Nenhum aluno encontrado com os termos pesquisados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Visual Pagination */}
        <div className="border-t border-slate-100 px-4 md:px-6 py-3.5 flex items-center justify-between text-xs text-slate-500">
          <div>
            Mostrando <span className="font-semibold text-slate-700">{filteredStudents.length}</span> de{' '}
            <span className="font-semibold text-slate-700">{students.length}</span> alunos
          </div>

          <div className="flex items-center gap-1">
            <button
              disabled
              className="px-2.5 py-1.5 rounded-md border border-slate-200 text-slate-400 cursor-not-allowed inline-flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Anterior</span>
            </button>
            <button className="w-7 h-7 rounded-md bg-[#13233b] text-white font-medium flex items-center justify-center">
              1
            </button>
            <button className="w-7 h-7 rounded-md hover:bg-slate-100 text-slate-600 font-medium flex items-center justify-center">
              2
            </button>
            <button className="w-7 h-7 rounded-md hover:bg-slate-100 text-slate-600 font-medium flex items-center justify-center">
              3
            </button>
            <button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50 inline-flex items-center gap-1">
              <span>Próximo</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Novo Aluno */}
      {showNewStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-lg w-full p-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <h3 className="text-lg font-bold text-slate-900">Cadastrar Novo Aluno</h3>
              <button
                onClick={() => setShowNewStudentModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateStudent} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Nome Completo do Aluno *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Rafael Vasconcelos"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Data de Nascimento
                  </label>
                  <input
                    type="text"
                    placeholder="DD/MM/AAAA"
                    value={newStudent.birthDate}
                    onChange={(e) => setNewStudent({ ...newStudent, birthDate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Status</label>
                  <select
                    value={newStudent.status}
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
                        status: e.target.value as 'Ativo' | 'Inativo',
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-800 focus:outline-none"
                  >
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Nome do Responsável *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Juliana Vasconcelos"
                  value={newStudent.guardian}
                  onChange={(e) => setNewStudent({ ...newStudent, guardian: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Telefone</label>
                  <input
                    type="text"
                    placeholder="(15) 99999-9999"
                    value={newStudent.guardianPhone}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, guardianPhone: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Período</label>
                  <select
                    value={newStudent.period}
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
                        period: e.target.value as 'Manhã' | 'Tarde' | 'Integral',
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-800 focus:outline-none"
                  >
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Integral">Integral</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowNewStudentModal(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#13233b] hover:bg-[#1a3153] text-white rounded-lg font-medium inline-flex items-center gap-1.5"
                >
                  <UserCheck className="w-4 h-4" />
                  Salvar Cadastro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
