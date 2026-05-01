import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Evenzs.com | The Future of Event Execution',
  description:
    'Evenzs is speaking with event professionals across the USA to better understand operational challenges behind modern events.',
  keywords: [
    'event planning',
    'event operations',
    'event management software',
    'wedding planning',
    'corporate events',
    'venue operations',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Evenzs.com | The Future of Event Execution',
    description:
      'Evenzs is speaking with event professionals across the USA to better understand operational challenges behind modern events.',
    type: 'website',
    url: 'https://evenzs.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evenzs.com | The Future of Event Execution',
    description:
      'Evenzs is speaking with event professionals across the USA to better understand operational challenges behind modern events.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
