import Image from 'next/image';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import Flex from '@components/Flex';
import { Heading2, Text, Heading1 } from '@components/Texts';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import { PrimaryButton } from '@/components/Buttons';
// style
import Style from './style';

const Contact: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} direction="column" gap={config.padding.sectionValue}>
      <Flex direction="column" gap={35}>
        <Heading1>{t('aboutpage.contact.title')}</Heading1>
        <Heading2 align="center">{t('aboutpage.contact.subtitle')}</Heading2>
      </Flex>

      <Style.ContactRow justify="space-between" isFullWidth>
        <Style.ContactColumn align="flex-start">
          <Text>{t('aboutpage.contact.write_through_linkedin')}</Text>
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
          <Text>{t('aboutpage.contact.write_through_contact_form')}</Text>
          <Link href={config.routes.Contact}>
            <PrimaryButton>
              {t('aboutpage.contact.contact_me_button')}
            </PrimaryButton>
          </Link>
        </Style.ContactColumn>
      </Style.ContactRow>

      <Text align="center">
        <Trans
          components={{
            1: (
              <a
                href={config.routes.CV}
                style={{ color: config.colors.LightBlue }}
                download
              />
            ),
          }}
        >
          {t('aboutpage.contact.view_my_cv_here')}
        </Trans>
      </Text>
    </Section>
  );
};

export default Contact;
