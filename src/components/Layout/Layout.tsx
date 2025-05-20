'use client';

import { StyleSheetManager } from 'styled-components';
import { NextIntlClientProvider } from 'next-intl';
import emotionIsPropValid from '@emotion/is-prop-valid';
import { Dictionary } from 'lodash';
// models
import { Locale } from '@models/i18n';
// components
import Header from './Header';
import Footer from './Footer';

type LayoutProps = React.PropsWithChildren & {
  locale: Locale;
  messages: Dictionary<string>;
};

const Layout: React.FC<LayoutProps> = ({ children, locale, messages }) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="Europe/Bucharest"
    >
      <StyleSheetManager
        enableVendorPrefixes
        shouldForwardProp={(propName, elementToBeRendered) => {
          return typeof elementToBeRendered === 'string'
            ? emotionIsPropValid(propName)
            : true;
        }}
      >
        <Header />

        {children}

        <Footer />
      </StyleSheetManager>
    </NextIntlClientProvider>
  );
};

export default Layout;
