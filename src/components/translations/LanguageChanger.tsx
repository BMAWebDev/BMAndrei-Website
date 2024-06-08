'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Select, { components, ControlProps, StylesConfig } from 'react-select';
import { useState } from 'react';
// constants
import config from '@constants/config';
// translation
import i18nConfig from '@/i18n-config.json';
import { IOption } from '@models/select';
import Image from 'next/image';

const selectStyles: StylesConfig = {
  option: (style) => ({ ...style, cursor: 'pointer' }),
  control: (style) => ({
    ...style,
    background: 'transparent',
    border: 0,
    color: config.colors.White,
    cursor: 'pointer',
  }),
  singleValue: (style) => ({
    ...style,
    color: config.colors.White,
  }),
};

const Control: React.FC<ControlProps> = (props) => {
  const { children, selectProps } = props;
  let option = selectProps.value as IOption;
  option = { ...option, value: option.value === 'en' ? 'us' : option.value };

  return (
    <components.Control {...props}>
      <Image
        src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/${option.value}.svg`}
        width={50}
        height={40}
        alt="country flag"
        style={{ borderRadius: '10px' }}
      />

      {children}
    </components.Control>
  );
};

const langs = config.languages.map((lng) => ({
  value: lng,
  label: lng.toUpperCase(),
}));

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [selectedLang] = useState<IOption>({
    value: currentLocale,
    label: currentLocale.toUpperCase(),
  });

  const handleChange = (e: IOption) => {
    const { value } = e;

    i18n.changeLanguage(value);

    //  redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + value + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${value}`));
    }

    router.refresh();
  };

  return (
    <Select
      onChange={(e) => handleChange(e as IOption)}
      options={langs}
      value={selectedLang}
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
        Control,
      }}
      styles={selectStyles}
      isSearchable={false}
    />
  );
}
