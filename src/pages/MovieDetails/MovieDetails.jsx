import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovie } from 'APIs/themoviedbApi';
import GoBack from '../../components/GoBack/GoBack';

import { NavLinkStyled } from './MovieDetails.styled';

export default function MovieDetails({ from }) {
  const { movieId } = useParams();
  // console.log(movieId);
  const [movie, setMovie] = useState(null);

  const getGenresList = genresArr => {
    return genresArr.map(genre => genre.name).join(', ');
  };

  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    // console.log(movieId);
    // console.log(Number(movieId));
    async function fetchMovie() {
      const resMovie = await getMovie(movieId);
      // console.log(resMovie.data);
      // console.log(resMovie.data.original_title);
      // console.log(resMovie.data.poster_path);
      setMovie(resMovie.data);
    }

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <GoBack from={location.state} />
      <p style={{ fontSize: 0.6 + 'em' }}>id: {movieId}</p>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`${movie.original_title} poster`}
        />
      )}

      <h1>
        {movie.original_title} ({new Date(movie.release_date).getFullYear()})
      </h1>
      {movie.overview && (
        <div>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
      )}

      {movie.genres && (
        <div>
          <h2>Genres</h2>
          {/* <p>{console.log(movie.genres)}</p>; */}
          <p>{getGenresList(movie.genres)}</p>
        </div>
      )}

      <h4>Addition Information</h4>
      <ul>
        <li>
          <NavLinkStyled to="cast">Cast</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="reviews">Reviews</NavLinkStyled>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
