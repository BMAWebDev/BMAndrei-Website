import styled from 'styled-components';
// config
import config from '@constants/config';
// components
import Flex, { Card, Col } from '@components/Flex';

const HeroRow = styled(Flex)``;

const HeroCol = styled(Col)`
  @media (max-width: ${config.breakpoints.Medium}px) {
    flex: 1;
  }
`;

const CareerHistoryPosition = styled(Flex)<{ isReversed?: boolean }>`
  gap: 50px;

  @media (max-width: ${config.breakpoints.Medium}px) {
    flex-direction: ${({ isReversed }) =>
      isReversed ? 'column-reverse' : 'column'};
    gap: 20px;
  }
`;

const CareerHistoryColumn = styled(Col)`
  gap: 30px;

  @media (max-width: ${config.breakpoints.Medium}px) {
    gap: 20px;

    h1 {
      align-self: start;
    }

    p {
      text-align: left;
    }
  }
`;

const Project = styled(Card)`
  @media (max-width: ${config.breakpoints.Medium}px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: ${config.breakpoints.Small}px) {
    padding: 20px;
  }
`;

const ProjectContent = styled(Flex)`
  @media (max-width: ${config.breakpoints.Medium}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ContactRow = styled(Flex)`
  align-items: flex-start;
  gap: 20px;

  @media (max-width: ${config.breakpoints.Small}px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const ContactColumn = styled(Flex).attrs({ direction: 'column' })`
  align-items: flex-start;
  gap: 40px;

  @media (max-width: ${config.breakpoints.Small}px) {
    gap: 20px;
    align-items: center;
  }
`;

export default {
  HeroRow,
  HeroCol,
  CareerHistoryPosition,
  CareerHistoryColumn,
  Project,
  ProjectContent,
  ContactRow,
  ContactColumn,
};
