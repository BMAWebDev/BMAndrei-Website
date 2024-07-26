import { Trans, useTranslation } from 'react-i18next';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import { Heading2, Heading3, Text } from '@components/Texts';
import Flex, { Card } from '@components/Flex';
// style
import Style from './style';
import { OList } from '@components/Lists';
import Link from 'next/link';

const frontendTechnologies = [
  'React (NextJS / Vite)',
  'Vue (NuxtJS / Vite)',
  'Styled Components / SCSS',
];

const backendTechnologies = ['NodeJS (Express)', 'C# (.NET)', 'REST API'];

const Services: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} direction="column" gap={50}>
      <Flex justify="center" direction="column" gap={50} flex={1}>
        <Heading2>{t('homepage.services.title')}</Heading2>

        <Heading3 align="center">{t('homepage.services.subtitle')}</Heading3>
      </Flex>

      <Style.CardsContainer gap={30}>
        <Card direction="column" gap={30} flex={0.5} align="flex-start">
          <Heading3 align="center" isFullWidth>
            Front-end
          </Heading3>

          <Text>{t('homepage.services.modern_technologies')}</Text>

          <OList>
            {frontendTechnologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </OList>
        </Card>

        <Card direction="column" gap={30} flex={0.5} align="flex-start">
          <Heading3 align="center" isFullWidth>
            Back-end
          </Heading3>
          <Text>{t('homepage.services.modern_technologies')}</Text>

          <OList>
            {backendTechnologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </OList>
        </Card>
      </Style.CardsContainer>

      <Text>
        <Trans
          components={{
            1: (
              <Link
                href={`${config.routes.About}?section=services`}
                style={{ color: config.colors.LightBlue }}
                title="Services"
              />
            ),
          }}
        >
          {t('homepage.services.more_info')}
        </Trans>
      </Text>
    </Section>
  );
};

export default Services;
