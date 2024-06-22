// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import Flex from '@components/Flex';
import { SubTitle, Text, Title } from '@components/Texts';

interface IService {
  title: string;
  description: string;
}

const services: IService[] = [
  {
    title: 'Dezvoltare aplicații Web/Mobile/Jocuri',
    description:
      'Crearea uneia sau a mai multor aplicații, de la faza de prototipare și discuții până la mentenanță.',
  },
  {
    title: 'Consultanță',
    description:
      'Discuții 1:1 pentru a înțelege și a-ți oferi cel mai bun serviciu bazat pe nevoile tale.',
  },
  {
    title: 'Mentenanță',
    description:
      'Îngrijirea aplicației, după finalizarea acesteia, pentru o perioadă stabilită.',
  },
  {
    title: 'Rezolvare probleme / Ajutor cu proiecte existente',
    description:
      'Rezolvarea problemelor apărute în urma dezvoltării de către alte persoane sau implementarea unor noi funcționalități.',
  },
  {
    title: 'Inițierea în E-Commerce',
    description:
      'Instalarea și învățarea unui CMS (Content Management System) precum Wordpress pentru a porni un magazin online și a vinde produse.',
  },
];

const Services: React.FC<SectionProps> = ({ index }) => {
  return (
    <Section index={index} direction="column" gap={config.padding.sectionValue}>
      <Title>Ce pot face pentru tine</Title>

      <Flex direction="column" gap={80} align="flex-start">
        {services.map((service, index) => (
          <Flex key={index} direction="column" gap={40} align="flex-start">
            <SubTitle>{service.title}</SubTitle>
            <Text>{service.description}</Text>
          </Flex>
        ))}
      </Flex>
    </Section>
  );
};

export default Services;
