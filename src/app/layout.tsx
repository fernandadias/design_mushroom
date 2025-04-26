import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RootLayout from '@/components/layout/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Design Mushroom - Agentes de IA',
  description: 'Plataforma SaaS de agentes de IA para designers',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
