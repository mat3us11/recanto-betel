'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  BookOpen,
  Sparkles,
  Trophy,
  HeartPulse,
  Heart,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  LogIn,
  CheckCircle2,
  Calendar,
  X,
  Copy,
} from 'lucide-react';
import { Logo } from '@/components/branding/Logo';
import { useToast } from '@/components/ui/ToastContext';

export default function HomePage() {
  const { showToast } = useToast();
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleCopyPix = () => {
    navigator.clipboard?.writeText('00.123.456/0001-78');
    showToast('Chave Pix Copiada!', 'Chave CNPJ da Associação Recanto Betel copiada.', 'success');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Mensagem Enviada!', 'Agradecemos o seu contato. Retornaremos em breve.', 'success');
    setContactForm({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      title: 'Convivência e Fortalecimento de Vínculos',
      description:
        'Desenvolvimento de relações afetivas, convivência comunitária, autonomia e fortalecimento dos laços familiares.',
      icon: Users,
      color: 'bg-blue-50 text-blue-800 border-blue-100',
    },
    {
      title: 'Acompanhamento Pedagógico',
      description:
        'Apoio escolar personalizado, reforço em leitura e matemática, oficinas de letramento e raciocínio lógico.',
      icon: BookOpen,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    },
    {
      title: 'Atividades Socioculturais',
      description:
        'Música, coral, artes visuais, teatro e expressões criativas que enriquecem o repertório cultural de nossos jovens.',
      icon: Sparkles,
      color: 'bg-purple-50 text-purple-800 border-purple-100',
    },
    {
      title: 'Esporte, Lazer e Cidadania',
      description:
        'Práticas esportivas como futsal, judô e recreação que ensinam disciplina, trabalho em equipe e respeito mútuo.',
      icon: Trophy,
      color: 'bg-amber-50 text-amber-800 border-amber-100',
    },
    {
      title: 'Atenção à Saúde Integral',
      description:
        'Apoio psicológico, orientação nutricional, odontológica e triagem preventiva para o bem-estar global da criança.',
      icon: HeartPulse,
      color: 'bg-rose-50 text-rose-800 border-rose-100',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. CABEÇALHO INSTITUCIONAL */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logotipo */}
          <Logo variant="horizontal" theme="dark" />

          {/* Links de Navegação */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#inicio" className="text-blue-900 font-semibold transition-colors">
              Início
            </Link>
            <Link href="#sobre" className="hover:text-blue-900 transition-colors">
              Sobre Nós
            </Link>
            <Link href="#projetos" className="hover:text-blue-900 transition-colors">
              Projetos
            </Link>
            <Link href="#transparencia" className="hover:text-blue-900 transition-colors">
              Transparência
            </Link>
            <Link href="#contato" className="hover:text-blue-900 transition-colors">
              Contato
            </Link>
          </nav>

          {/* Botões de Ação */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <LogIn className="w-4 h-4 text-blue-900" />
              <span className="hidden sm:inline">Acessar Sistema</span>
            </Link>

            <button
              onClick={() => setShowDonateModal(true)}
              className="inline-flex items-center gap-1.5 bg-[#101f36] hover:bg-[#182f52] text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span>Doe Agora</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1" id="inicio">
        {/* 2. HERO SECTION */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Lado Esquerdo: Mensagem Institucional */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold border border-blue-200/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                  <span>Mais de 50 anos de história em Tatuí-SP</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Transformando vidas, construindo um futuro melhor.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  A Associação Recanto Betel atua há mais de 50 anos em Tatuí, promovendo o
                  desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade,
                  fortalecendo vínculos familiares e comunitários através de afeto, cidadania e
                  educação.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="#projetos"
                    className="inline-flex items-center gap-2 bg-[#101f36] hover:bg-[#182f52] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all shadow-sm group"
                  >
                    <span>Conheça nossos projetos</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => {
                      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                      showToast('Voluntariado', 'Preencha o formulário abaixo para ser um voluntário!', 'info');
                    }}
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-sm font-semibold px-5 py-3 rounded-lg transition-colors shadow-xs"
                  >
                    <span>Seja um voluntário</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 text-left">
                  <div>
                    <span className="block text-2xl font-bold text-blue-950">50+</span>
                    <span className="text-xs text-slate-500 font-medium">Anos em Tatuí</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-blue-950">128</span>
                    <span className="text-xs text-slate-500 font-medium">Alunos ativos</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-blue-950">+1.000</span>
                    <span className="text-xs text-slate-500 font-medium">Famílias acolhidas</span>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Fotografia Acolhedora das Crianças */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
                    alt="Crianças sorridentes atendidas pela Associação Recanto Betel"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-xs md:text-sm font-medium drop-shadow-md">
                      Acolhimento, respeito e oportunidades para cada criança e adolescente.
                    </p>
                  </div>
                </div>

                {/* Floating institutional seal badge */}
                <div className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Instituição Certificada</p>
                    <p className="text-[11px] text-slate-500">Utilidade Pública Municipal e Estadual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SEÇÃO NOSSOS PROJETOS */}
        <section id="projetos" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
                Atuação Social
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
                Nossos Projetos
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Iniciativas que integram desenvolvimento socioemocional, apoio escolar, cultura,
                lazer e saúde para o desenvolvimento integral de cada atendido.
              </p>
            </div>

            {/* Grid dos 5 Projetos Oficiais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj, idx) => {
                const Icon = proj.icon;
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-xl p-6 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${
                      idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${proj.color} group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                        {proj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {proj.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                      <span>Saiba mais</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. SEÇÃO SOBRE NÓS */}
        <section id="sobre" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
                  Nossa História
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">
                  Mais de cinco décadas acolhendo a comunidade de Tatuí
                </h2>
                <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Fundada com princípios de amor cristão e serviço solidário ao próximo, a{' '}
                    <strong>Associação Recanto Betel</strong> tornou-se uma das mais respeitadas
                    instituições filantrópicas da região metropolitana de Sorocaba e Tatuí.
                  </p>
                  <p>
                    Nosso trabalho vai além de atividades no contraturno escolar: oferecemos
                    alimentação saudável, suporte psicológico, acolhimento de famílias e incentivo
                    ao protagonismo juvenil.
                  </p>
                  <p>
                    Com equipe multidisciplinar composta por pedagogos, psicólogos, assistentes
                    sociais e voluntários dedicados, nosso compromisso diário é garantir que cada
                    criança tenha seus direitos respeitados e seu potencial desenvolvido.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
                  Valores que nos guiam
                </h3>
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 font-semibold block">
                        Amor e Acolhimento
                      </strong>
                      <span className="text-slate-600">
                        Cuidar de cada vida com dignidade, empatia e calor humano.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 font-semibold block">
                        Transparência e Ética
                      </strong>
                      <span className="text-slate-600">
                        Prestação de contas rigorosa e gestão responsável dos recursos públicos e
                        doações.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 font-semibold block">
                        Desenvolvimento Integral
                      </strong>
                      <span className="text-slate-600">
                        Visão integral do ser humano: corpo, mente, emoções e espírito.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SEÇÃO TRANSPARÊNCIA */}
        <section id="transparencia" className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
              Compromisso Público
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-3 tracking-tight">
              Transparência e Prestação de Contas
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto mb-8">
              A Recanto Betel publica periodicamente seus balanços patrimoniais, relatórios de
              atividades e parcerias com o poder público municipal e conselhos tutelares.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-left">
                <Calendar className="w-5 h-5 text-blue-800 mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Relatório Anual 2025</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Atividades e atendimentos consolidados.
                </p>
                <button
                  onClick={() => showToast('Download do Relatório', 'Baixando PDF do Relatório 2025.', 'success')}
                  className="mt-3 text-xs text-blue-800 font-semibold hover:underline block"
                >
                  Baixar PDF →
                </button>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-left">
                <Calendar className="w-5 h-5 text-emerald-800 mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Prestação de Contas</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Demonstrativos contábeis auditados.
                </p>
                <button
                  onClick={() => showToast('Download Contábil', 'Baixando Balanço Patrimonial.', 'success')}
                  className="mt-3 text-xs text-blue-800 font-semibold hover:underline block"
                >
                  Baixar PDF →
                </button>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-left">
                <Calendar className="w-5 h-5 text-purple-800 mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Certidões e Estatuto</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Regularidade fiscal e estatuto social.
                </p>
                <button
                  onClick={() => showToast('Download Estatuto', 'Baixando Estatuto Vigente.', 'success')}
                  className="mt-3 text-xs text-blue-800 font-semibold hover:underline block"
                >
                  Baixar PDF →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SEÇÃO CONTATO */}
        <section id="contato" className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
                    Fale Conosco
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
                    Entre em Contato
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Estamos de portas abertas para receber sua visita, sugestões ou interesse em
                    parcerias e voluntariado.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="w-4 h-4 text-blue-900 flex-shrink-0" />
                    <span>Rua dos Expedicionários, 150 - Centro, Tatuí - SP, 18270-000</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="w-4 h-4 text-blue-900 flex-shrink-0" />
                    <span>(15) 3251-0000 / (15) 99888-7766</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Mail className="w-4 h-4 text-blue-900 flex-shrink-0" />
                    <span>contato@recantobetel.org.br</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Seu Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Nome completo"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Seu E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="email@exemplo.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Sua Mensagem</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Como você gostaria de colaborar ou qual sua dúvida?"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#101f36] hover:bg-[#182f52] text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. RODAPÉ */}
      <footer className="bg-[#0f1d33] text-white border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs text-slate-300">
            <div className="md:col-span-2 space-y-3">
              <Logo variant="horizontal" theme="light" />
              <p className="text-slate-400 text-xs max-w-sm mt-3 leading-relaxed">
                Associação Beneficente Recanto Betel de Tatuí. Entidade sem fins lucrativos
                dedicada à proteção, educação e acolhimento infantojuvenil.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-3">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#inicio" className="hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="#sobre" className="hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#projetos" className="hover:text-white transition-colors">
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-white transition-colors">
                    Painel Administrativo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-3">
                Área Restrita
              </h4>
              <p className="text-[11px] text-slate-400 mb-3">
                Acesso exclusivo para administradores, pedagogos e assistentes sociais.
              </p>
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold transition-colors"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Entrar no Sistema</span>
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-900/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
            <p>© 2026 Associação Recanto Betel. Todos os direitos reservados.</p>
            <p className="mt-2 sm:mt-0 text-[11px]">Tatuí - SP • Brasil</p>
          </div>
        </div>
      </footer>

      {/* MODAL DE DOAÇÃO */}
      {showDonateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-md w-full p-6 text-xs animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <h3 className="text-base font-bold text-slate-900">Faça uma Doação</h3>
              </div>
              <button
                onClick={() => setShowDonateModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-slate-600 mb-4 leading-relaxed">
              Sua contribuição sustenta as refeições diárias, materiais pedagógicos, oficinas e
              atendimentos das crianças atendidas.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 mb-4">
              <p className="font-semibold text-slate-800 text-sm">Chave Pix (CNPJ):</p>
              <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-300">
                <code className="text-xs font-mono font-semibold text-blue-950">
                  00.123.456/0001-78
                </code>
                <button
                  onClick={handleCopyPix}
                  className="text-blue-900 hover:text-blue-700 p-1 flex items-center gap-1 font-semibold text-[11px]"
                >
                  <Copy className="w-3.5 h-3.5" /> Copiar
                </button>
              </div>
            </div>

            <div className="text-slate-600 space-y-1 mb-6">
              <p className="font-semibold text-slate-800">Dados Bancários:</p>
              <p>Banco do Brasil (001) • Agência: 0123-4 • Conta: 98765-4</p>
              <p>Favorecido: Associação Beneficente Recanto Betel</p>
            </div>

            <button
              onClick={() => {
                setShowDonateModal(false);
                showToast('Gratidão!', 'Muito obrigado pelo carinho e apoio à nossa causa!', 'success');
              }}
              className="w-full py-2.5 bg-[#101f36] hover:bg-[#182f52] text-white rounded-lg font-semibold transition-colors"
            >
              Concluir Doação
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
