import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TranslationProvider } from './TranslationProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextGens Inc.',
  description: 'Creating equal opportunities, empowering the next generation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}