import Link from 'next/link';
import { useTranslation } from 'react-i18next';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import { Heading2, Heading3, Heading4 } from '@components/Texts';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import GithubWhiteIcon from '@assets/icons/github-white.svg';
// style
import Style from './style';

const SocialMedia: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} direction="column" gap={50}>
      <Heading2>{t('homepage.social_media.title')}</Heading2>
      <Heading3>{t('homepage.social_media.subtitle')}</Heading3>

      <Style.CardsContainer direction="column" gap={65}>
        <Style.SocialMediaCard>
          <Style.SocialMediaCardContent gap={50}>
            <Link
              href={config.socialMedia.linkedin}
              target="_blank"
              title="LinkedIn"
            >
              <Style.SocialMediaIcon
                src={LinkedInIcon}
                alt="LinkedIn icon"
                title="LinkedIn icon"
              />
            </Link>

            <Heading4>LinkedIn</Heading4>
          </Style.SocialMediaCardContent>

          <Style.SocialMediaCardDescription>
            {t('homepage.social_media.linkedin_description')}
          </Style.SocialMediaCardDescription>
        </Style.SocialMediaCard>

        <Style.SocialMediaCard>
          <Style.SocialMediaCardContent gap={50}>
            <Link
              href={config.socialMedia.github}
              target="_blank"
              title="Github"
            >
              <Style.SocialMediaIcon
                src={GithubWhiteIcon}
                alt="Github white icon"
                title="Github white icon"
              />
            </Link>

            <Heading4>Github</Heading4>
          </Style.SocialMediaCardContent>

          <Style.SocialMediaCardDescription>
            {t('homepage.social_media.github_description')}
          </Style.SocialMediaCardDescription>
        </Style.SocialMediaCard>
      </Style.CardsContainer>
    </Section>
  );
};

export default SocialMedia;
