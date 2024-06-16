import Image from 'next/image';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import Flex, { Col } from '@components/Flex';
import { SubTitle, Text, Title } from '@components/Texts';
import AvatarIcon from '@assets/avatar.png';

const Hero: React.FC<SectionProps> = ({ index }) => {
  return (
    <Section index={index} direction="column" gap={50}>
      <Flex direction="column" align="center">
        <Title>Andrei Bărdiță</Title>
        <SubTitle>Software Developer</SubTitle>
      </Flex>

      <Flex justify="space-between" isFullWidth>
        <Col gap={40}>
          <SubTitle>Despre mine</SubTitle>
          <Text>
            Eu sunt Andrei, am 23 de ani și sunt programator de 4 ani. În timpul
            liber cânt la chitară și mă joc jocuri video.
          </Text>
        </Col>

        <Col flex={0.4}>
          <Image src={AvatarIcon} className="full-size" alt="Avatar icon" />
        </Col>
      </Flex>
    </Section>
  );
};

export default Hero;
