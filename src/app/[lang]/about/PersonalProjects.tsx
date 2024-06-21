// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import Flex, { Card } from '@components/Flex';
import { Text, Title } from '@components/Texts';
import CSharpIcon from '@assets/icons/c-sharp.svg';
import NextJSIcon from '@assets/icons/next-js.svg';
import NodeJSIcon from '@assets/icons/node-js.svg';
import Image from 'next/image';
import Link from 'next/link';

interface IProject {
  link: string;
  icon: string;
  title: string;
  description: string;
}

const projects: IProject[] = [
  {
    link: 'https://github.com/BMAWebDev/FMKey',
    icon: CSharpIcon,
    title: 'FMKey',
    description: 'Un magazin virtual 3D în WebGL, scris în C# prin Unity.',
  },
  {
    link: 'https://github.com/BMAWebDev/next-three-globe',
    icon: NextJSIcon,
    title: 'Next Three Globe',
    description:
      'Proiect scris în NextJS care redă un glob 3D în ThreeJS ce poate fi rotit și mărit, pentru a vedea diferiți parteneri la nivel mondial.',
  },
  {
    link: 'https://github.com/BMAWebDev/BMASkates',
    icon: NodeJSIcon,
    title: 'BMASkates',
    description:
      'Aplicație Full-stack cu Javascript vanilla în Front-End și NodeJS + Express în Back-End. Serverul funcționează atât pe metoda views, cât și pe REST API.',
  },
];

const PersonalProjects: React.FC<SectionProps> = ({ index }) => {
  return (
    <Section index={index} direction="column" gap={config.padding.sectionValue}>
      <Title>Proiecte personale</Title>

      {projects.map((project, index) => (
        <Card key={index} justify="space-between" isFullWidth>
          <Link href={project.link} target="_blank">
            <Flex gap={45}>
              <Image src={project.icon} alt="project icon" />
              <Text isPointer>{project.title}</Text>
            </Flex>
          </Link>

          <Text
            align="center"
            style={{ flex: 0.75, display: 'flex', justifyContent: 'right' }}
          >
            {project.description}
          </Text>
        </Card>
      ))}

      <Text>
        Pentru mai multe informații, accesează{' '}
        <Link
          href="https://github.com/BMAWebDev"
          target="_blank"
          style={{ color: config.colors.LightBlue }}
        >
          pagina de Github
        </Link>
        .
      </Text>
    </Section>
  );
};

export default PersonalProjects;
