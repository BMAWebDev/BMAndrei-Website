import styled from 'styled-components';
// constants
import config from '@constants/config';
// models
import { SectionProps } from '@models/layout';
import Flex from '../Flex';

const SectionWrapper = styled.div<SectionProps>`
  background: ${({ index }) => (index % 2 === 0 ? '#111530' : '#0F122B')};
`;

const SectionContainer = styled(Flex)`
  padding: ${config.padding.section};
  max-width: ${config.maxWidth}px;
  margin: 0 auto;

  @media (max-width: ${config.breakpoints.Large}px) {
    padding: ${config.padding.mobile};
  }
`;

const Style = { SectionWrapper, SectionContainer };

export default Style;
