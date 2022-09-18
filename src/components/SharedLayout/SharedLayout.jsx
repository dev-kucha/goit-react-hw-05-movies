import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, NavLinkStyled } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <ul>
            <li>
              <NavLinkStyled to="home">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="movies">Movies</NavLinkStyled>
            </li>
          </ul>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
