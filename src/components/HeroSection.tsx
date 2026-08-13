'use client';

import { useTranslation } from '@i18n/index';
// utils
import { redirectToSection } from '@utils/client';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative px-6 py-16 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-slate-100 text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              {t('hero.title.line1')} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
                {t('hero.title.highlight')}
              </span>
            </h1>

            <p className="text-slate-400 text-lg lg:text-xl max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4">
              {/* <button className="cursor-pointer h-14 px-8 rounded-xl bg-primary text-white font-bold text-base hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20 flex items-center gap-2">
                {t('hero.cta.primary')}
                <span className="material-symbols-outlined text-xl">
                  arrow_forward
                </span>
              </button> */}
              <button
                onClick={() => {
                  redirectToSection('contact');
                }}
                className="cursor-pointer h-14 px-8 rounded-xl bg-slate-800 text-slate-100 font-bold text-base border border-slate-700 hover:bg-slate-700 transition-colors"
              >
                {t('hero.cta.secondary')}
              </button>
            </div>
          </div>

          {/* Hero image card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full aspect-square max-w-lg">
              {/* Decorative blurs */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl" />

              <div className="relative z-10 w-full h-full rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm overflow-hidden shadow-2xl">
                {/* <img
                  alt="Tech Hero"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcvVw_Skr7seQlEgH4lgaMVRMUMggrB6LV6rbm7GxpjR5grI2Shcb6qHvwJSJdFtxUVVyr9sERFqTbsY9_3yh9bXm03cu1p2wzy_LWBS7NEP5H15P4MLI1n82MxIlN9VTSE-SdtcpoMKd-EZozWTrr9YhS3D8YU4c4YI-nap-JSc4NZIqMyfR6jXn9_WZJxyYr8s9Ba5ZWLPJJnw4XaN6bgdQKWgzaU4eXUdC__FxCIQu5MwbobC0HuaIBrbrIDUK8Mptl2Cjlqfo"
                /> */}
                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent" />

                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50">
                  <div className="flex gap-4 items-center">
                    <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">
                        rocket_launch
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-bold">Andrei Bărdiță</p>
                      <p className="text-slate-400 text-sm">
                        {t('hero.stats.subtitle')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
