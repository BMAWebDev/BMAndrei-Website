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
import Flex, { Col } from '@components/Flex';
import { PrimaryButton, SecondaryButton } from '@components/Buttons';
import AvatarImg from '@assets/avatar.png';
// style
import Style from './style';

const Hero: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} gap={15}>
      <Col gap={90} direction="column">
        <Title>{t('homepage.hero.title')}</Title>
        <SubTitle>
          {t('homepage.hero.description', {
            yearsOfExperience: getYearsOfExperience(),
          })}
        </SubTitle>

        <Flex gap={15}>
          <Link href={config.routes.About}>
            <PrimaryButton>{t('learn_more')}</PrimaryButton>
          </Link>
          <Link href={config.routes.Contact}>
            <SecondaryButton>{t('contact_me')}</SecondaryButton>
          </Link>
        </Flex>
      </Col>

      <Col>
        <Style.ProfileImage src={AvatarImg} alt="profile image" />
      </Col>
    </Section>
  );
};

export default Hero;
