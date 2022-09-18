import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;
