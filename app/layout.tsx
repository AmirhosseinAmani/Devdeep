import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amirhossein Amani | Frontend Developer',
  description: 'Creative Frontend Developer & Computer Engineering Student based in Istanbul, Turkey.',
  keywords: 'frontend developer, web developer, portfolio, nextjs, react',
  openGraph: {
    title: 'Amirhossein Amani | Frontend Developer',
    description: 'Creative Frontend Developer & Computer Engineering Student based in Istanbul, Turkey.',
    url: 'https://devdeep.site',
    siteName: 'Devdeep',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Devdeep Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}