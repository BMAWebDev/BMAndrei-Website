import styled from 'styled-components';
// constants
import config from '@constants/config';

const Text = styled.p<{
  isUnderline?: boolean;
  size?: number;
  isPointer?: boolean;
}>`
  color: ${config.colors.White};
  text-decoration: ${({ isUnderline }) => isUnderline && 'underline'};
  font-size: ${({ size }) => (size ? `${size}px` : '25px')};
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'initial')};
`;

const Title = styled.h1`
  color: ${config.colors.White};
  font-size: 40px;
`;

const SubTitle = styled.h2`
  color: ${config.colors.White};
  font-size: 26px;
`;

export { Text, Title, SubTitle };
