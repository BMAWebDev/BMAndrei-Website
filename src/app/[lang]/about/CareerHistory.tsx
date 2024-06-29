import Image from 'next/image';
import { SectionProps } from '@models/layout';
import Section from '@components/Section';
import { Title, SubTitle, Text } from '@components/Texts';
import Flex, { Col } from '@components/Flex';
import CodeImg from '@assets/code.png';
import TeamImg from '@assets/team.png';

const CareerHistory: React.FC<SectionProps> = ({ index }) => {
  return (
    <Section index={index} direction="column" gap={40}>
      <Title>Istoric Carieră</Title>

      <Flex gap={110}>
        <Col>
          <Image
            src={CodeImg}
            className="full-size"
            alt="Software development image"
          />
        </Col>

        <Col align="flex-end" gap={30}>
          <Title align="right">Software Developer</Title>

          <Text align="right">
            Lucrez ca programator din August 2020. În acest timp mi-am dezvoltat
            abilitățile de programare și administrare a unei echipe și a unei
            infrastructuri curate. Am căpătat o experiență bogată în zona de
            Front-End, folosind framework-uri Javascript cum ar fi Vue sau
            React, dar și in zona de Back-End, unde am căpătat cunoștințe cu
            ajutorul NodeJS și Express.
          </Text>
        </Col>
      </Flex>

      <Flex gap={110}>
        <Col gap={30}>
          <Title align="right">Team Leader</Title>

          <Text>
            Pe parcursul carierei am ocupat de asemenea și poziția de Team
            Leader pentru echipa de Web într-unul dintre locurile de muncă la
            care am fost angajat. În această poziție am administrat o echipă de
            4 oameni pe mai multe proiecte simultan, scrise în diferite
            framework-uri sau limbaje, ducându-le pe toate la final. Totodată am
            păstrat o conexiune strânsă cu clienții firmei, aranjând întâlniri
            periodice pentru actualizarea statusului proiectelor sau pentru noi
            informații în vederea implementării.
          </Text>
        </Col>

        <Col>
          <Image src={TeamImg} className="full-size" alt="Team image" />
        </Col>
      </Flex>
    </Section>
  );
};

export default CareerHistory;
