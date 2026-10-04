'use client';

import React, { useState } from 'react';
import { MapPin, Building, ExternalLink, Send, Info } from 'lucide-react';
import { useToast } from '@/components/ui/ToastContext';

export const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      'Formulário em Atualização',
      'O envio online de mensagens estará disponível em breve. Agradecemos a compreensão!',
      'info'
    );
  };

  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Rua+Prefeito+Manoel+Luiz+da+Silva+S%C3%A1,+438+Tatu%C3%AD+SP';

  return (
    <section id="contato" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Informações Institucionais de Contato */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#1a5fa8] uppercase tracking-widest">
                Localização & Atendimento
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Venha Conhecer a Sede
              </h2>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Nossas portas estão abertas para receber sua visita e apresentar de perto o trabalho transformador realizado com as crianças e jovens de Tatuí.
              </p>
            </div>

            <div className="bg-[#fafbff] rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-[#1a5fa8] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Endereço Institucional</strong>
                  <span className="text-slate-600 leading-relaxed block">
                    Rua Prefeito Manoel Luiz da Silva Sá, 438<br />
                    Vila Paulina / Valinho<br />
                    Tatuí – SP
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700 pt-2 border-t border-slate-200/60">
                <Building className="w-5 h-5 text-[#1a5fa8] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Registro Jurídico</strong>
                  <span className="text-slate-600 font-mono text-xs">
                    CNPJ: 47.818.778/0001-76
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0d3f73] hover:bg-[#1a5fa8] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-sm group"
              >
                <MapPin className="w-4 h-4" />
                <span>Ver no mapa (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Formulário com Indicação Clara */}
          <div className="lg:col-span-7 bg-[#fafbff] p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">
                Fale com a Associação Recanto Betel
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Deixe seus dados para agendar uma visita institucional ou tirar dúvidas.
              </p>
            </div>

            {/* Aviso transparente */}
            <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-blue-900 text-xs flex items-start gap-2.5 mb-5">
              <Info className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
              <span>
                O envio online de mensagens estará disponível em breve. Para atendimento imediato, visite nossa sede institucional em Tatuí/SP.
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Escreva sua mensagem ou interesse em parceria / voluntariado..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0d3f73] hover:bg-[#1a5fa8] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Registrar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
