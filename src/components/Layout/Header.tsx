import { useTranslation } from 'react-i18next';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// constants
import config from '@constants/config';
// translations
import { LanguageChanger } from '../translations';
// hooks
import useGetPathname from '@hooks/useGetPathname';
// compontents
import Flex from '../Flex';
import { Text } from '../Texts';
import Logo from '@assets/logo-1.svg';
// style
import Style from './Header.style';

const Header = () => {
  const pathname = useGetPathname();
  const { t } = useTranslation();
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);

  const navbarElements = useMemo(
    () => (
      <>
        <Style.Link href={config.routes.Homepage} title="Home page">
          <Text isUnderline={pathname === config.routes.Homepage} isPointer>
            {t('home_page')}
          </Text>
        </Style.Link>

        <Style.Link href={config.routes.About} title="About page">
          <Text isUnderline={pathname === config.routes.About} isPointer>
            {t('about_page')}
          </Text>
        </Style.Link>

        <Style.Link href={config.routes.Contact} title="Contact page">
          <Text isUnderline={pathname === config.routes.Contact} isPointer>
            {t('contact_page')}
          </Text>
        </Style.Link>

        <LanguageChanger />
      </>
    ),
    [t, pathname],
  );

  return (
    <Style.Wrapper>
      <Style.Container justify="space-between">
        <Link href={config.routes.Homepage} title="Home page">
          <Image
            src={Logo}
            width={175}
            height={100}
            alt="Logo"
            title="BMAWebDev Logo Footer"
          />
        </Link>

        <Flex gap={50} hideOnMobile>
          {navbarElements}
        </Flex>

        <Style.BurgerToggle
          gap={10}
          direction="column"
          onClick={() => setIsMobileMenuActive((prev) => !prev)}
          isActive={isMobileMenuActive}
          hideOnDesktop
        >
          <Style.BurgerMenuLine index={0} isActive={isMobileMenuActive} />
          <Style.BurgerMenuLine index={1} isActive={isMobileMenuActive} />
        </Style.BurgerToggle>

        <Style.MobileMenu
          justify="space-evenly"
          direction="column"
          hideOnDesktop
          isActive={isMobileMenuActive}
        >
          {navbarElements}
        </Style.MobileMenu>
      </Style.Container>
    </Style.Wrapper>
  );
};

export default Header;
