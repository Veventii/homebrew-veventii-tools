import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Veventii PVT LTD - Innovative Software Products',
  description: 'Building innovative software products that solve real problems and enhance productivity. Discover our diverse portfolio of tools and solutions.',
  metadataBase: new URL('https://veventii.com'),
  keywords: 'software, products, innovation, technology, productivity, tools, solutions, SaaS',
  authors: [{ name: 'Veventii PVT LTD' }],
  creator: 'Veventii PVT LTD',
  publisher: 'Veventii PVT LTD',
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
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://veventii.com',
    title: 'Veventii PVT LTD - Innovative Software Products',
    description: 'Building innovative software products that solve real problems and enhance productivity.',
    siteName: 'Veventii',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Veventii - Innovative Software Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veventii PVT LTD - Innovative Software Products',
    description: 'Building innovative software products that solve real problems and enhance productivity.',
    site: '@veventii',
    creator: '@veventii',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://veventii.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-96x96.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="Veventii" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-2JZ2MG77RP`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2JZ2MG77RP');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}