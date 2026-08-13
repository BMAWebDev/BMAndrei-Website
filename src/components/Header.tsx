'use client';

import { useTranslation } from '@i18n/index';
import type { TranslationKey } from '@i18n/index';
// components
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

const navLinks: { labelKey: TranslationKey; href: string; icon?: string }[] = [
  { labelKey: 'nav.home', href: '#hero', icon: 'home' },
  // { labelKey: 'nav.services', href: '#services', icon: 'work' },
  // { labelKey: 'nav.projects', href: '#projects' },
  // { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.contact', href: '#contact', icon: 'mail' },
];

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/10 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.labelKey}
              className="flex place-items-center gap-1 cursor-pointer text-slate-300 hover:text-primary text-sm font-medium transition-colors"
              onClick={() => {
                document.dispatchEvent(
                  new CustomEvent('sectionRedirect', {
                    detail: {
                      href: link.href,
                    },
                  }),
                );
              }}
            >
              {link.icon && (
                <span className="material-symbols-outlined text-lg!">
                  {link.icon}
                </span>
              )}
              {t(link.labelKey)}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          {/* <button className="hidden sm:flex cursor-pointer min-w-30 items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">attach_money</span>
            {t('header.cta')}
          </button> */}
          <button className="md:hidden text-slate-100">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
