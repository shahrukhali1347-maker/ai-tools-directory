import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import { generateWebsiteSchema, generateOrganizationSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/config/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const defaultDescription = 'Discover, compare, and choose from 2000+ AI tools across 50+ categories. Find the perfect AI solution with detailed reviews and guides.';

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - Discover the Best AI Tools`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: defaultDescription,
  keywords: ['AI tools', 'artificial intelligence', 'machine learning', 'ChatGPT', 'Midjourney', 'AI directory', 'AI software', 'best AI tools'],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - Discover the Best AI Tools`,
    description: defaultDescription,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - AI tools discovery platform`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aitoolshub',
    creator: '@aitoolshub',
    title: `${SITE_CONFIG.name} - Discover the Best AI Tools`,
    description: defaultDescription,
    images: {
      url: SITE_CONFIG.ogImage,
      alt: `${SITE_CONFIG.name} - AI tools discovery platform`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'theme-color': '#7c3aed',
    'apple-mobile-web-app-title': SITE_CONFIG.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
        <link rel="dns-prefetch" href="https://logo.clearbit.com" />
        <StructuredData data={generateWebsiteSchema()} />
        <StructuredData data={generateOrganizationSchema()} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
