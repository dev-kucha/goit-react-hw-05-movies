import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovie } from 'APIs/themoviedbApi';
// import GoBack from '../../components/GoBack/GoBack';
import BackLink from '../../components/BackLink/BackLink';

import { NavLinkStyled } from './MovieDetails.styled';

export default function MovieDetails({ from }) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const getGenresList = genresArr => {
    return genresArr.map(genre => genre.name).join(', ');
  };

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies'; ///???

  useEffect(() => {
    async function fetchMovie() {
      const resMovie = await getMovie(movieId);
      setMovie(resMovie.data);
    }

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { id, poster_path, original_title, release_date, overview, genres } =
    movie;

  return (
    <>
      {/* <GoBack from={location.state} /> */}
      <BackLink to={backLinkHref}>Back</BackLink>
      <p style={{ fontSize: 0.6 + 'em' }}>id: {id}</p>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={`${original_title} poster`}
        />
      )}

      <h1>
        {original_title} ({new Date(release_date).getFullYear()})
      </h1>
      {overview && (
        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      )}

      {genres && (
        <div>
          <h2>Genres</h2>
          <p>{getGenresList(genres)}</p>
        </div>
      )}

      <h4>Addition Information</h4>
      <ul>
        <li>
          <NavLinkStyled to="cast" state={{ from: backLinkHref }}>
            Cast
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </NavLinkStyled>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
