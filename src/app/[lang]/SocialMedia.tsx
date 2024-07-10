import Link from 'next/link';
import { useTranslation } from 'react-i18next';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import { Title, SubTitle, Text } from '@components/Texts';
import Flex from '@components/Flex';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import GithubWhiteIcon from '@assets/icons/github-white.svg';
// style
import Style from './style';

const SocialMedia: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} direction="column" gap={50}>
      <Title>{t('homepage.social_media.title')}</Title>
      <SubTitle>{t('homepage.social_media.subtitle')}</SubTitle>

      <Style.CardsContainer direction="column" gap={65}>
        <Style.SocialMediaCard>
          <Style.SocialMediaCardContent gap={50}>
            <Link href={config.socialMedia.linkedin} target="_blank">
              <Style.SocialMediaIcon src={LinkedInIcon} alt="LinkedIn icon" />
            </Link>

            <Text>LinkedIn</Text>
          </Style.SocialMediaCardContent>

          <Style.SocialMediaCardDescription>
            {t('homepage.social_media.linkedin_description')}
          </Style.SocialMediaCardDescription>
        </Style.SocialMediaCard>

        <Style.SocialMediaCard>
          <Style.SocialMediaCardContent gap={50}>
            <Link href={config.socialMedia.github} target="_blank">
              <Style.SocialMediaIcon
                src={GithubWhiteIcon}
                alt="Github white icon"
              />
            </Link>

            <Text>Github</Text>
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
