import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
// components
import { Text } from '../Texts';
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
        <Style.ColumnsContainer justify="space-between" isFullWidth>
          <Style.Col>
            <Style.ColTitle>BMAWebDev</Style.ColTitle>
          </Style.Col>

          <Style.Col>
            <Style.ColTitle>{t('pages')}</Style.ColTitle>

            <Link href={config.routes.Homepage} title="Home page">
              <Style.ColText>{t('home_page')}</Style.ColText>
            </Link>

            <Link href={config.routes.About} title="About page">
              <Style.ColText>{t('about_page')}</Style.ColText>
            </Link>

            <Link href={config.routes.Contact} title="Contact page">
              <Style.ColText>{t('contact_page')}</Style.ColText>
            </Link>
          </Style.Col>

          <Style.Col>
            <Style.ColTitle>{t('useful_links')}</Style.ColTitle>

            <Link
              href={config.externalWebsites.anpc}
              target="_blank"
              title="ANPC"
            >
              <Style.ColText>{t('anpc')}</Style.ColText>
            </Link>

            {/* <Link href={config.routes.GDPR} title="GDPR">
              <Style.ColText>{t('gdpr')}</Style.ColText>
            </Link> */}

            <Style.IconsContainer justify="space-between" isFullWidth>
              <Link
                href={config.socialMedia.github}
                target="_blank"
                title="Github"
              >
                <Image
                  src={GithubWhiteIcon}
                  width={90}
                  height={85}
                  alt="Github white icon"
                  title="Github white icon"
                />
              </Link>

              <Link
                href={config.socialMedia.linkedin}
                target="_blank"
                title="LinkedIn link"
              >
                <Image
                  src={LinkedinIcon}
                  width={90}
                  height={85}
                  alt="LinkedIn icon"
                  title="LinkedIn"
                />
              </Link>
            </Style.IconsContainer>
          </Style.Col>
        </Style.ColumnsContainer>

        <Text alignSelf="center" align="center">
          {t('credits')}
        </Text>
      </Style.Container>
    </Style.Wrapper>
  );
};

export default Footer;
