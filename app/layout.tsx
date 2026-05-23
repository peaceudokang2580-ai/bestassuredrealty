import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Best Assured Realty | Luxury Real Estate',
  description: 'Premium properties for ultra-luxury buyers, investors & middle-class.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}