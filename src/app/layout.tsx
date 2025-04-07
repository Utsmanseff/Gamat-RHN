import './globals.css';
import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
  title: 'Gamat RHN',
  description: 'Ramuan obat herbal dari tradisi Suku Dayak',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}