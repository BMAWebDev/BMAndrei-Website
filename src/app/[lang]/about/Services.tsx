import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import Flex from '@components/Flex';
import { Heading2, Text, Heading1 } from '@components/Texts';

interface IService {
  title: string;
  description: string;
}

const Services: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  const services: IService[] = useMemo(
    () => [
      {
        title: t('aboutpage.services.development.title'),
        description: t('aboutpage.services.development.description'),
      },
      {
        title: t('aboutpage.services.consulting.title'),
        description: t('aboutpage.services.consulting.description'),
      },
      {
        title: t('aboutpage.services.maintenance.title'),
        description: t('aboutpage.services.maintenance.description'),
      },
      {
        title: t('aboutpage.services.bugfixing.title'),
        description: t('aboutpage.services.bugfixing.description'),
      },
      {
        title: t('aboutpage.services.ecommerce_start.title'),
        description: t('aboutpage.services.ecommerce_start.description'),
      },
    ],
    [t],
  );

  return (
    <Section
      id="services"
      index={index}
      direction="column"
      gap={config.padding.sectionValue}
    >
      <Heading1>{t('aboutpage.services.title')}</Heading1>

      <Flex direction="column" gap={80} align="flex-start" isFullWidth>
        {services.map((service, index) => (
          <Flex key={index} direction="column" gap={40} align="flex-start">
            <Heading2>{service.title}</Heading2>
            <Text>{service.description}</Text>
          </Flex>
        ))}
      </Flex>
    </Section>
  );
};

export default Services;
