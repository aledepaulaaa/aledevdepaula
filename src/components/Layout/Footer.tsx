import { motion } from 'framer-motion';
import { Logo } from '../Icons/Logo';
import { Github } from '../Icons/Github';
import { Linkedin } from '../Icons/Linkedin';
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntlayer } from 'react-intlayer';

export function Footer() {
  const content = useIntlayer('footer');
  if (!content) return null;
  const { rights, sections, brand, tagline, backToTop, links } = content;

  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-px bg-gradient-to-r from-transparent via-dark-primary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-4 group cursor-pointer">
              <Logo className="w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight">{brand}</h3>
                <p className="text-white/40 text-[10px] font-medium uppercase tracking-[0.3em]">{tagline}</p>
              </div>
            </Link>

            <div className="flex gap-4">
              <a href="https://github.com/aledepaulaaa" target="_blank" className="p-3 glass rounded-xl hover:text-dark-primary transition-colors cursor-pointer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aledepaulaa/" target="_blank" className="p-3 glass rounded-xl hover:text-dark-primary transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5531983347898" target="_blank" className="p-3 glass rounded-xl hover:text-dark-primary transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase text-xs tracking-[0.3em] text-white/30">{sections.navigation}</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/60 hover:text-white transition-colors cursor-pointer">{links.home}</Link></li>
              <li><Link to="/sobre" className="text-white/60 hover:text-white transition-colors cursor-pointer">{links.about}</Link></li>
              <li><a href="/#portfolio" className="text-white/60 hover:text-white transition-colors cursor-pointer">{links.portfolio}</a></li>
              <li><a href="/#services" className="text-white/60 hover:text-white transition-colors cursor-pointer">{links.services}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6 text-right md:text-left">
            <h4 className="font-bold uppercase text-xs tracking-[0.3em] text-white/30">{sections.contact}</h4>
            <div className="space-y-4">
              <a href="mailto:contatoaledev@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group justify-end md:justify-start outline-none cursor-pointer">
                <Mail size={16} />
                contatoaledev@gmail.com
              </a>
              <p className="text-white/60 tracking-wider font-light">+55 31 98334-7898</p>
            </div>
          </div>
        </div>

        {/* Huge Logo Section */}
        <div className="border-t border-white/5 pt-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            className="mb-12 pointer-events-none select-none"
          >
            <Logo className="w-64 h-64 grayscale" />
          </motion.div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-sm">
            <p className="font-light tracking-wide">© {year} {rights}</p>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px] cursor-pointer"
            >
              {backToTop}
              <div className="p-3 glass rounded-full group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
