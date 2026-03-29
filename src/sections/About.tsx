import { motion } from 'framer-motion';
import { useIntlayer } from 'react-intlayer';
import { Mail, MessageCircle, GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';

// Links mantidos fora do dicionário Intlayer para evitar o bug de conversão [object Object]
const certificateLinks: Record<string, string> = {
  node: "https://www.udemy.com/certificate/UC-1be63e12-bdc7-4e5a-974c-ee8c3c46e4cb/",
  nest: "https://www.udemy.com/certificate/UC-e80c7a14-4d29-4e43-bb48-e75368f85f79/",
  java: "https://www.udemy.com/certificate/UC-41b654de-6f44-4993-8984-9a3dfa9f3e02/",
};

export function About() {
  const content = useIntlayer('about');
  if (!content) return null;
  const { title, intro, description, vision, experience, educationTitle, courseTitle, degree, degreeStatus, courses } = content;

  const skills = [
    { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Java'] },
    { category: 'Frameworks', items: ['NestJS', 'Spring Boot', 'React', 'Next.js', 'React Native'] },
    { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'RabbitMQ', 'Google Cloud', 'Firebase'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] }
  ];

  const handleContact = (type: 'wa' | 'mail') => {
    if (type === 'wa') window.open('https://api.whatsapp.com/send?phone=5531983347898', '_blank');
    else window.location.href = 'mailto:contatoaledev@gmail.com';
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dark-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-dark-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-dark-primary to-dark-accent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-light-bg dark:bg-dark-bg rounded-3xl overflow-hidden border border-white/10 aspect-[3/4]">
                <img 
                  src="/assets/img/ale.jpeg" 
                  alt="Alexandre de Paula" 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="glass p-6 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-dark-primary/10 rounded-xl">
                  <Award className="text-dark-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold uppercase tracking-tighter">{experience}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col gap-4">
              <Button variant="primary" onClick={() => handleContact('wa')} className="w-full justify-center gap-2 !cursor-pointer">
                <MessageCircle size={20} /> WhatsApp
              </Button>
              <Button variant="outline" onClick={() => handleContact('mail')} className="w-full justify-center gap-2 !cursor-pointer">
                <Mail size={20} /> Email
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 w-full"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <h2 className="text-xl md:text-2xl text-dark-primary font-medium mb-8 uppercase tracking-widest leading-relaxed">
               {intro}
            </h2>
            
            <div className="space-y-6 text-lg text-light-fg/80 dark:text-dark-fg/80 leading-relaxed font-light mb-12">
              <p>{description}</p>
              <p>{vision}</p>
            </div>

            {/* Education Section */}
            <div className="mt-16 space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <GraduationCap className="text-dark-accent" />
                {educationTitle}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-3xl border-l-4 border-dark-primary">
                  <h4 className="font-bold text-lg mb-2">{degree}</h4>
                  <p className="text-sm text-dark-primary font-bold uppercase tracking-widest">{degreeStatus}</p>
                </div>
                
                <div className="glass p-6 rounded-3xl border-l-4 border-dark-accent space-y-3">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <BookOpen size={18} />
                    {courseTitle}
                  </h4>
                  <ul className="space-y-2 text-sm text-light-fg/70 dark:text-dark-fg/70">
                    {courses && Object.entries(courses).map(([key, courseName]: [string, any]) => {
                      // O nome do curso é um nó do Intlayer e precisa de conversão segura
                      const rawName = (typeof courseName === 'string') ? courseName : (courseName?.valueOf?.() || courseName?.toString?.() || "");
                      
                      const url = certificateLinks[key];
                      const hasLink = !!url;
                      
                      return (
                        <li key={key} className="flex items-center gap-2 group">
                          <span className="text-dark-accent">•</span>
                          {hasLink ? (
                            <a 
                              href={url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hover:text-dark-primary transition-colors flex items-center gap-2 !cursor-pointer group-hover:translate-x-1 duration-300"
                            >
                              {rawName}
                              <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
                            </a>
                          ) : (
                            <span>{rawName}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.category} className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Award size={18} className="text-dark-accent" />
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs md:text-md font-medium uppercase tracking-widest">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
