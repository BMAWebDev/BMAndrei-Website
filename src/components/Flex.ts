import styled from 'styled-components';
// constants
import config from '@constants/config';
// models
import { FlexProps } from '@models/layout';

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => `${gap}px`};
  align-items: ${({ align }) => align || 'center'};
  flex: ${({ flex }) => flex};
  align-self: ${({ alignSelf }) => alignSelf};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

export const Col = styled(Flex).attrs({
  direction: 'column',
})<{
  flex?: number;
}>`
  flex: ${({ flex }) => flex || 0.5};
  align-items: ${({ align }) => align || 'flex-start'};
`;

export const Card = styled(Flex)`
  background: ${config.colors.DarkThird};
  border-radius: ${config.borderRadius.normal};
  padding: 60px;
`;

export default Flex;
