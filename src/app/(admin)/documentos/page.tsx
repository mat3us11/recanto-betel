'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { mockDocuments } from '@/data/mockData';
import { FileText, Download, Upload, Search, Filter } from 'lucide-react';
import { useToast } from '@/components/ui/ToastContext';

export default function DocumentosPage() {
  const { showToast } = useToast();
  const [search, setSearch] = useState('');

  const filtered = mockDocuments.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Documentos' }]} />
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">Documentos</h1>
        </div>

        <button
          onClick={() => showToast('Upload de Arquivo', 'Selecione o documento digitalizado', 'info')}
          className="inline-flex items-center gap-2 bg-[#13233b] hover:bg-[#1a3153] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm self-start sm:self-auto"
        >
          <Upload className="w-4 h-4" />
          <span>+ Enviar Documento</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="relative max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por nome do documento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Total de 256 documentos arquivados com segurança</span>
        </div>

        <div className="divide-y divide-slate-100">
          {filtered.map((doc) => (
            <div
              key={doc.id}
              className="p-4 flex items-center justify-between hover:bg-slate-50/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs">
                  {doc.type}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{doc.name}</p>
                  <p className="text-xs text-slate-400">
                    Cadastrado em {doc.uploadDate} • {doc.size}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                  {doc.status}
                </span>
                <button
                  onClick={() =>
                    showToast('Download Concluído', `Arquivo ${doc.name} baixado.`, 'success')
                  }
                  className="p-2 text-slate-400 hover:text-blue-900 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Baixar arquivo"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
