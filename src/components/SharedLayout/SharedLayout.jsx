import { Outlet } from 'react-router-dom';

import { Container, Header, NavLinkStyled } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <ul>
            <li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="movies">Movies</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="about">About</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="test">Test</NavLinkStyled>
            </li>
          </ul>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
