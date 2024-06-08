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
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'normal')};
`;

const Title = styled.h1``;

const SubTitle = styled.h2``;

export { Text, Title, SubTitle };
