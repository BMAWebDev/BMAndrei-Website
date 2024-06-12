import styled from 'styled-components';
import { default as NextLink } from 'next/link';
// constants
import config from '@constants/config';
// components
import Flex from '@components/Flex';

const Wrapper = styled.div`
  background: ${config.colors.DarkPrimary};
`;

const Container = styled(Flex)`
  padding: ${config.padding.page};
  max-width: ${config.maxWidth}px;
  margin: 0 auto;
`;

const Link = styled(NextLink)`
  text-decoration: none;
`;

export default { Wrapper, Link, Container };
