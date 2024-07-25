'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
// constants
import config from '@constants/config';
// components
import ContactForm from './ContactForm';
import Section from '@components/Section';
import Flex from '@components/Flex';
import { Heading2, Heading1 } from '@components/Texts';
import LinkedInIcon from '@assets/icons/linkedin.svg';
// style
import Style from './style';

const Wrapper = () => {
  const { t } = useTranslation();

  return (
    <Section index={0} direction="column" gap={config.padding.sectionValue}>
      <Flex direction="column" gap={40}>
        <Heading1>Contact</Heading1>
        <Style.PageHeading2 align="center">
          {t('contactpage.hero.subtitle')}
        </Style.PageHeading2>
      </Flex>

      <Style.PageRow justify="space-between" align="flex-start" isFullWidth>
        <Style.PageCol gap={40}>
          <Heading2>{t('contactpage.form.title')}</Heading2>

          <ContactForm />
        </Style.PageCol>

        <Style.PageCol align="center" flex={0.25} gap={40}>
          <Heading2>LinkedIn</Heading2>

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

export default Wrapper;
