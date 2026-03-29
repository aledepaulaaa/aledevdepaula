import { MonitorSmartphone, LayoutGrid, Workflow, ShoppingCart } from 'lucide-react';
import { ElementType } from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-systems",
    title: "Sistemas Web Personalizados",
    description: "Desenvolvimento de ecossistemas robustos voltados para B2B utilizando NestJS, React e Next.js.",
    icon: LayoutGrid,
  },
  {
    id: "ecommerce",
    title: "E-commerce & Pagamentos",
    description: "Lojas virtuais com integração contínua das gateways Stripe e Asaas. Pagamento transparente e seguro.",
    icon: ShoppingCart,
  },
  {
    id: "process-automation",
    title: "Automação de Processos",
    description: "Integração segura com APIs de terceiros, Ex: (Conta Azul) e Notas Fiscais, reduzindo custos operacionais de equipes.",
    icon: Workflow,
  },
  {
    id: "mobile-apps",
    title: "Aplicativos Mobile",
    description: "Desenvolvimento híbrido focado em UX excepcional usando React Native e Expo.",
    icon: MonitorSmartphone,
  }
];
