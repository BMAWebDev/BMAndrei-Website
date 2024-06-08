// constants
import routes from '@constants/routes';
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

  return (
    <Style.Wrapper justify="space-between">
      <Text>BMAndrei</Text>

      <Flex gap={50}>
        <Style.Link href={routes.Homepage}>
          <Text isUnderline={pathname === routes.Homepage} isPointer>
            Home
          </Text>
        </Style.Link>

        <Style.Link href={routes.About}>
          <Text isUnderline={pathname === routes.About} isPointer>
            About
          </Text>
        </Style.Link>

        <Style.Link href={routes.Contact}>
          <Text isUnderline={pathname === routes.Contact} isPointer>
            Contact
          </Text>
        </Style.Link>

        <LanguageChanger />
      </Flex>
    </Style.Wrapper>
  );
};

export default Header;
