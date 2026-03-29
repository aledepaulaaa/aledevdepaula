import { t } from "intlayer";

const servicesContent = {
  key: "services",
  content: {
    title: t({
      pt: "Soluções para o seu Negócio",
      en: "Solutions for your Business",
    }),
    subtitle: t({
      pt: "Ajudando empresas a faturar mais e otimizar tempo operando com tecnologia de ponta e sistemas modulares de alta cobertura.",
      en: "Helping companies increase revenue and optimize time operating with cutting-edge technology and high-coverage modular systems.",
    }),
    items: [
      {
        id: "web-systems",
        title: t({ pt: "Sistemas Web Personalizados", en: "Custom Web Systems" }),
        description: t({
          pt: "Desenvolvimento de ecossistemas robustos voltados para B2B utilizando NestJS, React, Java + Spring Boot, Next.js entre outros.",
          en: "Development of robust ecosystems focused on B2B using NestJS, React, Java + Spring Boot, Next.js and others."
        }),
      },
      {
        id: "ecommerce",
        title: t({ pt: "E-commerce & Pagamentos", en: "E-commerce & Payments" }),
        description: t({
          pt: "Lojas virtuais com integração contínua das gateways Stripe, Asaas entre outras. Pagamento transparente e seguro.",
          en: "Virtual stores with continuous integration of Stripe, Asaas and others. Transparent and secure payment."
        }),
      },
      {
        id: "process-automation",
        title: t({ pt: "Automação de Processos", en: "Process Automation" }),
        description: t({
          pt: "Integração segura com APIs de terceiros, reduzindo custos operacionais de equipes.",
          en: "Secure integration with third-party APIs, reducing operational costs for teams."
        }),
      },
      {
        id: "mobile-apps",
        title: t({ pt: "Aplicativos Mobile", en: "Mobile Applications" }),
        description: t({
          pt: "Desenvolvimento híbrido focado em UX excepcional usando React Native e Expo.",
          en: "Hybrid development focused on exceptional UX using React Native and Expo."
        }),
      }
    ]
  }
};

export default servicesContent;
