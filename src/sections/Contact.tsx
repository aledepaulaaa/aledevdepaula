import { motion } from 'framer-motion';
import { useIntlayer } from 'react-intlayer';
import { Mail, MessageSquare } from 'lucide-react';
import { Card } from '../components/Card';

export function Contact() {
  const content = useIntlayer('contact');
  if (!content) return null;
  const { title, subtitle, whatsapp, email } = content;

  return (
    <section id="contact" className="py-24 bg-light-bg/50 dark:bg-dark-bg/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h2>
          <p className="text-xl text-light-fg/70 dark:text-dark-fg/70 font-light">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.a 
            href="https://api.whatsapp.com/send?phone=5531983347898"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cursor-pointer"
          >
            <Card className="p-8 flex items-center gap-6 hover:border-emerald-500/50 hover:shadow-emerald-500/10 transition-colors h-full rounded-3xl !cursor-pointer">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{whatsapp}</h3>
                <p className="text-light-fg/70 dark:text-dark-fg/70 text-lg tracking-wide">(31) 98334-7898</p>
              </div>
            </Card>
          </motion.a>

          <motion.a 
            href="mailto:contatoaledev@gmail.com"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cursor-pointer"
          >
            <Card className="p-8 flex items-center gap-6 hover:border-dark-primary/50 hover:shadow-dark-primary/10 transition-colors h-full rounded-3xl !cursor-pointer">
              <div className="w-16 h-16 bg-dark-primary/10 rounded-full flex items-center justify-center text-dark-primary">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{email}</h3>
                <p className="text-light-fg/70 dark:text-dark-fg/70 text-lg tracking-wide">contatoaledev@gmail.com</p>
              </div>
            </Card>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
