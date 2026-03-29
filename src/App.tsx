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
    <div className="noise-bg min-h-screen bg-light-bg text-light-fg dark:bg-dark-bg dark:text-dark-fg flex flex-col font-sans transition-colors duration-500">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
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
