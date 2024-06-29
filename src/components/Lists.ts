import styled from 'styled-components';
// constants
import config from '@constants/config';

export const UList = styled.ul`
  list-style: none;

  li {
    color: ${config.colors.White};
    font-size: ${config.text.normal.size}px;
  }
`;

export const OList = styled.ol`
  list-style: decimal;
  padding-left: 27px;

  li {
    color: ${config.colors.White};
    font-size: ${config.text.normal.size}px;
  }
`;
