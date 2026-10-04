import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/ui/ToastContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Associação Recanto Betel | Tatuí – SP',
  description: 'Há 50 anos promovendo proteção social, convivência e fortalecimento de vínculos para crianças e adolescentes em Tatuí.',
  icons: {
    icon: '/images/logo-recanto-betel-50-anos.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="min-h-screen bg-[#fafbff] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
