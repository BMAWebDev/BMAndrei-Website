import { useTranslation } from 'react-i18next';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// utils
import { getYearsOfExperience } from '@utils/datetime';
// components
import Section from '@components/Section';
import { Heading1, Text } from '@components/Texts';
import AvatarImg from '@assets/avatar.png';
// style
import Style from './style';

const Hero: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} gap={15}>
      <Style.HeroColLeft>
        <Heading1>{t('homepage.hero.title')}</Heading1>

        <Text size={config.text.heading2.size}>
          {t('homepage.hero.description', {
            yearsOfExperience: getYearsOfExperience(),
          })}
        </Text>

        <Style.HeroButtonsContainer gap={15} isFullWidth>
          <Style.HeroLink href={config.routes.About} title="About page">
            <Style.HeroPrimaryButton>{t('learn_more')}</Style.HeroPrimaryButton>
          </Style.HeroLink>

          <Style.HeroLink href={config.routes.Contact} title="Contact page">
            <Style.HeroSecondaryButton>
              {t('contact_me')}
            </Style.HeroSecondaryButton>
          </Style.HeroLink>
        </Style.HeroButtonsContainer>
      </Style.HeroColLeft>

      <Style.HeroColRight align="flex-end">
        <Style.ProfileImage
          src={AvatarImg}
          priority
          alt="profile image"
          title="profile image"
        />
      </Style.HeroColRight>
    </Section>
  );
};

export default Hero;
