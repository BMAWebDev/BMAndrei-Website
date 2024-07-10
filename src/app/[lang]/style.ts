import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
// constants
import config from '@constants/config';
// components
import Flex, { Card, Col } from '@components/Flex';
import { Text } from '@components/Texts';
import { PrimaryButton, SecondaryButton } from '@components/Buttons';

const HeroColLeft = styled(Col)`
  gap: 90px;

  @media (max-width: ${config.breakpoints.XLarge}px) {
    flex: 1;
  }

  @media (max-width: ${config.breakpoints.Medium}px) {
    gap: 45px;
  }
`;

const HeroColRight = styled(Col)`
  @media (max-width: ${config.breakpoints.XLarge}px) {
    display: none;
  }
`;

const HeroButtonsContainer = styled(Flex)`
  @media (max-width: ${config.breakpoints.Small}px) {
    flex-direction: column;
  }
`;

const HeroLink = styled(Link)`
  @media (max-width: ${config.breakpoints.Small}px) {
    width: 100%;
  }
`;

const HeroPrimaryButton = styled(PrimaryButton)`
  @media (max-width: ${config.breakpoints.XLarge}px) {
    padding: 35px;
  }

  @media (max-width: ${config.breakpoints.Small}px) {
    width: 100%;
    padding: 20px;
  }
`;

const HeroSecondaryButton = styled(SecondaryButton)`
  @media (max-width: ${config.breakpoints.XLarge}px) {
    padding: 35px;
  }

  @media (max-width: ${config.breakpoints.Small}px) {
    width: 100%;
    padding: 20px;
  }
`;

const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;

  @media (min-width: ${config.breakpoints.XXLarge}px) {
    max-height: 600px;
    width: fit-content;
    object-fit: contain;
  }
`;

const CardsContainer = styled(Flex)`
  width: 100%;

  @media (max-width: ${config.breakpoints.Large}px) {
    flex-direction: column;
  }
`;

const SocialMediaCard = styled(Card).attrs({
  flex: 1,
  justify: 'space-between',
})`
  width: 100%;

  @media (max-width: ${config.breakpoints.Medium}px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const SocialMediaCardContent = styled(Flex)`
  @media (max-width: ${config.breakpoints.Small}px) {
    flex-direction: column;
    gap: 30px;
  }
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
  HeroColLeft,
  HeroColRight,
  HeroPrimaryButton,
  HeroSecondaryButton,
  HeroButtonsContainer,
  HeroLink,
  ProfileImage,
  CardsContainer,
  SocialMediaCard,
  SocialMediaIcon,
  SocialMediaCardDescription,
  SocialMediaCardContent,
};
