import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCredits } from 'APIs/themoviedbApi';

export default function Cast() {
  const { movieId } = useParams();

  const [credits, setCredits] = useState(null);

  useEffect(() => {
    async function fetchCredits() {
      const resCredits = await getCredits(movieId);
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
