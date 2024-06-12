import styled from 'styled-components';
// models
import { FlexProps } from '@models/layout';

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => `${gap}px`};
  align-items: ${({ align }) => align || 'center'};
`;

export const Col = styled(Flex).attrs({
  direction: 'column',
  align: 'flex-start',
})<{
  flex?: number;
}>`
  flex: ${({ flex }) => flex || 0.5};
`;

export default Flex;
