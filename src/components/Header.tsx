'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n';
import type { TranslationKey } from '@/i18n';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks: { labelKey: TranslationKey; href: string }[] = [
  { labelKey: 'nav.home', href: '#' },
  { labelKey: 'nav.services', href: '#services' },
  { labelKey: 'nav.projects', href: '#projects' },
  { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.contact', href: '#contact' },
];

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/10 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">terminal</span>
          </div>
          <h2 className="text-slate-100 text-xl font-bold tracking-tight">
            BMA <span className="text-primary">WebDev</span>
          </h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.labelKey}
              className="text-slate-300 hover:text-primary text-sm font-medium transition-colors"
              href={link.href}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button className="hidden sm:flex min-w-30 items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            {t('header.cta')}
          </button>
          <button className="md:hidden text-slate-100">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
