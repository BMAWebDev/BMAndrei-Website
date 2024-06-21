import styled from 'styled-components';
import Image from 'next/image';
// components
import Flex, { Card } from '@components/Flex';
import { Text } from '@components/Texts';

const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const CardsContainer = styled(Flex)`
  width: 100%;
`;

const SocialMediaCard = styled(Card).attrs({
  flex: 1,
  justify: 'space-between',
})`
  width: 100%;
`;

const SocialMediaIcon = styled(Image)`
  width: 100%;
  flex: 1;
  max-width: 185px;
`;

const SocialMediaCardDescription = styled(Text).attrs({ align: 'center' })`
  display: flex;
  justify-content: right;
  flex: 0.75;
`;

export default {
  ProfileImage,
  Card,
  CardsContainer,
  SocialMediaCard,
  SocialMediaIcon,
  SocialMediaCardDescription,
};
