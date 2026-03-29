import { t } from "intlayer";

const footerContent = {
  key: "footer",
  content: {
    brand: t({
      pt: "Alexandre de Paula | Engenheiro de Software",
      en: "Alexandre de Paula | Software Engineer",
    }),
    tagline: t({
      pt: "Excelência em Engenharia",
      en: "Engineering Excellence",
    }),
    rights: t({
      pt: "Alexandre de Paula. Todos os direitos reservados.",
      en: "Alexandre de Paula. All rights reserved.",
    }),
    backToTop: t({
      pt: "Voltar ao topo",
      en: "Back to top",
    }),
    sections: {
      navigation: t({ pt: "Navegação", en: "Navigation" }),
      social: t({ pt: "Social", en: "Social" }),
      contact: t({ pt: "Contato", en: "Contact" }),
    },
    links: {
      home: t({ pt: "Início", en: "Home" }),
      about: t({ pt: "Sobre", en: "About" }),
      services: t({ pt: "Serviços", en: "Services" }),
      portfolio: t({ pt: "Portfólio", en: "Portfolio" }),
    }
  }
};

export default footerContent;
