import { ThemeToggle } from '../ThemeToggle';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Languages } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../Button';
import { Logo } from '../Icons/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useIntlayer, useLocale } from 'react-intlayer';
import { Locales } from 'intlayer';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const { setLocale, locale } = useLocale();
  const intlayerContent = useIntlayer('header');
  const location = useLocation();
  const navigate = useNavigate();

  // Fallback e proteção contra erro de carregamento do Intlayer
  if (!intlayerContent) return null;
  const { navLinks, cta, role } = intlayerContent;
  
  // Ajuste do "encolhimento" para manter mais espaço em resoluções menores
  const headerWidth = useTransform(scrollY, [0, 100], ['100%', '96%']);
  const headerY = useTransform(scrollY, [0, 100], [0, 16]);

  const navigation = [
    { name: navLinks.inicio, href: '/', id: 'inicio' },
    { name: navLinks.sobre, href: '/sobre', id: 'sobre' },
    { name: navLinks.servicos, href: '/#services', id: 'servicos' },
    { name: navLinks.portfolio, href: '/#portfolio', id: 'portfolio' },
  ];

  const toggleLanguage = () => {
    setLocale(locale === Locales.PORTUGUESE ? Locales.ENGLISH : Locales.PORTUGUESE);
  };

  const handleScroll = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate(href);
      } else {
        const id = href.replace('/', '');
        const element = document.querySelector(id.startsWith('#') ? id : `#${id}`);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none px-2 sm:px-4">
      <motion.header 
        style={{ width: headerWidth, y: headerY }}
        className="pointer-events-auto h-auto min-h-[64px] md:min-h-[80px] py-2 md:py-4 glass md:rounded-full mt-0 md:mt-4 px-3 md:px-10 flex items-center justify-between transition-all duration-500 shadow-2xl shadow-black/5"
      >
        <Link 
          to="/"
          className="flex items-center gap-2 md:gap-4 cursor-pointer group shrink-0" 
        >
          <Logo className="w-7 h-7 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300 shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 leading-tight">
            <span className="text-xs md:text-xl font-bold bg-gradient-to-r from-dark-primary to-dark-accent bg-clip-text text-transparent italic tracking-tight whitespace-nowrap">
              Alexandre de Paula
            </span>
            <span className="hidden sm:block text-light-fg/40 dark:text-dark-fg/40 font-light">|</span>
            <span className="text-[7px] md:text-sm text-light-fg/60 dark:text-dark-fg/60 font-medium tracking-[0.1em] md:tracking-[0.2em] uppercase">
              {role}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 font-medium text-light-fg/80 dark:text-dark-fg/80">
          {navigation.map((link, index) => (
            link.href.startsWith('/#') ? (
              <button 
                key={`nav-xl-${index}`} 
                onClick={() => handleScroll(link.href)} 
                className="hover:text-dark-primary cursor-pointer transition-colors text-[10px] uppercase tracking-widest font-bold"
              >
                {link.name}
              </button>
            ) : (
              <Link 
                key={`nav-xl-${index}`} 
                to={link.href}
                className={`hover:text-dark-primary cursor-pointer transition-colors text-[10px] uppercase tracking-widest font-bold ${location.pathname === link.href ? 'text-dark-primary ring-2 ring-dark-primary/10 rounded-full px-3 py-1' : ''}`}
              >
                {link.name}
              </Link>
            )
          ))}
          
          <div className="h-4 w-px bg-white/10" />
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 hover:text-dark-accent cursor-pointer transition-colors text-[10px] font-bold uppercase tracking-widest"
            >
              <Languages size={12} />
              {locale === Locales.PORTUGUESE ? 'EN' : 'PT'}
            </button>

            <div className="cursor-pointer flex items-center">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            
            <Button variant="accent" onClick={() => handleScroll('/#contact')} className="!py-1.5 !px-4 text-[10px] uppercase tracking-widest font-bold rounded-full !cursor-pointer">
              {cta}
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle & Actions Group */}
        <div className="xl:hidden flex items-center gap-1.5 sm:gap-4">
          <div className="flex flex-col xs:flex-row items-center gap-0.5 sm:gap-3">
             <button onClick={toggleLanguage} className="text-[9px] font-bold cursor-pointer uppercase tracking-widest px-1 leading-none">
               {locale === Locales.PORTUGUESE ? 'EN' : 'PT'}
             </button>
             <div className="cursor-pointer flex items-center scale-50 sm:scale-100 -my-1">
               <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
             </div>
          </div>
          
          <button onClick={() => setIsOpen(!isOpen)} className="text-light-fg dark:text-dark-fg cursor-pointer p-1.5 ring-[0.5px] ring-white/10 rounded-lg hover:bg-white/5 transition-colors">
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.nav 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="xl:hidden fixed inset-x-4 sm:inset-x-6 top-24 pointer-events-auto glass rounded-3xl p-8 flex flex-col gap-6 shadow-2xl"
        >
          {navigation.map((link, index) => (
            <Link 
              key={`nav-mobile-${index}`} 
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-left hover:text-dark-primary cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="accent" onClick={() => { setIsOpen(false); handleScroll('/#contact'); }} fullWidth className="rounded-2xl py-4 font-bold uppercase tracking-widest !cursor-pointer">
            {cta}
          </Button>
        </motion.nav>
      )}
    </div>
  );
}
