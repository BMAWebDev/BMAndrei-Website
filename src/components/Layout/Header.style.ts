import styled from 'styled-components';
import { default as NextLink } from 'next/link';
// constants
import config from '@constants/config';
// components
import Flex from '@components/Flex';

const Wrapper = styled(Flex)`
  padding: ${config.padding.page};
  background: ${config.colors.DarkPrimary};
`;

const Link = styled(NextLink)`
  text-decoration: none;
`;

export default { Wrapper, Link };
