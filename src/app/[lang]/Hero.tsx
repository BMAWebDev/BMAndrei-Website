import Link from 'next/link';
import { useTranslation } from 'react-i18next';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// utils
import { getYearsOfExperience } from '@utils/datetime';
// components
import Section from '@components/Section';
import { Title, SubTitle } from '@components/Texts';
import Flex from '@components/Flex';
import AvatarImg from '@assets/avatar.png';
// style
import Style from './style';

const Hero: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} gap={15}>
      <Style.HeroColLeft>
        <Title>{t('homepage.hero.title')}</Title>

        <SubTitle>
          {t('homepage.hero.description', {
            yearsOfExperience: getYearsOfExperience(),
          })}
        </SubTitle>

        <Style.HeroButtonsContainer gap={15} isFullWidth>
          <Style.HeroLink href={config.routes.About}>
            <Style.HeroPrimaryButton>{t('learn_more')}</Style.HeroPrimaryButton>
          </Style.HeroLink>

          <Style.HeroLink href={config.routes.Contact}>
            <Style.HeroSecondaryButton>
              {t('contact_me')}
            </Style.HeroSecondaryButton>
          </Style.HeroLink>
        </Style.HeroButtonsContainer>
      </Style.HeroColLeft>

      <Style.HeroColRight align="flex-end">
        <Style.ProfileImage src={AvatarImg} alt="profile image" />
      </Style.HeroColRight>
    </Section>
  );
};

export default Hero;
