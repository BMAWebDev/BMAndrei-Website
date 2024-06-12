import styled from 'styled-components';
// constants
import config from '@constants/config';

const Button = styled.button`
  border: 1px solid ${config.colors.DarkThird};
  border-radius: ${config.borderRadius};
  text-align: center;
  padding: 15px 25px;
  font-size: 20px;
  cursor: pointer;
  font-family: ${config.fontFamily};
  color: ${config.colors.White};
`;

export const PrimaryButton = styled(Button)`
  background: ${config.colors.DarkThird};
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
`;
