import i18nConfig from '@/i18n-config.json';

enum Colors {
  White = '#FFFFFF',
  Black = '#000000',
  DarkPrimary = '#111530',
  DarkSecondary = '#0F122B',
  DarkBtn = '#1E2556',
}

export default {
  colors: Colors,
  padding: {
    page: '30px 85px',
    section: '85px',
  },
  languages: i18nConfig.locales,
};
