import Image from 'next/image';
import { useTranslation } from 'react-i18next';
// models
import { SectionProps } from '@models/layout';
// utils
import { getCurrentAge, getYearsOfExperience } from '@utils/datetime';
// components
import Section from '@components/Section';
import Flex, { Col } from '@components/Flex';
import { SubTitle, Text, Title } from '@components/Texts';
import AvatarIcon from '@assets/avatar.png';

const age = getCurrentAge();
const yearsOfExperience = getYearsOfExperience();

const Hero: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} direction="column" gap={50}>
      <Flex direction="column" align="center">
        <Title>Andrei Bărdiță</Title>
        <SubTitle>{t('aboutpage.hero.position_title')}</SubTitle>
      </Flex>

      <Flex justify="space-between" isFullWidth>
        <Col gap={40}>
          <SubTitle>{t('aboutpage.hero.title')}</SubTitle>
          <Text>
            {t('aboutpage.hero.description', {
              age,
              yearsOfExperience,
            })}
          </Text>
        </Col>

        <Col flex={0.4}>
          <Image src={AvatarIcon} className="full-size" alt="Avatar icon" />
        </Col>
      </Flex>
    </Section>
  );
};

export default Hero;
