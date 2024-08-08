import Image from 'next/image';
import { useTranslation } from 'react-i18next';
// models
import { SectionProps } from '@models/layout';
// utils
import { getCurrentAge, getYearsOfExperience } from '@utils/datetime';
// components
import Section from '@components/Section';
import Flex from '@components/Flex';
import { Heading2, Text, Heading1 } from '@components/Texts';
// import AvatarImg from '@assets/avatar.png';
// style
import Style from './style';

const age = getCurrentAge();
const yearsOfExperience = getYearsOfExperience();

const Hero: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} direction="column" gap={50}>
      <Flex direction="column" align="center">
        <Heading1>{t('aboutpage.hero.title')}</Heading1>
      </Flex>

      <Flex justify="space-between" isFullWidth>
        <Style.HeroCol gap={40}>
          <Heading2>
            Andrei Bărdiță - {t('aboutpage.hero.position_title')}
          </Heading2>

          <Text>
            {t('aboutpage.hero.description', {
              age,
              yearsOfExperience,
            })}
          </Text>
        </Style.HeroCol>

        <Style.HeroCol flex={0.4} align="flex-end" hideOnMobile>
          {/* <Image
            src={AvatarImg}
            priority
            className="full-size"
            alt="profile image"
            title="profile image"
          /> */}
        </Style.HeroCol>
      </Flex>
    </Section>
  );
};

export default Hero;
