import { Outlet, useParams } from 'react-router-dom';

import { NavLinkStyled } from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <>
      <div>MovieDetails</div>
      <ul>
        <li>
          <NavLinkStyled to="cast">Cast</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="reviews">Reviews</NavLinkStyled>
        </li>
      </ul>
      <p>{movieId}</p>
      <Outlet />
    </>
  );
}
