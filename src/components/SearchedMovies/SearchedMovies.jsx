// import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SearchedMovies({ movies }) {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`} state={location}>
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </Link>
        </li>
      ))}
    </ul>
  );
}
