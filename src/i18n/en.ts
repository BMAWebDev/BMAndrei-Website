import { config } from '@constants/index';

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
  'hero.title.line1': 'Your digital',
  'hero.title.highlight': 'Experience',
  'hero.description':
    'I build high-performance websites and bespoke digital experiences that drive growth, innovation, and user engagement. Got an idea? Let\u2019s talk about it.',
  'hero.cta.primary': 'View My Work',
  'hero.cta.secondary': 'Start a Project',
  'hero.stats.title': '10+ Delivered Projects',
  'hero.stats.subtitle': '{{ years }}+ years of quality and expertise',

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
  'projects.ads.title': 'Uploaders',
  'projects.ads.tags': 'Adstream \u2022 Full-stack',
  'projects.ads.description': `<p>
Uploaders is a multi-layer platform developed by Adstream for managing advertisements, both global and local to Romania. The architecture is divided into 4 modules, each with their own specific users, containing:
</p>

<ul>
  <li>Order creation and management depending on specific criteria such as user or collaborator roles</li>
  <li>Real-time updates</li>
  <li>Authentication system</li>
  <li>Session expiration</li>
  <li>Uploading and downloading large files (500MB+)</li>
  <li>Real-time data analytics</li>
  <li>Email notifications for various actions</li>
  <li>Preview and thumbnail generation based on the uploaded video</li>
  <li>Uploading source files such as zip, xml, xlsx, png, etc.</li>
  <li>Custom shared UI components</li>
  <li>Light & Dark mode</li>
</ul>

<p>
This project was a restructuring effort. Adstream previously had a single application for all 4 modules, featuring an outdated design and poor performance in terms of speed. I built the modules from scratch, one by one, implementing various features such as order generation, source uploading, or estimated cost calculation.
</p>

<p>
I worked on Uploaders as a Full-Stack Developer and Team Lead within a team made up of several Front-end and Back-end Developers, QA Testers, Product Owners, and Managers. I was responsible for managing development, creating proper workflows, ensuring clean code architecture, and facilitating clear communication between team members. We used Jira for ticket management and worked in two-week sprints, concluding with a retrospective and talked about upcoming requirements. I worked on this project for over 2 years.
</p>

<p>
On the Front-end, I handled UI components, integration with the Back-end via REST API, and authored a shared component library (common components used across all 4 applications) using React and Tailwind.
</p>

<p>
On the Back-end, I focused on code optimization, refactoring, and new features such as order filtering and file management. I used Python with Flask for the codebase, an Ubuntu server for running the projects, created build scripts, and resolved database errors.
</p>

<p>
Tech stack used:
</p>

<ul>
  <li>React</li>
  <li>Redux Toolkit</li>
  <li>TypeScript</li>
  <li>Vite</li>
  <li>Python</li>
  <li>Flask</li>
  <li>Tailwind CSS</li>
  <li>Ubuntu Server</li>
  <li>MySQL Databases</li>
</ul>`,
  'projects.checkout.title': 'Checkout',
  'projects.checkout.tags': 'Bitdefender \u2022 Front-end',
  'projects.checkout.description': `<p>
Checkout is a payment management project within the Bitdefender platform. It is built using a microservices architecture and includes:
</p>

<ul>
  <li>authentication from Central using an existing account</li>
  <li>new account creation upon payment completion</li>
  <li>multi-provider support (Zuora/Adyen, Verifone/2PayJS, Stripe)</li>
  <li>cross-country capabilities</li>
  <li>different payment methods depending on the country</li>
  <li>multi-language support and translations</li>
  <li>multi-session support (multiple browser tabs open for separate payments)</li>
  <li>company account compatibility and calculating taxes (or excluding them) accordingly</li>
  <li>generating a new session or updating the current one based on URL parameters</li>
  <li>campaigns</li>
</ul>

<p>
I worked on this project to fix issues and rewrite the entire Front-End application in order to improve running speed and user experience. In the past, Bitdefender used an integrated platform through Verifone and decided to transition to a custom, in-house payment management solution.
</p>

<p>
In the initial phase, this custom method was written in Vanilla JavaScript. Later, when I was hired, I made the transition to React. Eventually, I added Redux Toolkit for state management, but step by step the application became very difficult to maintain and develop because the initial transition from Vanilla JS had been done in a rush and the architecture was not properly planned. We didn't have TypeScript, functions made no sense, logic was repeated multiple times, documentation was missing, changing something in one place broke things elsewhere and so on. To sum it up, the code rewrite was highly demanding, ending up with a final delivery deadline 7 months out from the start of the refactor, even though I worked alongside another colleague to bring the project to completion.
</p>

<p>
I enjoyed this project because I worked with new tools and managed to improve the application, leaving my mark in terms of performance and quality. I worked here for 2 years, implementing different features (apart from the refactor).
</p>

<p>
Tech stack used:
</p>

<ul>
  <li>React</li>
  <li>Redux Toolkit</li>
  <li>Typescript</li>
  <li>Vite</li>
  <li>Docker</li>
  <li>Styled Components</li>
  <li>Adyen Web, 2PayJS, Stripe</li>
</ul>`,
  'projects.find_more': 'Find out more about the project here.',
  'projects.test_it': 'Test the project here.',

  // CTA
  'cta.title.line1': 'Ready for something',
  'cta.title.line2': 'extraordinary?',
  'cta.description':
    'Let\u2019s collaborate to turn your vision into a high-performance digital reality.',
  'cta.primary': 'Start Your Project',
  'cta.secondary': 'Contact Me',

  // Contact
  'contact.title.line1': 'Let\u2019s build',
  'contact.title.line2': 'together.',
  'contact.description': 'Have a vision? I have the tools to make it reality.',
  'contact.fields.name.label': 'First name',
  'contact.fields.name.placeholder': 'John',
  'contact.fields.email.label': 'Your email',
  'contact.fields.email.placeholder': 'john@example.com',
  'contact.fields.message.label': 'Project details',
  'contact.fields.message.placeholder': 'Tell me about your idea...',
  'contact.submit': 'SEND INQUIRY',
  'contact.submit_success_message':
    'Your message was sent. Thank you for reaching out!',
  'contact.generic_error': `There was an error while sending the message. Please come back later or send an email to ${config.contactEmail}`,

  // General Form Texts
  'form.field_required': 'Field is required',
  'form.invalid_email': 'Enter a valid email address',

  // Footer
  'footer.copyright': '\u00A9 {{ currentYear }} BMA WebDev',
} as const;

export type TranslationKey = keyof typeof en;
export default en;
