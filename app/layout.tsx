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
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
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
