import Image from 'next/image';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import Flex, { Col } from '@components/Flex';
import { SubTitle, Text, Title } from '@components/Texts';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import { PrimaryButton } from '@/components/Buttons';
import Link from 'next/link';

const Contact: React.FC<SectionProps> = ({ index }) => {
  return (
    <Section index={index} direction="column" gap={config.padding.sectionValue}>
      <Flex direction="column" gap={35}>
        <Title>Te-am făcut curios?</Title>
        <SubTitle>
          Haide să discutăm la o cafea despre următoarea ta idee de succes.
        </SubTitle>
      </Flex>

      <Flex justify="space-between" align="flex-start" isFullWidth>
        <Col gap={40} align="center">
          <Text>Scrie-mi pe LinkedIn</Text>
          <Link href={config.socialMedia.linkedin} target="_blank">
            <Image src={LinkedInIcon} alt="LinkedIn icon" />
          </Link>
        </Col>

        <Col gap={40} align="center">
          <Text>Scrie-mi prin formularul de contact</Text>
          <Link href={config.routes.Contact}>
            <PrimaryButton>Contactează-mă</PrimaryButton>
          </Link>
        </Col>
      </Flex>

      <Text>
        Îmi poți vizualiza între timp CV-ul{' '}
        <Link
          href={config.routes.CV}
          style={{ color: config.colors.LightBlue }}
        >
          aici
        </Link>
        .
      </Text>
    </Section>
  );
};

export default Contact;
