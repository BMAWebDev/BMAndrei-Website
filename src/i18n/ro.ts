import { config } from '@constants/index';
import type { TranslationKey } from './en';

const ro: Record<TranslationKey, string> = {
  // Header
  'nav.home': 'Acasă',
  'nav.services': 'Servicii',
  'nav.projects': 'Proiecte',
  'nav.about': 'Despre',
  'nav.contact': 'Contact',
  'header.cta': 'Cere o ofertă',

  // Hero
  'hero.badge': 'Disponibil pentru proiecte noi',
  'hero.title.line1': 'Experiența Ta',
  'hero.title.highlight': 'Digitală',
  'hero.description':
    'Construiesc site-uri web performante și experiențe digitale personalizate care stimulează creșterea, inovația și implicarea utilizatorilor. Ai o idee? Hai să o discutăm.',
  'hero.cta.primary': 'Vezi Proiectele',
  'hero.cta.secondary': 'Începe un Proiect',
  'hero.stats.title': '10+ Proiecte livrate',
  'hero.stats.subtitle': '{{ years }}+ ani de calitate și expertiză',

  // Services
  'services.label': 'Expertiza Mea',
  'services.title': 'Soluții Digitale Personalizate pentru Branduri Moderne',
  'services.description':
    'Servicii complete de dezvoltare web concepute pentru a ridica prezența digitală și eficiența operațională a brandului tău.',
  'services.webDev.title': 'Dezvoltare Web',
  'services.webDev.description':
    'Aplicații web scalabile, construite la comandă, folosind cele mai noi tehnologii precum React, Next.js și Node.js.',
  'services.seo.title': 'Optimizare SEO',
  'services.seo.description':
    'Strategii de optimizare pentru motoarele de căutare bazate pe date, pentru a crește vizibilitatea organică și generarea de leaduri.',
  'services.uiux.title': 'Design UI/UX',
  'services.uiux.description':
    'Design-uri centrate pe utilizator care îmbină frumusețea estetică cu funcționalitate intuitivă pentru toate dispozitivele.',
  'services.learnMore': 'Află mai multe',

  // Projects
  'projects.label': 'Portofoliu',
  'projects.title': 'Proiecte Recente',
  'projects.viewAll': 'Vezi Tot Portofoliul',
  'projects.ads.title': 'Uploaders',
  'projects.ads.tags': 'Adstream • Full-stack',
  'projects.ads.description': 'Description uploaders',
  'projects.checkout.title': 'Checkout',
  'projects.checkout.tags': 'Bitdefender • Front-end',
  'projects.checkout.description': `<p>
Checkout este un proiect de gestionare a plăților din platforma Bitdefender. Este construit cu o arhitectură de tip micro-servicii, conținând:
</p>

<ul>
  <li>autentificare din Central cu cont existent</li>
  <li>creare cont nou la finalizare plată</li>
  <li>multi-provider support (Zuora/Adyen, Verifone/2PayJS, Stripe)</li>
  <li>cross-country</li>
  <li>metode de plată diferite în funcție de țară</li>
  <li>multi-language support și traduceri</li>
  <li>multi-session support (mai multe taburi de browser deschise pentru plăți separate)</li>
  <li>compatibilitate conturi de tip companie și calcularea taxelor (sau excluderea lor) în funcție de acestea</li>
  <li>generarea de sesiune nouă sau actualizarea celei curente pe baza parametrilor din URL</li>
  <li>campanii</li>
</ul>

<p>
Am lucrat la acest proiect pentru rezolvarea problemelor și rescrierea întregii aplicații de Front-End în vederea îmbunătățirii vitezei de rulare și a experienței de utilizare. Bitdefender folosea în trecut o platformă integrată prin Verifone și au decis să treacă la o metodă custom, in-house de gestionare a plăților. 
</p>

<p>
În faza inițială, această metodă custom a fost scrisă în Javascript Vanilla. Ulterior, atunci când am fost angajat, am făcut trecerea la React. Eventual am adăugat Redux Toolkit pentru state management și ușor ușor aplicația începea sa fie foarte greu de întreținut și dezvoltat deoarece trecerea la Vanilla JS a fost scrisă în grabă și arhitectura nu a fost gândită corect. Nu aveam Typescript, funcții care nu aveau sens, logică care se repeta de mai multe ori, documentație lipsă, modificam într-o parte și stricam în alte locuri etc. Pe scurt, munca de rescriere a codului a fost una foarte solicitantă, ajungând ca termenul final de livrare să fie la 7 luni distanță față de începerea refactor-ului, deși mai aveam încă un coleg cu care am lucrat pentru a duce proiectul la bun sfârșit.
</p>

<p>
Mi-a plăcut acest proiect fiindcă am lucrat cu tool-uri noi și am reușit să îmbunătățesc aplicația, lăsându-mi amprenta de performanță și calitate. Am lucrat aici timp de 2 săptămâni pentru a implementa diferite funcționalități (diferite de refactor).
</p>

<p>
Tech stack folosit:
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
  'projects.find_more': 'Află mai multe despre proiect aici.',
  'projects.test_it': 'Testează proiectul aici.',

  // CTA
  'cta.title.line1': 'Pregătit pentru ceva',
  'cta.title.line2': 'extraordinar?',
  'cta.description':
    'Hai să colaborăm pentru a-ți transforma viziunea într-o realitate digitală performantă.',
  'cta.primary': 'Începe Proiectul',
  'cta.secondary': 'Contactează-mă',

  // Contact
  'contact.title.line1': 'Hai să construim',
  'contact.title.line2': 'împreună.',
  'contact.description':
    'Ai o idee? Eu am instrumentele pentru a-ți transforma viziunea în realitate.',
  'contact.fields.name.label': 'Prenumele tău',
  'contact.fields.name.placeholder': 'John',
  'contact.fields.email.label': 'Email-ul tău',
  'contact.fields.email.placeholder': 'john@example.com',
  'contact.fields.message.label': 'Detaliile proiectului',
  'contact.fields.message.placeholder':
    'Spune-mi câteva cuvinte despre cerințele proiectului...',
  'contact.submit': 'TRIMITE MESAJ',
  'contact.submit_success_message':
    'Mesajul tău a fost trimis. Mulțumesc pentru curiozitate!',
  'contact.generic_error': `A apărut o eroare la trimiterea mesajului. Te rog revino mai târziu sau scrie la adresa de e-mail ${config.contactEmail}`,

  // General Form Texts
  'form.field_required': 'Câmpul este obligatoriu',
  'form.invalid_email': 'Introdu o adresă de email validă',

  // Footer
  'footer.copyright': '\u00A9 {{ currentYear }} BMA WebDev',
};

export default ro;
