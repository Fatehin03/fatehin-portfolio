import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/lib/site-data';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';
import { ScrollRevealProvider } from '@/components/scroll-reveal-provider';
import { ScrollProgress } from '@/components/scroll-progress';
import { NoiseOverlay } from '@/components/noise-overlay';
import '@/styles/globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Fatehin Alam',
    'Full Stack Developer',
    'AI Researcher',
    'Cybersecurity Enthusiast',
    'UAV Security Researcher',
    'Next.js Portfolio',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    url: '/',
    title: site.name,
    description: site.description,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Fatehin Alam premium portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="relative min-h-screen overflow-x-hidden bg-ink-950 text-white antialiased">
        <NoiseOverlay />
        <SmoothScrollProvider>
          <ScrollRevealProvider>
            <ScrollProgress />
            {children}
          </ScrollRevealProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
