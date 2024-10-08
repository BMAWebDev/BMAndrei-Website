'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Select, { components, ControlProps, StylesConfig } from 'react-select';
import { useState } from 'react';
import Image from 'next/image';
// constants
import config from '@constants/config';
// models
import { IOption } from '@models/select';
// utils
import { getI18nConfig } from '@utils/translations/config';

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
    fontSize: config.text.normal.size,
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
        title="country flag"
        style={{ borderRadius: '10px' }}
      />

      {children}
    </components.Control>
  );
};

const langs = config.languages.map((lng: any) => ({
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

    const i18nConfig = getI18nConfig();

    i18n.changeLanguage(value);

    // redirect to the new locale path
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
      instanceId="language-changer"
      aria-labelledby="Language changer"
    />
  );
}
