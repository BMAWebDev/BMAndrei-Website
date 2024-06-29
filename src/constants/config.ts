import i18nConfig from '@/i18n-config.json';

enum Colors {
  White = '#FFFFFF',
  Black = '#000000',
  DarkPrimary = '#111530',
  DarkSecondary = '#0F122B',
  DarkThird = '#1E2556',
  LightBlue = '#00F0FF',
  Red = '#E53E00',
}

enum Routes {
  Homepage = '/',
  About = '/about',
  Contact = '/contact',
  GDPR = '/gdpr',
  CV = '/CV-Bardita-Andrei.pdf',
}

enum Breakpoints {
  XSmall = 400,
  Small = 575,
  Medium = 768,
  Large = 992,
  XLarge = 1200,
  XXLarge = 1400,
}

const dateOfExperienceStart = new Date('25 Aug 2020');

export default {
  colors: Colors,
  padding: {
    page: '30px 85px',
    section: '85px',
    sectionValue: 85,
  },
  text: {
    normal: {
      size: 40,
    },
    title: {
      size: 64,
    },
    subtitle: {
      size: 48,
    },
  },
  borderRadius: {
    normal: '25px',
    button: '25px',
    input: '8px',
  },
  fontFamily: 'K2D',
  languages: i18nConfig.locales,
  routes: Routes,
  maxWidth: 1920,
  breakpoints: Breakpoints,
  dateOfExperienceStart,
  socialMedia: {
    github: 'https://github.com/BMAWebDev',
    linkedin: 'https://www.linkedin.com/in/andreibardita3112/',
  },
  externalWebsites: {
    anpc: 'https://anpc.ro/',
  },
};
