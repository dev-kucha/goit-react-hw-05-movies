import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingToday } from '../../APIs/themoviedbApi';

export default function TrendingToday() {
  const [trandsMovies, setTrandsMovies] = useState([]);
  // console.log(`trandsMovies: ${trandsMovies}`);

  useEffect(() => {
    async function fetchTrending() {
      const data = await getTrendingToday();
      setTrandsMovies(data);
      //   console.log(data);
    }

    fetchTrending();
    //   .then(movies => setTrandsMovies(() => movies));
    //   .then(res => {

    // return res;
    // });
    //   .then(res => console.log(typeof res));
  }, []);

  return (
    trandsMovies.length > 0 && (
      <ul>
        {trandsMovies.map(trandsMovie => (
          <li key={trandsMovie.id}>
            <Link to={`movies/${trandsMovie.id}`} state={{ pathname: '/home' }}>
              {trandsMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}
