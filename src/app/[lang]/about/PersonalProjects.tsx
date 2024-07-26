import Image from 'next/image';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import { Text, Heading2, Heading3 } from '@components/Texts';
import CSharpIcon from '@assets/icons/c-sharp.svg';
import NextJSIcon from '@assets/icons/next-js.svg';
import NodeJSIcon from '@assets/icons/node-js.svg';
// style
import Style from './style';
import { useMemo } from 'react';

interface IProject {
  link: string;
  icon: string;
  title: string;
  description: string;
}

const PersonalProjects: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  const projects: IProject[] = useMemo(
    () => [
      {
        link: 'https://github.com/BMAWebDev/FMKey',
        icon: CSharpIcon,
        title: t('aboutpage.personal_projects.fmkey.title'),
        description: t('aboutpage.personal_projects.fmkey.description'),
      },
      {
        link: 'https://github.com/BMAWebDev/next-three-globe',
        icon: NextJSIcon,
        title: t('aboutpage.personal_projects.next_three_globe.title'),
        description: t(
          'aboutpage.personal_projects.next_three_globe.description',
        ),
      },
      {
        link: 'https://github.com/BMAWebDev/BMASkates',
        icon: NodeJSIcon,
        title: t('aboutpage.personal_projects.bmaskates.title'),
        description: t('aboutpage.personal_projects.bmaskates.description'),
      },
    ],
    [t],
  );

  return (
    <Section index={index} direction="column" gap={config.padding.sectionValue}>
      <Heading2>{t('aboutpage.personal_projects.title')}</Heading2>

      {projects.map((project, index) => (
        <Style.Project key={index} justify="space-between" isFullWidth>
          <Link href={project.link} target="_blank" title={project.title}>
            <Style.ProjectContent gap={45}>
              <Image
                src={project.icon}
                alt="project icon"
                title="project icon"
              />
              <Heading3 isPointer>{project.title}</Heading3>
            </Style.ProjectContent>
          </Link>

          <Text
            align="center"
            style={{ flex: 0.75, display: 'flex', justifyContent: 'right' }}
          >
            {project.description}
          </Text>
        </Style.Project>
      ))}

      <Text>
        <Trans
          components={{
            1: (
              <Link
                href="https://github.com/BMAWebDev"
                target="_blank"
                style={{ color: config.colors.LightBlue }}
                title="Github"
              />
            ),
          }}
        >
          {t('aboutpage.personal_projects.github_page')}
        </Trans>
      </Text>
    </Section>
  );
};

export default PersonalProjects;
