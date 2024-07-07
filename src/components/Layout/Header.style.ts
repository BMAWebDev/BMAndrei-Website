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

  @media (max-width: ${config.breakpoints.Large}px) {
    padding: ${config.padding.mobile};
  }
`;

const Link = styled(NextLink)`
  text-decoration: none;
`;

const MobileMenu = styled(Flex)<{ isActive?: boolean }>`
  position: fixed;
  background: ${config.colors.DarkPrimary};
  border-left: 1px solid ${config.colors.DarkSecondary};
  box-shadow: -2px 5px 18px 15px ${config.colors.DarkSecondary};
  top: 0;
  height: 100vh;
  min-width: 40vw;
  padding: 20px;
  right: ${({ isActive }) => (isActive ? 0 : -350)}px;
  transition: right 1.5s;

  @media (max-width: ${config.breakpoints.Small}px) {
    right: ${({ isActive }) => (isActive ? 0 : -250)}px;
  }
`;

const BurgerToggle = styled(Flex)<{ isActive: boolean }>`
  z-index: 1;
  position: ${({ isActive }) => (isActive ? 'fixed' : 'static')};
  top: 35px;
  right: 20px;
`;

const BurgerMenuLine = styled.div<{ index: number; isActive: boolean }>`
  background: ${config.colors.White};
  height: 1px;
  width: 25px;
  transform: ${({ isActive, index }) =>
    isActive ? `rotate(${index === 0 ? '' : '-'}45deg)` : 'none'};
  ${({ index, isActive }) => isActive && index === 1 && 'margin-top: -10px;'}
  transition: margin-top .75s, transform .75s;
`;

export default {
  Wrapper,
  Link,
  Container,
  MobileMenu,
  BurgerToggle,
  BurgerMenuLine,
};
