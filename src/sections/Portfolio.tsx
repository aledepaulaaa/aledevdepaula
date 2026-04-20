import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Github } from '../components/Icons/Github';
import { ExternalLink } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';

interface ProjectLinkInfo {
  id: string;
  image: string;
  link?: string;
  platformLink?: string;
  isSaas: boolean;
  isDevelopment?: boolean;
}

const projectsLinks: ProjectLinkInfo[] = [
  {
    id: 'biomeat',
    image: '/assets/img/biomeat.png',
    isSaas: false
  },
  {
    id: 'bora',
    image: '/assets/img/bora.png',
    link: 'https://github.com/aledepaulaaa/bora',
    isSaas: true
  },
  {
    id: 'rastrearja',
    image: '/assets/img/rastrearja.png',
    platformLink: 'https://rastrearja.com/',
    isSaas: false
  },
  {
    id: 'iara',
    image: '/assets/img/iara.png',
    link: 'https://github.com/aledepaulaaa/projetoiara',
    isSaas: false
  },
  {
    id: 'solida',
    image: '/assets/img/solida.png',
    platformLink: 'https://solida.pro/',
    isSaas: false
  },
  {
    id: 'aznegadaz',
    image: '/assets/img/aznegadaz.png',
    link: 'https://github.com/aledepaulaaa/aznegadaz',
    isSaas: false,
    isDevelopment: true
  },
  {
    id: 'integrador',
    image: '/assets/img/integrador.png',
    link: 'https://github.com/aledepaulaaa/integrador_notas_fiscais',
    isSaas: false
  },
  {
    id: 'saas_contabil',
    image: '/assets/img/saas_contabil.png',
    link: 'https://github.com/aledepaulaaa/projeto_contabil',
    isSaas: true,
    isDevelopment: true
  }
];

export function Portfolio() {
  const content = useIntlayer('portfolio');
  if (!content) return null;
  const { title, viewGithub, viewPlatform, saasLabel, projects, developmentLabel } = content;

  return (
    <section id="portfolio" className="py-24 bg-light-bg/50 dark:bg-dark-bg/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">{title}</h2>
          <div className="w-20 h-1 bg-dark-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => {
            const links = projectsLinks[index];
            const uniqueKey = `portfolio-project-${index}`;

            return (
              <motion.div
                key={uniqueKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-[#111111] rounded-3xl overflow-hidden border border-white/5 shadow-2xl hover:shadow-dark-primary/10 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={links?.image || '/assets/img/saas_contabil.png'}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = '/assets/img/saas_contabil.png' }}
                  />

                  {/* Container para múltiplas flags */}
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                    {links?.isSaas && (
                      <div className="bg-[#1A1A1A]/90 backdrop-blur-md text-[#28D2F8] px-3 py-1 rounded-full text-[10px] font-bold shadow-lg border border-[#28D2F8]/30 uppercase tracking-widest whitespace-nowrap">
                        {saasLabel}
                      </div>
                    )}
                    {links?.isDevelopment && (
                      <div className="bg-[#1A1A1A]/90 backdrop-blur-md text-dark-primary px-3 py-1 rounded-full text-[10px] font-bold shadow-lg border border-dark-primary/30 uppercase tracking-widest whitespace-nowrap">
                        {developmentLabel}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: any, idx: number) => (
                      <span key={`project-${index}-tag-${idx}`} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-dark-primary/10 text-dark-primary rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-dark-primary transition-colors">{project.title}</h3>
                  <p className="text-light-fg/70 dark:text-dark-fg/70 mb-8 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {links?.link && (
                      <Button variant="outline" onClick={() => window.open(links.link, '_blank')} className="flex items-center gap-2 glass !border-white/10 hover:!border-white/30 !py-2 !px-4 text-[10px] font-bold uppercase tracking-widest !cursor-pointer">
                        <Github className="w-4 h-4" />
                        {viewGithub}
                      </Button>
                    )}
                    {links?.platformLink && (
                      <Button variant="primary" onClick={() => window.open(links.platformLink, '_blank')} className="flex items-center gap-2 !py-2 !px-4 text-[10px] font-bold uppercase tracking-widest !cursor-pointer">
                        <ExternalLink className="w-4 h-4" />
                        {viewPlatform}
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
