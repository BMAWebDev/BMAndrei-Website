import styled from 'styled-components';
// models
import { TextProps } from '@models/texts';
// constants
import config from '@constants/config';

const Text = styled.p<TextProps>`
  color: ${config.colors.White};
  text-decoration: ${({ isUnderline }) => isUnderline && 'underline'};
  font-size: ${({ size }) => (size ? `${size}px` : '20px')};
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'initial')};
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

const Title = styled.h1<TextProps>`
  color: ${config.colors.White};
  font-size: 40px;
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

const SubTitle = styled.h2<TextProps>`
  color: ${config.colors.White};
  font-size: 26px;
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

export { Text, Title, SubTitle };
