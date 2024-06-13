'use client';

import { PropsWithChildren } from 'react';
import { StyleSheetManager } from 'styled-components';
import emotionIsPropValid from '@emotion/is-prop-valid';
// components
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
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
  );
};

export default Layout;
