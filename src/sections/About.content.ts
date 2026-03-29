import { t } from "intlayer";

const aboutContent = {
  key: "about",
  content: {
    title: t({
      pt: "Sobre Mim",
      en: "About Me",
    }),
    intro: t({
      pt: "Engenheiro de Software & Consultor",
      en: "Software Engineer & Consultant",
    }),
    description: t({
      pt: "Com mais de 3 anos de atuação no mercado, transformo desafios complexos em ecossistemas digitais de alta performance. Minha jornada como freelancer e consultor me permitiu visualizar necessidades específicas de mercado, focando desde o pequeno comerciante até arquiteturas de larga escala.",
      en: "With over 3 years of market experience, I transform complex challenges into high-performance digital ecosystems. My journey as a freelancer and consultant has allowed me to visualize specific market needs, focusing from small merchants to large-scale architectures.",
    }),
    vision: t({
      pt: "Hoje, além de consultoria, busco empreender com ideias próprias, criando soluções que resolvem dores reais de forma escalável e intuitiva.",
      en: "Today, besides consulting, I seek to entrepreneur with my own ideas, creating solutions that solve real pains in a scalable and intuitive way.",
    }),
    experience: t({
      pt: "3+ Anos de Experiência",
      en: "3+ Years of Experience",
    }),
    educationTitle: t({
      pt: "Formação & Certificações",
      en: "Education & Certifications",
    }),
    courseTitle: t({
      pt: "Cursos & Certificações",
      en: "Courses & Certifications",
    }),
    degree: t({
      pt: "Análise e Desenvolvimento de Sistemas (UNOPAR)",
      en: "Systems Analysis and Development (UNOPAR)",
    }),
    degreeStatus: t({
      pt: "Concluindo (Último Semestre)",
      en: "In conclusion (Last Semester)",
    }),
    // Voltando para uma estrutura simples para evitar bugs de Proxy do Intlayer em campos aninhados
    courses: {
      node: t({ pt: "Node.js Developer (Udemy)", en: "Node.js Developer (Udemy)" }),
      nest: t({ pt: "APIs Modernas com NestJS (Udemy)", en: "Modern APIs with NestJS (Udemy)" }),
      java: t({ pt: "Java + Spring Boot (Udemy)", en: "Java + Spring Boot (Udemy)" }),
      uiux: t({ pt: "UI/UX Design e Web (Udemy)", en: "UI/UX Design and Web (Udemy)" }),
    }
  }
};

export default aboutContent;
