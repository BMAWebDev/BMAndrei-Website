'use client';

import { PropsWithChildren } from 'react';
import { StyleSheetManager } from 'styled-components';
import emotionIsPropValid from '@emotion/is-prop-valid';
// components
import { Text } from '../Texts';
import { LanguageChanger } from '@components/translations';
// style
import Style from './style';

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
      <Style.Header justify="space-between">
        <Text>BMAndrei</Text>

        <Style.Navbar>
          <LanguageChanger />
        </Style.Navbar>
      </Style.Header>

      <main className="content">{children}</main>

      <Style.Footer>footer</Style.Footer>
    </StyleSheetManager>
  );
};

export default Layout;
