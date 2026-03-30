import { t } from "intlayer";

const portfolioContent = {
  key: "portfolio",
  content: {
    title: t({
      pt: "Projetos & Cases",
      en: "Projects & Cases",
    }),
    viewGithub: t({
      pt: "Ver no GitHub",
      en: "View on GitHub",
    }),
    viewPlatform: t({
      pt: "Visitar Plataforma",
      en: "Visit Platform",
    }),
    saasLabel: t({
      pt: "Caso SaaS",
      en: "SaaS Case",
    }),
    developmentLabel: t({
      pt: "Em Desenvolvimento",
      en: "In Development",
    }),
    projects: [
      {
        id: "biomeat",
        title: "Biomeat",
        description: t({
          pt: "Plataforma e-commerce especializada em alimentação natural para pets, com integração de pagamentos e gestão de assinaturas.",
          en: "E-commerce platform specialized in natural pet food, with payment integration and subscription management."
        }),
        tags: ["E-commerce", "Stripe", "NextJS", "Stripe", "PostgreSQL"],
      },
      {
        id: "bora",
        title: "Bora (Micro-SaaS)",
        description: t({
          pt: "Lembretes inteligentes integrados ao WhatsApp com IA e Cronjobs. Foco em remover o atrito da organização pessoal.",
          en: "Smart reminders integrated with WhatsApp using AI and Cronjobs. Focused on removing friction from personal organization."
        }),
        tags: ["React", "React Native", "Node.js", "NextJs", "Cronjobs", "WhatsApp API", "IA", "PWA"],
      },
      {
        id: "rastrearja",
        title: "Rastrear Já",
        description: t({
          pt: "Sistema de monitoramento em tempo real com alertas instantâneos, bloqueio de motor e relatórios detalhados.",
          en: "Real-time monitoring system with instant alerts, engine blocking, and detailed reports."
        }),
        tags: ["Real-time", "IoT", "React", "NodeJS", "Google Cloud"],
      },
      {
        id: "iara",
        title: "IARA (PWA)",
        description: t({
          pt: "Índice Para Autonomia, Renda e Autocuidado. Gestão financeira com foco em UX e acessibilidade para o público feminino.",
          en: "Index for Autonomy, Income, and Self-care. Financial management focused on UX and accessibility for a female audience."
        }),
        tags: ["PWA", "React", "UX/UI", "NextJS", "Financeiro"],
      },
      {
        id: "solida",
        title: "Sólida",
        description: t({
          pt: "Plataforma de perícias contábeis e financeiras com alta precisão e suporte técnico especializado.",
          en: "Accounting and financial expertise platform with high precision and specialized technical support."
        }),
        tags: ["WordPress", "PHP", "MySQL"],
      },
      {
        id: "aznegadaz",
        title: "AZNEGADAZ",
        description: t({
          pt: "E-commerce de moda com sistema de estoque inteligente e checkout otimizado.",
          en: "Fashion e-commerce with intelligent stock system and optimized checkout."
        }),
        tags: ["E-commerce", "React", "Firebase", "NextJs"],
      },
      {
        id: "integrador",
        title: "Integrador NF",
        description: t({
          pt: "Automação de conciliação bancária e fiscal entre Conta Azul e sistemas externos.",
          en: "Accounting and fiscal reconciliation automation between Conta Azul and external systems."
        }),
        tags: ["Automation", "NodeJS", "APIs REST"],
      },
      {
        id: "saas_contabil",
        title: "SaaS Contábil",
        description: t({
          pt: "Plataforma de gestão contábil com foco em automação de processos e integração com sistemas externos.",
          en: "Accounting management platform focused on process automation and integration with external systems."
        }),
        tags: ["SaaS", "Vite", "React", "Java + Spring Boot", "Automation", "PostgreSQL"],
      }
    ]
  }
};

export default portfolioContent;
