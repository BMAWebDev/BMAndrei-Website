import styled from 'styled-components';
// constants
import config from '@constants/config';
// components
import { Heading2, Heading3 } from '../Texts';
import Flex from '../Flex';

const Wrapper = styled.div`
  background: ${config.colors.DarkSecondary};
`;

const Container = styled(Flex)`
  padding: ${config.padding.page};
  max-width: ${config.maxWidth}px;
  margin: 0 auto;

  @media (max-width: ${config.breakpoints.Large}px) {
    padding: ${config.padding.mobile};
  }
`;

const ColumnsContainer = styled(Flex)`
  @media (max-width: ${config.breakpoints.Medium}px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Col = styled(Flex).attrs({
  direction: 'column',
})`
  align-self: flex-start;
  gap: 48px;

  @media (max-width: ${config.breakpoints.Medium}px) {
    align-self: center;
    gap: 30px;
  }
`;

const ColTitle = styled(Heading2).attrs({ size: 40 })``;

const ColText = styled(Heading3).attrs({ isPointer: true })``;

const IconsContainer = styled(Flex)``;

const Style = {
  Wrapper,
  Container,
  ColumnsContainer,
  Col,
  ColTitle,
  ColText,
  IconsContainer,
};

export default Style;
