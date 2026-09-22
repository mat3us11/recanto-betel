'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Settings, Save, Shield, Building, Bell } from 'lucide-react';
import { useToast } from '@/components/ui/ToastContext';

export default function ConfiguracoesPage() {
  const { showToast } = useToast();

  const [institution, setInstitution] = useState({
    name: 'Associação Beneficente Recanto Betel',
    cnpj: '00.123.456/0001-78',
    city: 'Tatuí',
    state: 'SP',
    email: 'contato@recantobetel.org.br',
    phone: '(15) 3251-0000',
    notifyEmail: true,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Configurações Salvas', 'As preferências da instituição foram salvas.', 'success');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Configurações' }]} />
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">Configurações do Sistema</h1>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#13233b] hover:bg-[#1a3153] text-white text-xs font-semibold transition-colors shadow-sm self-start sm:self-auto"
        >
          <Save className="w-3.5 h-3.5" />
          <span>Salvar Alterações</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] p-6 md:p-8">
        <form onSubmit={handleSave} className="space-y-6 text-xs max-w-2xl">
          <div>
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4 flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-800" />
              <span>Dados Institucionais</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Razão Social</label>
                <input
                  type="text"
                  value={institution.name}
                  onChange={(e) => setInstitution({ ...institution, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">CNPJ</label>
                  <input
                    type="text"
                    value={institution.cnpj}
                    onChange={(e) => setInstitution({ ...institution, cnpj: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Município / UF</label>
                  <input
                    type="text"
                    value={`${institution.city} - ${institution.state}`}
                    onChange={(e) => setInstitution({ ...institution, city: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">E-mail Institucional</label>
                  <input
                    type="email"
                    value={institution.email}
                    onChange={(e) => setInstitution({ ...institution, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Telefone / WhatsApp</label>
                  <input
                    type="text"
                    value={institution.phone}
                    onChange={(e) => setInstitution({ ...institution, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
