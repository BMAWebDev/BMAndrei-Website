import styled from 'styled-components';
// models
import { TextProps } from '@models/texts';
// constants
import config from '@constants/config';

const Text = styled.p<TextProps>`
  color: ${config.colors.White};
  text-decoration: ${({ isUnderline }) => (isUnderline ? 'underline' : 'none')};
  font-size: ${({ size }) =>
    size ? `${size}px` : `${config.text.normal.size}px`};
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'initial')};
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

const Title = styled.h1<TextProps>`
  color: ${config.colors.White};
  font-size: ${config.text.title.size}px;
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

const SubTitle = styled.h2<TextProps>`
  color: ${config.colors.White};
  font-size: ${config.text.subtitle.size}px;
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

export { Text, Title, SubTitle };
