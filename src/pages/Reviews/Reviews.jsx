import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'APIs/themoviedbApi';

export default function Reviews() {
  const { movieId } = useParams();
  //   console.log(movieId);

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    // console.log(movieId);
    // console.log(Number(movieId));
    async function fetchReviews() {
      const resReviews = await getReviews(movieId);
      // console.log(resMovie.data);
      // console.log(resMovie.data.original_title);
      // console.log(resMovie.data.poster_path);
      setReviews(resReviews.data.results);
    }

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>
                <strong>{review.author}</strong>
              </p>
              <p>{review.content}</p>
              <br />
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </>
  );
}
