import { useTheme } from './hooks/useTheme';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import { Contact } from './sections/Contact';
import { About } from './sections/About';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="noise-bg min-h-screen bg-light-bg text-light-fg dark:bg-dark-bg dark:text-dark-fg flex flex-col font-sans transition-colors duration-500 relative overflow-hidden">
      {/* Luzes de Fundo (Background Glows) que circulam constantemente */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-dark-primary/15 rounded-full blur-[140px] animate-movement opacity-50 dark:opacity-30" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-dark-accent/15 rounded-full blur-[140px] animate-movement-alt opacity-50 dark:opacity-30" />
      </div>

      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
