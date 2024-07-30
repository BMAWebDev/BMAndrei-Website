import styled from 'styled-components';
// models
import { TextProps } from '@models/texts';
// constants
import config from '@constants/config';

const Text = styled.p<TextProps>`
  color: ${({ color }) => color || config.colors.White};
  text-decoration: ${({ isUnderline }) => (isUnderline ? 'underline' : 'none')};
  font-size: ${({ size }) =>
    size ? `${size}px` : `${config.text.normal.size}px`};
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'initial')};
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
  align-self: ${({ alignSelf }) => alignSelf || 'auto'};
`;

const Heading1 = styled.h1<TextProps>`
  color: ${config.colors.White};
  font-size: ${config.text.title.size}px;
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

const Heading2 = styled.h2<TextProps>`
  color: ${config.colors.White};
  font-size: ${({ size }) =>
    size ? `${size}px` : `${config.text.heading2.size}px`};
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

const Heading3 = styled.h3<TextProps>`
  color: ${config.colors.White};
  font-size: ${config.text.heading3.size}px;
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

const Heading4 = styled.h4<TextProps>`
  color: ${config.colors.White};
  font-size: ${config.text.heading4.size}px;
  text-align: ${({ align }) => align};
  width: ${({ isFullWidth }) => isFullWidth && '100%'};
`;

export { Text, Heading1, Heading2, Heading3, Heading4 };
