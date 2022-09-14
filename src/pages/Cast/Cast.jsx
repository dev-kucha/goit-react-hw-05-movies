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
      setCredits(resCredits.data.cast);
    }

    fetchCredits();
  }, [movieId]);

  return (
    <>
      <h4>Cast</h4>
      {credits && (
        <ul>
          {credits.map(credit => (
            <li key={credit.id}>
              {credit.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${credit.profile_path}`}
                  alt={credit.name}
                />
              )}
              <p>
                <strong>{credit.name}</strong>{' '}
                {credit.character && <em>({credit.character})</em>}
                <br />
                <br />
                <br />
              </p>
            </li>
          ))}
        </ul>
      )}
      {/* {credits.cast} */}
    </>
  );
}
