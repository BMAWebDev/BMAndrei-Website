'use client';

import { Trans, useTranslation } from 'react-i18next';
import { useMemo } from 'react';
// constants
import config from '@constants/config';
// components
import Section from '@components/Section';
import Flex from '@components/Flex';
import { Heading1, Heading2, Text } from '@components/Texts';
// style
import { Link } from './style';

interface IElement {
  title: string;
  description: string;
}

const Wrapper = () => {
  const { t } = useTranslation();

  const elements: IElement[] = useMemo(
    () => [
      {
        title: t('gdprpage.sections.who_am_i.title'),
        description: t('gdprpage.sections.who_am_i.description'),
      },
      {
        title: t('gdprpage.sections.website_intent.title'),
        description: t('gdprpage.sections.website_intent.description'),
      },
      {
        title: t('gdprpage.sections.contact_form.title'),
        description: t('gdprpage.sections.contact_form.description'),
      },
      {
        title: t('gdprpage.sections.cookies.title'),
        description: t('gdprpage.sections.cookies.description'),
      },
      {
        title: t('gdprpage.sections.storing_data.title'),
        description: t('gdprpage.sections.storing_data.description'),
      },
      {
        title: t('gdprpage.sections.sharing_data.title'),
        description: t('gdprpage.sections.sharing_data.description'),
      },
      {
        title: t('gdprpage.sections.contact_info.title'),
        description: t('gdprpage.sections.contact_info.description'),
      },
    ],
    [t],
  );

  return (
    <Section index={0} gap={50} direction="column">
      <Flex direction="column" gap={10}>
        <Heading1 align="center">{t('gdprpage.title')}</Heading1>
        <Text>{t('gdprpage.last_modified_date')}</Text>
      </Flex>

      <Flex direction="column" gap={35} isFullWidth>
        {elements.map((element, index) => (
          <Flex
            key={index}
            align="flex-start"
            direction="column"
            gap={20}
            isFullWidth
          >
            <Heading2>{element.title}</Heading2>

            <Text>
              <Trans
                components={{
                  url: (
                    <Link
                      href={config.mainWebsite}
                      target="_blank"
                      title="Main website URL"
                    />
                  ),
                  email: (
                    <Link
                      href={`mailto:${config.contactEmail}`}
                      target="_blank"
                      title="Contact mail"
                    />
                  ),
                  strong: <span style={{ color: config.colors.LightBlue }} />,
                }}
              >
                {element.description}
              </Trans>
            </Text>
          </Flex>
        ))}
      </Flex>
    </Section>
  );
};

export default Wrapper;
