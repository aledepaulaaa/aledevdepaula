import { t } from "intlayer";

const headerContent = {
  key: "header",
  content: {
    navLinks: {
      inicio: t({ pt: "Início", en: "Home" }),
      sobre: t({ pt: "Sobre", en: "About" }),
      servicos: t({ pt: "Serviços", en: "Services" }),
      portfolio: t({ pt: "Portfólio", en: "Portfolio" }),
    },
    cta: t({
      pt: "Falar Comigo",
      en: "Start a project",
    }),
    role: t({
      pt: "Engenheiro de Software",
      en: "Software Engineer",
    }),
  },
};

export default headerContent;
