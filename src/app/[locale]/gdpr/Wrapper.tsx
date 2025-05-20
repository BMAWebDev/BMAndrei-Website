'use client';

import { useTranslations } from 'next-intl';
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
  const t = useTranslations();

  const elements: IElement[] = useMemo(
    () => [
      {
        title: t('gdprpage.sections.who_am_i.title'),
        description: 'gdprpage.sections.who_am_i.description',
      },
      {
        title: t('gdprpage.sections.website_intent.title'),
        description: 'gdprpage.sections.website_intent.description',
      },
      {
        title: t('gdprpage.sections.contact_form.title'),
        description: 'gdprpage.sections.contact_form.description',
      },
      {
        title: t('gdprpage.sections.cookies.title'),
        description: 'gdprpage.sections.cookies.description',
      },
      {
        title: t('gdprpage.sections.storing_data.title'),
        description: 'gdprpage.sections.storing_data.description',
      },
      {
        title: t('gdprpage.sections.sharing_data.title'),
        description: 'gdprpage.sections.sharing_data.description',
      },
      {
        title: t('gdprpage.sections.contact_info.title'),
        description: 'gdprpage.sections.contact_info.description',
      },
    ],
    [t],
  );

  return (
    <Section index={0} gap={50} direction="column">
      <Flex direction="column" gap={10}>
        <Heading1 align="center" style={{ textTransform: 'capitalize' }}>
          {t('gdprpage.title')}
        </Heading1>
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
              {t.rich(element.description, {
                url: (chunks) => (
                  <Link
                    href={config.mainWebsite}
                    target="_blank"
                    title="Main website URL"
                  >
                    {chunks}
                  </Link>
                ),
                email: (chunks) => (
                  <Link
                    href={`mailto:${config.contactEmail}`}
                    target="_blank"
                    title="Contact mail"
                  >
                    {chunks}
                  </Link>
                ),
                strong: (chunks) => (
                  <span style={{ color: config.colors.LightBlue }}>
                    {chunks}
                  </span>
                ),
              })}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Section>
  );
};

export default Wrapper;
