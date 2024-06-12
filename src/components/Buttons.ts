import styled from 'styled-components';
// constants
import config from '@constants/config';

const Button = styled.button`
  border: 1px solid ${config.colors.DarkBtn};
  border-radius: 25px;
  text-align: center;
  padding: 15px 25px;
  font-size: 20px;
  cursor: pointer;
  font-family: ${config.fontFamily};
  color: ${config.colors.White};
`;

export const PrimaryButton = styled(Button)`
  background: ${config.colors.DarkBtn};
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
`;
