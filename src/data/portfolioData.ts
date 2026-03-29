export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link?: string; // GitHub
  platformLink?: string; // Live Site
  isSaas?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "bora",
    title: "Bora (Micro-SaaS)",
    description: "Lembretes inteligentes integrados ao WhatsApp com IA e Cronjobs. Foco em remover o atrito da organização pessoal.",
    longDescription: "Em um mundo cheio de aplicativos complexos e notificações infinitas, o Bora nasceu de uma ideia simples: e se lembrar de algo fosse tão fácil quanto mandar uma mensagem? Criamos uma ferramenta que se integra à sua vida natural.",
    image: "/assets/img/bora.png",
    tags: ["React", "React Native", "Node.js", "NextJs", "Cronjobs", "WhatsApp API", "IA", "PWA"],
    link: "https://github.com/aledepaulaaa/bora",
    platformLink: "https://www.aplicativobora.com/"
  },
  {
    id: "iara",
    title: "IARA (PWA)",
    description: "Índice Para Autonomia, Renda e Autocuidado. Gestão financeira com foco em UX e acessibilidade.",
    longDescription: "Ferramenta de educação financeira desenhada para auxiliar contra a sobrecarga emocional e organizar finanças para o recomeço, com uma interface que espelha afeto.",
    image: "/assets/img/iara.png",
    tags: ["PWA", "React", "UX/UI", "NextJs", "Financeiro"],
    link: "https://github.com/aledepaulaaa/projetoiara",
    platformLink: "https://iaraapp.com.br/"
  },
  {
    id: "solida",
    title: "SOLIDA",
    description: "Portfólio/Site para perícias contábeis, financeiras, trabalhistas e grafotécnica no ambiente jurídico.",
    longDescription: "Suporte técnico e consultoria de alta qualidade para litígios. O sistema abrange análises e cálculos detalhados transformando dados complexos em informação clara.",
    image: "/assets/img/solida.png",
    tags: ["Sistemas B2B", "Auditoria", "Finanças", "WordPress"],
    platformLink: "https://solida.pro/"
  },
  {
    id: "biomeat",
    title: "Biomeat",
    description: "E-commerce de alimentação bio-apropriada, compatível com a fisiologia de cães e gatos.",
    longDescription: "Plataforma desenvolvida lado a lado com especialistas para distribuir produtos exclusivos formulados clinicamente. Foco no resgate da vida saudável ancestral.",
    image: "/assets/img/biomeat.png",
    tags: ["E-commerce", "Saúde Pet", "Plataforma Digital", "NextJs"],
    platformLink: "https://www.biomeat.com.br/"
  },
  {
    id: "rastrear-ja",
    title: "Rastrear Já",
    description: "Customização (White-label do Traccar) para monitoramento em tempo real de frotas e automotores.",
    longDescription: "Receba alertas instantâneos, bloqueie motores em casos de urgência. Ferramenta de rastreamento robusta para trazer segurança constante aos clientes.",
    image: "/assets/img/rastrearja.png",
    tags: ["Geolocalização", "Monitoramento", "React", "Traccar"],
    platformLink: "https://rastrearja.com/"
  },
  {
    id: "integrador-nf",
    title: "Integrador NF",
    description: "Automação fiscal para conciliações bancárias em fluxos financeiros complexos.",
    longDescription: "Eliminando trabalho manual, a ferramenta conecta notas fiscais emitidas a movimentações programáveis e processamentos assíncronos.",
    image: "/assets/img/integrador.png",
    tags: ["Backend", "Controle Fiscal", "Microsserviços", "NodeJs"],
    link: "https://github.com/aledepaulaaa/integrador_notas_fiscais"
  },
  {
    id: "saas-contabil",
    title: "SaaS de Contabilidade",
    description: "Sistema inovador para gestão contábil de escritórios (Em desenvolvimento).",
    longDescription: "Arquitetura clean permitindo que contadores automatizem rotinas, extraiam relatórios instantâneos e se conectem às prefeituras digitalmente.",
    image: "/assets/img/saas_contabil.png",
    tags: ["SaaS", "Contabilidade", "Automação B2B", "Spring Boot", "React"],
    link: "https://github.com/aledepaulaaa/projeto_contabil",
    isSaas: true,
  },
  {
    id: "aznegadaz",
    title: "E-commerce AZNEGADAZ",
    description: "Loja virtual moderna recentemente construída (Em finalização) com fluxos otimizados.",
    longDescription: "Plataforma construída para performance máxima, garantindo carregamentos de página sub-segundo e checkout liso que minimiza carrinhos abandonados.",
    image: "/assets/img/aznegadaz.png",
    tags: ["E-commerce B2C", "Performance", "Conversão", "NextJs"],
    link: "https://github.com/aledepaulaaa/aznegadaz",
    platformLink: "https://aznegadaz.vercel.app/"
  }
];
