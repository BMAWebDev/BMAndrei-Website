'use client';

import { useTranslation } from '@i18n/index';
import type { TranslationKey } from '@i18n/index';

const services: {
  icon: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}[] = [
  {
    icon: 'code',
    titleKey: 'services.webDev.title',
    descriptionKey: 'services.webDev.description',
  },
  {
    icon: 'trending_up',
    titleKey: 'services.seo.title',
    descriptionKey: 'services.seo.description',
  },
  {
    icon: 'grid_view',
    titleKey: 'services.uiux.title',
    descriptionKey: 'services.uiux.description',
  },
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
            {t('services.label')}
          </h2>
          <h3 className="text-slate-100 text-4xl lg:text-5xl font-bold leading-tight">
            {t('services.title')}
          </h3>
          <p className="text-slate-400 text-lg">{t('services.description')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.titleKey}
              className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {service.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {t(service.titleKey)}
              </h4>
              <p className="text-slate-400 leading-relaxed mb-6">
                {t(service.descriptionKey)}
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                href="#"
              >
                {t('services.learnMore')}{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
