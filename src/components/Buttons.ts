import styled from 'styled-components';
// constants
import config from '@constants/config';

const Button = styled.button`
  border: 1px solid ${config.colors.DarkThird};
  border-radius: ${config.borderRadius.button};
  text-align: center;
  padding: 35px 65px;
  font-size: ${config.text.normal.size}px;
  cursor: pointer;
  font-family: ${config.fontFamily};
  color: ${config.colors.White};
`;

export const PrimaryButton = styled(Button)<{ width?: number | string }>`
  background: ${config.colors.DarkThird};
  width: ${({ width }) =>
    width && (typeof width === 'number' ? `${width}px` : width)};
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
`;
