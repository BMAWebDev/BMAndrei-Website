'use client';

import { useTranslation } from '@i18n/index';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 px-6 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <h2 className="text-slate-100 text-lg font-bold">
            BMA <span className="text-primary">WebDev</span>
          </h2>
        </div>

        <div className="flex gap-8">
          <a
            className="text-slate-500 hover:text-white transition-colors"
            href="https://bmawebdev.ro"
          >
            <span className="material-symbols-outlined">public</span>
          </a>
          <a
            className="text-slate-500 hover:text-white transition-colors"
            href="mailto:contact@bmawebdev.ro"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
          {/* <a
            className="text-slate-500 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">share</span>
          </a> */}
        </div>

        <p className="text-slate-500 text-sm">
          {t('footer.copyright').replace(
            '{{ currentYear }}',
            String(new Date().getFullYear()),
          )}
        </p>
      </div>
    </footer>
  );
}
