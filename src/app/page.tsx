'use client';

import React, { useState } from 'react';
import { Header } from '@/components/home/Header';
import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { About } from '@/components/home/About';
import { Timeline } from '@/components/home/Timeline';
import { MissionVisionValues } from '@/components/home/MissionVisionValues';
import { Services } from '@/components/home/Services';
import { FiftyYearsHighlight } from '@/components/home/FiftyYearsHighlight';
import { Gallery } from '@/components/home/Gallery';
import { CertificationsAndPartners } from '@/components/home/CertificationsAndPartners';
import { Transparency } from '@/components/home/Transparency';
import { News } from '@/components/home/News';
import { Contact } from '@/components/home/Contact';
import { Footer } from '@/components/home/Footer';
import { DonateModal } from '@/components/home/DonateModal';

export default function HomePage() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbff] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* 1. Header Institucional */}
      <Header onOpenDonate={() => setDonateModalOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero Principal com Foto Real 16:9 */}
        <Hero onOpenDonate={() => setDonateModalOpen(true)} />

        {/* 3. Indicadores e Números Reais (50 anos, 1976, 2.5M+, 6-15 anos) */}
        <Stats />

        {/* 4. Quem Somos (História de fundação em 1976 pela Pastora Aline) */}
        <About />

        {/* 5. Linha do Tempo (Marcos Históricos) */}
        <Timeline />

        {/* 6. Missão, Visão e Valores */}
        <MissionVisionValues />

        {/* 7. Nosso Trabalho: Serviços e Ações (SCFV, Pedagógico, Samaritano, etc.) */}
        <Services />

        {/* 8. Destaque Especial Comemorativo dos 50 Anos */}
        <FiftyYearsHighlight onOpenDonate={() => setDonateModalOpen(true)} />

        {/* 9. Nosso Dia a Dia / Recanto em Ação (Galeria de Fotos Reais) */}
        <Gallery />

        {/* 10. Certificações, Regularidade e Parceiros Oficiais */}
        <CertificationsAndPartners />

        {/* 11. Transparência e Prestação de Contas */}
        <Transparency />

        {/* 12. Notícias e Atividades Institucionais */}
        <News />

        {/* 13. Contato com Endereço Real e Formulário Transparente */}
        <Contact />
      </main>

      {/* 14. Rodapé Institucional Reestruturado */}
      <Footer />

      {/* 15. Modal de Doação com Chave Pix CNPJ Real */}
      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />
    </div>
  );
}
