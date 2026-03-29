import { t } from "intlayer";

const heroContent = {
  key: "hero",
  content: {
    badge: t({
      pt: "Especialista em Engenharia de Software",
      en: "Software Engineering Specialist",
    }),
    title: {
      part1: t({
        pt: "Transformo Ideias em",
        en: "I Transform Ideas into",
      }),
      highlight: t({
        pt: "Sistemas Web",
        en: "Scalable Web Systems",
      }),
      part2: t({
        pt: "de Alta Performance.",
        en: "and High Performance.",
      }),
    },
    subtitle: t({
      pt: "Construindo soluções de alto impacto com foco em resultados reais.",
      en: "Building high-impact scalable solutions focused on real results.",
    }),
    ctaPrimary: t({
      pt: "Solicitar Orçamento",
      en: "Get a Quote",
    }),
    ctaSecondary: t({
      pt: "Ver Projetos",
      en: "View Projects",
    }),
  },
};

export default heroContent;
