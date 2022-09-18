import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingToday } from '../../APIs/themoviedbApi';

export default function TrendingToday() {
  const [trandsMovies, setTrandsMovies] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const data = await getTrendingToday();
      setTrandsMovies(data);
    }
    fetchTrending();
  }, []);

  return (
    trandsMovies.length > 0 && (
      <ul>
        {trandsMovies.map(trandsMovie => (
          <li key={trandsMovie.id}>
            <Link to={`movies/${trandsMovie.id}`} state={{ from: '/home' }}>
              {trandsMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}
