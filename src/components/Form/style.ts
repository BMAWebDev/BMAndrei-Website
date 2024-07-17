import styled from 'styled-components';
import { Field } from 'formik';
// constants
import config from '@constants/config';
// components
import { Text } from '../Texts';

const Input = styled(Field)`
  width: 100%;
  padding: 10px 35px;
  border-radius: ${config.borderRadius.input};
  border: 1px solid #fff;
  font-size: ${config.text.normal.size}px;

  &::placeholder {
    font-weight: bold;
    color: ${config.colors.Black};
  }
`;

const Error = styled(Text).attrs({ size: 14 })`
  color: ${config.colors.Red};
`;

const Style = { Input, Error };

export default Style;
