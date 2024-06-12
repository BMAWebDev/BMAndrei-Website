import styled from 'styled-components';
import Image from 'next/image';
// constants
import config from '@constants/config';
// components
import Flex from '@components/Flex';

const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const CardsContainer = styled(Flex)`
  width: 100%;
`;

const Card = styled(Flex).attrs({
  direction: 'column',
  gap: 30,
  flex: 0.5,
  align: 'flex-start',
})`
  background: ${config.colors.DarkThird};
  border-radius: ${config.borderRadius};
  padding: 30px;
`;

export default { ProfileImage, Card, CardsContainer };
