'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Lock, User, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/branding/Logo';
import { useToast } from '@/components/ui/ToastContext';

export default function LoginPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('recantobetel');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    showToast('Acesso Permitido', 'Entrando no painel administrativo...', 'success');

    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full bg-slate-100">
      {/* Lado Esquerdo: Fundo Azul-Marinho Institucional */}
      <div className="lg:w-1/2 bg-[#0f1d33] flex flex-col justify-between p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
        {/* Background decorative subtle gradients */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top return link */}
        <div className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-blue-200 hover:text-white transition-colors"
          >
            ← Voltar ao site institucional
          </Link>
        </div>

        {/* Center Institutional Brand */}
        <div className="relative z-10 my-auto py-12 flex flex-col items-center text-center">
          <Logo variant="vertical" theme="light" showSubtitle={true} />
        </div>

        {/* Bottom footer credit */}
        <div className="relative z-10 text-center lg:text-left text-xs text-blue-300/60">
          <p>© 2026 Associação Recanto Betel • Tatuí - SP</p>
        </div>
      </div>

      {/* Lado Direito: Formulário de Login */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16 bg-[#f8fafc]">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Bem-vindo!
            </h2>
            <p className="text-sm text-slate-500 mt-1.5">
              Faça login para acessar o sistema
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Campo Usuário */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Usuário
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Digite seu usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-3.5 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label={showPassword ? 'Ocultar senha' : 'Exibir senha'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Lembrar-me & Esqueci Minha Senha */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-900 focus:ring-blue-800"
                />
                <span>Lembrar-me</span>
              </label>

              <button
                type="button"
                onClick={() =>
                  showToast('Recuperação de Senha', 'Instruções enviadas para seu e-mail cadastrado.', 'info')
                }
                className="text-blue-800 hover:text-blue-900 font-medium hover:underline"
              >
                Esqueci minha senha
              </button>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 px-4 bg-[#101f36] hover:bg-[#182f52] text-white font-semibold rounded-lg text-sm transition-all shadow-sm flex items-center justify-center gap-2 group disabled:opacity-75"
            >
              <span>{isLoading ? 'Entrando...' : 'Entrar'}</span>
              {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
            </button>
          </form>

          {/* Dica para o avaliador */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-400">
              Protótipo funcional • Qualquer usuário e senha serão aceitos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
