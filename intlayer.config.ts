import { type IntlayerConfig, Locales } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.PORTUGUESE],
    defaultLocale: Locales.PORTUGUESE,
  },
};

export default config;
