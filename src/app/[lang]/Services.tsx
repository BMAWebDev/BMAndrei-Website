import { useTranslation } from 'react-i18next';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import { SubTitle, Text, Title } from '@components/Texts';
import Flex from '@components/Flex';
// style
import Style from './style';
import { OList } from '@components/Lists';

const frontendTechnologies = [
  'React (NextJS / Vite)',
  'Vue (NuxtJS / Vite)',
  'Style Components / SCSS',
];
const backendTechnologies = ['NodeJS (Express)', 'C# (.NET)', 'REST API'];

const Services: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} direction="column" gap={50}>
      <Flex justify="center" direction="column" gap={50} flex={1}>
        <Title>{t('homepage.services.title')}</Title>
        <SubTitle align="center">{t('homepage.services.subtitle')}</SubTitle>
      </Flex>

      <Style.CardsContainer justify="space-between" gap={30}>
        <Style.Card direction="column" gap={30} flex={0.5} align="flex-start">
          <SubTitle align="center" isFullWidth>
            Front-end
          </SubTitle>
          <Text>{t('homepage.services.modern_technologies')}</Text>

          <OList>
            {frontendTechnologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </OList>
        </Style.Card>

        <Style.Card direction="column" gap={30} flex={0.5} align="flex-start">
          <SubTitle align="center" isFullWidth>
            Back-end
          </SubTitle>
          <Text>{t('homepage.services.modern_technologies')}</Text>

          <OList>
            {backendTechnologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </OList>
        </Style.Card>
      </Style.CardsContainer>
    </Section>
  );
};

export default Services;
