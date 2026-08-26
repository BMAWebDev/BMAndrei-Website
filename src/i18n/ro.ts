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
  'projects.ads.description': `<p>
Uploaders este o platformă multi-layer a celor de la Adstream pentru gestionarea reclamelor, atât globale, cât și din România. Arhitectura este împărțită în 4 module, fiecare cu utilizatorii lor specifici, conținând:
</p>

<ul>
  <li>Crearea de comenzi și gestionarea acestora depinzând de anumite criterii precum rol de utilizator sau de colaborator</li>
  <li>Actualizări real-time</li>
  <li>Sistem de autentificare</li>
  <li>Expirare sesiune</li>
  <li>Încărcare și descărcare de fișiere de dimensiuni mari (500MB+)</li>
  <li>Real-time data analytics</li>
  <li>Notificări pe e-mail pentru diferite acțiuni</li>
  <li>Generare de preview și thumbnail pe baza videoclipului încărcat</li>
  <li>Încărcare surse de tip zip, xml, xlsl, png etc</li>
  <li>Componente UI custom shared</li>
  <li>Light & Dark mode</li>
</ul>

<p>
Proiectul acesta a fost unul de restructurare. Adstream avea o singură aplicație pentru toate cele 4 module, cu un design învechit și cu o performanță slab calitativă din punct de vedere al vitezei. Am creat de la 0 modulele, pe rând, implementând diferite funcționalități precum generarea comenzilor, încărcarea surselor sau crearea de cost estimat.
</p>

<p>
Am lucrat la Uploaders ca și Developer Full-Stack și Team Lead într-o echipă formată din mai mulți Developeri Front-end și Back-end, Testeri QA, Product Owners și Manageri. Am fost responsabil de gestionarea dezvoltării, de crearea de flow-uri corecte, arhitectură curată în cod și de comunicarea clară dintre persoane. Am folosit Jira pentru gestionarea ticketelor și am lucrat în sprint-uri de câte două săptămâni, la finalul cărora făceam o retrospectivă și discutam despre cerințele următoare. Am lucrat la acest proiect pentru mai mult de 2 ani.
</p>

<p>
Pe Front-end m-am ocupat de componentele de UI, legarea cu back-end-ul prin REST API și scrierea unei librării de componente shared (componente comune folosite în toate cele 4 aplicații), folosind React și Tailwind.
</p>

<p>
Pe Back-end m-am ocupat de optimizarea codului, refactor și funcționalități noi precum filtrarea comenzilor sau gestionarea fișierelor. Am folosit Python cu Flask pentru codul sursă, un server pe Ubuntu pentru rularea proiectelor, am creat script-uri de build și am rezolvat erorile de bază de date.
</p>

<p>
Tech stack folosit:
</p>

<ul>
  <li>React</li>
  <li>Redux Toolkit</li>
  <li>Typescript</li>
  <li>Vite</li>
  <li>Python</li>
  <li>Flask</li>
  <li>Tailwind CSS</li>
  <li>Ubuntu Server</li>
  <li>MySQL Databases</li>
</ul>
`,
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
Mi-a plăcut acest proiect fiindcă am lucrat cu tool-uri noi și am reușit să îmbunătățesc aplicația, lăsându-mi amprenta de performanță și calitate. Am lucrat aici timp de 2 ani pentru a implementa diferite funcționalități (diferite de refactor).
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
