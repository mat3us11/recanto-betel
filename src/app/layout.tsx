import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/ui/ToastContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Associação Recanto Betel | Gestão Institucional',
  description: 'Sistema administrativo e institucional da Associação Recanto Betel em Tatuí-SP. Cuidando de vidas, construindo futuros.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
