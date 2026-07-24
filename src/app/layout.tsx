import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { portfolioData } from '@/data/portfolioData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
  description: portfolioData.personal.bioSummary,
  keywords: [
    'Backend Engineer',
    'Software Engineer',
    'FastAPI',
    'Python',
    'REST APIs',
    'PostgreSQL',
    'MongoDB',
    'Prashant Sharma',
    'Portfolio',
  ],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prashantsharma.dev',
    title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
    description: portfolioData.personal.bioSummary,
    siteName: `${portfolioData.personal.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
    description: portfolioData.personal.bioSummary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 min-h-screen flex flex-col selection:bg-neutral-200 dark:selection:bg-neutral-800`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
