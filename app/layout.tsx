import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import AnimatedBackground from './components/AnimatedBackground';

export const metadata: Metadata = {
  title: 'Portfolio | Software Engineer',
  description: 'Professional portfolio of a full-stack and data-focused software engineer specializing in modern web technologies and data-driven solutions',
  keywords: ['software engineer', 'full-stack developer', 'web development', 'React', 'Next.js', 'TypeScript', 'portfolio'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Portfolio | Software Engineer',
    description: 'Professional portfolio showcasing full-stack development projects and technical expertise',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Software Engineer',
    description: 'Professional portfolio showcasing full-stack development projects and technical expertise',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <AnimatedBackground />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
