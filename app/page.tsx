'use client';

import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./components/ThemeToggle'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div style={{ 
        position: 'fixed', 
        top: '2rem', 
        right: '2rem',
        zIndex: 1000 
      }}>
        <ThemeToggle />
      </div>
      
      <div className="container">
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <h1>Phase 1 Complete</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.25rem' }}>
              Next.js portfolio site with TypeScript, ESLint, and theme system.
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--secondary)' }}>
              Try the theme toggle in the top right corner!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
