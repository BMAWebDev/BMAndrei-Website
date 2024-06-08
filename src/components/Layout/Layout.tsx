'use client';

import { PropsWithChildren } from 'react';
import { StyleSheetManager } from 'styled-components';
import emotionIsPropValid from '@emotion/is-prop-valid';
// components
import Header from './Header';
// style
import Style from './Layout.style';

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

      <main className="content">{children}</main>

      <Style.Footer>footer</Style.Footer>
    </StyleSheetManager>
  );
};

export default Layout;
