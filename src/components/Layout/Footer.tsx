import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
// components
import { Text } from '../Texts';
import Flex from '../Flex';
import LinkedinIcon from '@assets/icons/linkedin.svg';
import GithubWhiteIcon from '@assets/icons/github-white.svg';
// style
import Style from './Footer.style';
import config from '@constants/config';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Style.Wrapper>
      <Style.Container direction="column" align="flex-start" gap={50}>
        <Flex justify="space-between" isFullWidth>
          <Style.Col>
            <Style.ColTitle>BMAndrei</Style.ColTitle>
          </Style.Col>

          <Style.Col>
            <Style.ColTitle>{t('pages')}</Style.ColTitle>

            <Link href={config.routes.Homepage}>
              <Style.ColText>{t('home_page')}</Style.ColText>
            </Link>

            <Link href={config.routes.About}>
              <Style.ColText>{t('about_page')}</Style.ColText>
            </Link>

            <Link href={config.routes.Contact}>
              <Style.ColText>{t('contact_page')}</Style.ColText>
            </Link>
          </Style.Col>

          <Style.Col>
            <Style.ColTitle>{t('useful_links')}</Style.ColTitle>

            <Link href={config.externalWebsites.anpc} target="_blank">
              <Style.ColText>{t('anpc')}</Style.ColText>
            </Link>

            <Link href={config.routes.GDPR}>
              <Style.ColText>{t('gdpr')}</Style.ColText>
            </Link>

            <Style.IconsContainer justify="space-between" isFullWidth>
              <Link href={config.socialMedia.github} target="_blank">
                <Image
                  src={GithubWhiteIcon}
                  width={90}
                  height={85}
                  alt="Github white icon"
                />
              </Link>

              <Link href={config.socialMedia.linkedin} target="_blank">
                <Image
                  src={LinkedinIcon}
                  width={90}
                  height={85}
                  alt="LinkedIn icon"
                />
              </Link>
            </Style.IconsContainer>
          </Style.Col>
        </Flex>

        <Text>{t('credits')}</Text>
      </Style.Container>
    </Style.Wrapper>
  );
};

export default Footer;
