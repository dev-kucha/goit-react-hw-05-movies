import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCredits } from 'APIs/themoviedbApi';

export default function Cast() {
  const { movieId } = useParams();
  // console.log(movieId);

  const [credits, setCredits] = useState(null);

  useEffect(() => {
    // console.log(movieId);
    // console.log(Number(movieId));
    async function fetchCredits() {
      const resCredits = await getCredits(movieId);
      // console.log(resMovie.data);
      // console.log(resMovie.data.original_title);
      // console.log(resMovie.data.poster_path);
      setCredits(resCredits.data);
    }

    fetchCredits();
  }, [movieId]);

  return (
    <>
      <h4>Cast</h4>
      <p>{console.log(credits)}</p>
    </>
  );
}
