'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
// translation
import i18nConfig from '@/i18n-config.json';

export default function LanguageChanger() {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: any) => {
    const newLocale = e.target.value;

    i18n.changeLanguage(newLocale);

    //  redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  return (
    <>
      <div>{t('learn_more')}</div>
      <select onChange={handleChange} value={currentLocale}>
        <option value="en">English</option>
        <option value="ro">romana</option>
      </select>
    </>
  );
}
