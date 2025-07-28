// app/layout.tsx
import './styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Admybrand Landing',
  description: 'A modern landing page for Admybrand',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className}`}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
