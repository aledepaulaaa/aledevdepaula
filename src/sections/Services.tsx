import { motion } from 'framer-motion';
import { useIntlayer } from 'react-intlayer';
import { Card } from '../components/Card';
import { MonitorSmartphone, LayoutGrid, Workflow, ShoppingCart } from 'lucide-react';

const iconMap: Record<string, any> = {
  "0": LayoutGrid,
  "1": ShoppingCart,
  "2": Workflow,
  "3": MonitorSmartphone,
};

export function Services() {
  const content = useIntlayer('services');
  if (!content) return null;
  const { title, subtitle, items } = content;

  return (
    <section id="services" className="py-24 bg-light-bg/50 dark:bg-dark-bg/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-light-fg/70 dark:text-dark-fg/70 font-light"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item: any, index: number) => {
            const Icon = iconMap[String(index)] || LayoutGrid;
            return (
              <Card key={`service-${index}`} delay={index * 0.1} className="p-8 group hover:-translate-y-2 transition-transform duration-300 rounded-3xl">
                <div className="w-14 h-14 bg-dark-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-dark-primary dark:text-dark-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-light-fg/70 dark:text-dark-fg/70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
