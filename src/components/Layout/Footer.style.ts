import styled from 'styled-components';
// constants
import config from '@constants/config';
// components
import { Text } from '../Texts';
import Flex from '../Flex';

const Wrapper = styled.div`
  background: ${config.colors.DarkSecondary};
`;

const Container = styled(Flex)`
  padding: ${config.padding.page};
  max-width: ${config.maxWidth}px;
  margin: 0 auto;
`;

const Col = styled(Flex).attrs({
  direction: 'column',
  alignSelf: 'flex-start',
  gap: 48,
})``;

const ColTitle = styled(Text).attrs({ size: 40 })``;

const ColText = styled(Text).attrs({ isPointer: true })``;

const IconsContainer = styled(Flex)``;

export default { Wrapper, Container, Col, ColTitle, ColText, IconsContainer };
