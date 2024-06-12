import { useTranslation } from 'react-i18next';
// constants
import config from '@constants/config';
// translations
import { LanguageChanger } from '../translations';
// hooks
import useGetPathname from '@hooks/useGetPathname';
// compontents
import Flex from '../Flex';
import { Text } from '../Texts';
// style
import Style from './Header.style';

const Header = () => {
  const pathname = useGetPathname();
  const { t } = useTranslation();

  return (
    <Style.Wrapper>
      <Style.Container justify="space-between">
        <Text>BMAndrei</Text>

        <Flex gap={50}>
          <Style.Link href={config.routes.Homepage}>
            <Text isUnderline={pathname === config.routes.Homepage} isPointer>
              {t('home_page')}
            </Text>
          </Style.Link>

          <Style.Link href={config.routes.About}>
            <Text isUnderline={pathname === config.routes.About} isPointer>
              {t('about_page')}
            </Text>
          </Style.Link>

          <Style.Link href={config.routes.Contact}>
            <Text isUnderline={pathname === config.routes.Contact} isPointer>
              {t('contact_page')}
            </Text>
          </Style.Link>

          <LanguageChanger />
        </Flex>
      </Style.Container>
    </Style.Wrapper>
  );
};

export default Header;
