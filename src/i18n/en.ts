const en = {
  // Header
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.projects': 'Projects',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'header.cta': 'Get a Quote',

  // Hero
  'hero.badge': 'Available for new projects',
  'hero.title.line1': 'Crafting Digital',
  'hero.title.highlight': 'Excellence',
  'hero.description':
    'I build high-performance websites and bespoke digital experiences that drive growth, innovation, and user engagement.',
  'hero.cta.primary': 'View My Work',
  'hero.cta.secondary': 'Start a Project',
  'hero.stats.title': '10+ Delivered Projects',
  'hero.stats.subtitle': 'Quality since 2020',

  // Services
  'services.label': 'My Expertise',
  'services.title': 'Tailored Digital Solutions for Modern Brands',
  'services.description':
    'Comprehensive web development services designed to elevate your brand\u2019s digital presence and operational efficiency.',
  'services.webDev.title': 'Web Development',
  'services.webDev.description':
    'Custom-built, scalable web applications using the latest technologies like React, Next.js, and Node.js.',
  'services.seo.title': 'SEO Optimization',
  'services.seo.description':
    'Data-driven search engine strategies to boost your organic visibility, traffic, and high-quality lead generation.',
  'services.uiux.title': 'UI/UX Design',
  'services.uiux.description':
    'User-centric designs that blend aesthetic beauty with seamless, intuitive functionality for all devices.',
  'services.learnMore': 'Learn more',

  // Projects
  'projects.label': 'Portfolio',
  'projects.title': 'Latest Projects',
  'projects.viewAll': 'View Full Portfolio',
  'projects.fintech.title': 'Fintech Dashboard',
  'projects.fintech.tags': 'Web Development \u2022 UI Design',
  'projects.fashion.title': 'Fashion Store',
  'projects.fashion.tags': 'E-Commerce \u2022 SEO',
  'projects.saas.title': 'SaaS Landing Page',
  'projects.saas.tags': 'Web App \u2022 UI/UX',

  // CTA
  'cta.title.line1': 'Ready to build something',
  'cta.title.line2': 'extraordinary?',
  'cta.description':
    'Let\u2019s collaborate to turn your vision into a high-performance digital reality.',
  'cta.primary': 'Start Your Project',
  'cta.secondary': 'Contact Me',

  // Contact
  'contact.title.line1': 'Let\u2019s build',
  'contact.title.line2': 'together.',
  'contact.description': 'Have a vision? I have the tools to make it reality.',
  'contact.fields.name.label': 'Your name',
  'contact.fields.name.placeholder': 'John Doe',
  'contact.fields.email.label': 'Your email',
  'contact.fields.email.placeholder': 'john@example.com',
  'contact.fields.message.label': 'Project details',
  'contact.fields.message.placeholder': 'Tell me about your idea...',
  'contact.submit': 'SEND INQUIRY',

  // General Form Texts
  'form.field_required': 'Field is required',

  // Footer
  'footer.copyright': '\u00A9 {{ currentYear }} BMA WebDev',
} as const;

export type TranslationKey = keyof typeof en;
export default en;
