'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from '@i18n/navigation';
import { components, ControlProps, StylesConfig } from 'react-select';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { redirect } from '@i18n/navigation';
// constants
import config from '@constants/config';
import { LOCALES } from '@constants/i18n';
// models
import { IOption } from '@models/select';
import { Page } from '@models/i18n';

const Select = dynamic(() => import('react-select'), { ssr: false });

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

const langs = LOCALES.map((lng: any) => ({
  value: lng,
  label: lng.toUpperCase(),
}));

export default function LanguageChanger() {
  const locale = useLocale();
  const pathname = usePathname();

  const lang: IOption = useMemo(
    () => ({
      value: locale,
      label: locale.toUpperCase(),
    }),
    [locale],
  );

  const handleChange = (e: IOption) => {
    const { value } = e;

    const href = pathname;

    redirect({ href, locale: value });
  };

  return (
    <Select
      onChange={(e) => handleChange(e as IOption)}
      options={langs}
      value={lang}
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
