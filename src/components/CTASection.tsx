'use client';

import { useTranslation } from '@i18n/index';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section id="cta" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto p-12 lg:p-20 rounded-3xl bg-primary relative overflow-hidden text-center flex flex-col items-center gap-8">
        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />

        <h2 className="text-white text-4xl lg:text-5xl font-black relative z-10">
          {t('cta.title.line1')} <br />
          {t('cta.title.line2')}
        </h2>

        <p className="text-white/80 text-lg lg:text-xl max-w-2xl relative z-10 leading-relaxed">
          {t('cta.description')}
        </p>

        {/* <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <button
            onClick={() => {
              document.dispatchEvent(
                new CustomEvent('test123', {
                  detail: {
                    href: '#contact',
                  },
                }),
              );
            }}
            className="h-14 cursor-pointer px-10 rounded-xl bg-white text-primary font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl"
          >
            {t('cta.secondary')}
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CTASection;
