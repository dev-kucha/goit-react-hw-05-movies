import { useState, useEffect } from 'react';

export default function TrendingToday() {
  const [trandsMovies, setTrandsMovies] = useState([]);
  useEffect(() => {
    console.log('TrandsMovies');
    setTrandsMovies(['a', 'b', 'c', 'd']);
  }, []);

  return (
    <ul>
      <li>Trend 1</li>
      <li>{trandsMovies}</li>
    </ul>
  );
}
