import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chris John | Full-Stack Developer & Mentor',
  description: 'Full-stack developer and frontend specialist with over 4 years of experience delivering secure, high-performance web applications.',
  keywords: 'developer, full-stack, frontend, React, Next.js, TypeScript, Node',
  authors: [{ name: 'Chris John' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    title: 'Chris John | Full-Stack Developer & Mentor',
    description: 'Full-stack developer and frontend specialist with over 4 years of experience delivering secure, high-performance web applications.',
    siteName: 'Chris John Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe | Full-Stack Developer & Mentor',
    description: 'Full-stack developer and frontend specialist with over 4 years of experience delivering secure, high-performance web applications.',
    creator: '@johndoe',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col items-center">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}