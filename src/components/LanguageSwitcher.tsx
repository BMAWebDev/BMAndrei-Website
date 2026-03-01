'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation, type Locale } from '@/i18n';

export default function LanguageSwitcher() {
  const { locale } = useTranslation();
  const pathname = usePathname();

  // Replace current locale prefix with the target locale
  const switchTo: Locale = locale === 'ro' ? 'en' : 'ro';
  const newPath = pathname.replace(`/${locale}`, `/${switchTo}`);

  return (
    <Link
      href={newPath}
      aria-label="Switch language"
      className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors hover:border-primary/50 hover:text-white"
    >
      <span className="material-symbols-outlined text-base leading-none">
        translate
      </span>
      {locale.toUpperCase()}
    </Link>
  );
}
