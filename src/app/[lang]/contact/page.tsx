'use client';

import Image from 'next/image';
import Link from 'next/link';
// constants
import config from '@constants/config';
// components
import ContactForm from './ContactForm';
import Section from '@components/Section';
import Flex, { Col } from '@components/Flex';
import { SubTitle, Title } from '@components/Texts';
import LinkedInIcon from '@assets/icons/linkedin.svg';
// style
import Style from './style';

const Contact = () => {
  return (
    <Section index={0} direction="column" gap={config.padding.sectionValue}>
      <Flex direction="column" gap={40}>
        <Title>Contact</Title>
        <SubTitle align="center" style={{ maxWidth: '90%' }}>
          Mă bucur că ai ajuns până aici. Sunt foarte curios de toate planurile
          tale și îmi doresc să vorbim mai multe despre ele. Ce zici, vrei să
          luăm legătura?
        </SubTitle>
      </Flex>

      <Style.PageRow justify="space-between" align="flex-start" isFullWidth>
        <Style.PageCol gap={40}>
          <SubTitle>Formular de contact</SubTitle>

          <ContactForm />
        </Style.PageCol>

        <Style.PageCol align="center" flex={0.25} gap={40}>
          <SubTitle>LinkedIn</SubTitle>

          <Link
            href={config.socialMedia.linkedin}
            style={{ width: '100%' }}
            target="_blank"
          >
            <Image src={LinkedInIcon} alt="LinkedIn icon" />
          </Link>
        </Style.PageCol>
      </Style.PageRow>
    </Section>
  );
};

export default Contact;
