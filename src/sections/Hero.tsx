import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowRight, Code2 } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';

export function Hero() {
  const content = useIntlayer('hero');
  
  // Fallback para evitar erro de desestruturação se o content vier indefinido temporariamente
  if (!content) return null;

  const { badge, title, subtitle, ctaPrimary, ctaSecondary } = content;

  const handleContact = () => {
    window.open('https://api.whatsapp.com/send?phone=5531983347898', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background blobs for premium feel */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dark-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-dark-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-dark-primary/10 text-dark-primary dark:text-dark-accent px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase border border-dark-primary/20 backdrop-blur-sm shadow-sm inline-flex items-center gap-2">
              <Code2 size={16} /> {badge}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            {title.part1} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-dark-primary to-dark-accent bg-clip-text text-transparent">{title.highlight}</span> <br className="hidden md:block"/>
            {title.part2}
          </h1>
          
          <p className="text-lg md:text-2xl mb-10 text-light-fg/70 dark:text-dark-fg/70 max-w-3xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" onClick={handleContact} className="w-full sm:w-auto text-lg px-8 py-4 group rounded-full font-bold uppercase tracking-widest !cursor-pointer">
              {ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto text-lg px-8 py-4 rounded-full font-bold uppercase tracking-widest !cursor-pointer">
              {ctaSecondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
