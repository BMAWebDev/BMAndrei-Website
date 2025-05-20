import styled from 'styled-components';
import NextLink from 'next/link';
// constants
import config from '@constants/config';

export const Link = styled(NextLink)`
  color: ${config.colors.LightBlue} !important;
`;
