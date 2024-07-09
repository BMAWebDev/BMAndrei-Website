import Image from 'next/image';
import Link from 'next/link';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import Flex from '@components/Flex';
import { SubTitle, Text, Title } from '@components/Texts';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import { PrimaryButton } from '@/components/Buttons';
// style
import Style from './style';

const Contact: React.FC<SectionProps> = ({ index }) => {
  return (
    <Section index={index} direction="column" gap={config.padding.sectionValue}>
      <Flex direction="column" gap={35}>
        <Title>Te-am făcut curios?</Title>
        <SubTitle align="center">
          Haide să discutăm la o cafea despre următoarea ta idee de succes.
        </SubTitle>
      </Flex>

      <Style.ContactRow justify="space-between" isFullWidth>
        <Style.ContactColumn align="flex-start">
          <Text>Scrie-mi pe LinkedIn</Text>
          <Link href={config.socialMedia.linkedin} target="_blank">
            <Image
              src={LinkedInIcon}
              width={245}
              height={245}
              alt="LinkedIn icon"
            />
          </Link>
        </Style.ContactColumn>

        <Style.ContactColumn align="flex-end">
          <Text>Scrie-mi prin formularul de contact</Text>
          <Link href={config.routes.Contact}>
            <PrimaryButton>Contactează-mă</PrimaryButton>
          </Link>
        </Style.ContactColumn>
      </Style.ContactRow>

      <Text align="center">
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
