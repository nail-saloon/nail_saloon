import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES } from '../../../constants/fonts';

export const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;

export const NavLink = styled(Link)`
  color: ${COLORS.xiketic};
  text-decoration: none;

  &.active {
    color: #a55c7c;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 4rem;
  font-size: ${FONTSIZES.xsmall};
`;
