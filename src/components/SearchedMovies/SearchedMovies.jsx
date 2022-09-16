// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SearchedMovies({ movies }) {
  //   const [trandsMovies, setTrandsMovies] = useState([]);
  // console.log(`trandsMovies: ${trandsMovies}`);

  //   useEffect(() => {
  //     async function fetchTrending() {
  //       const data = await getTrendingToday();
  //       setTrandsMovies(data);
  //       //   console.log(data);
  //     }

  //     fetchTrending();
  //     //   .then(movies => setTrandsMovies(() => movies));
  //     //   .then(res => {

  //     // return res;
  //     // });
  //     //   .then(res => console.log(typeof res));
  //   }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
