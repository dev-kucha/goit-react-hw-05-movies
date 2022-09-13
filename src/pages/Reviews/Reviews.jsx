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
      setReviews(resReviews.data);
    }

    fetchReviews();
  }, [movieId]);

  return (
    <>
      <h4>Reviews</h4>
      <p>{console.log(reviews)}</p>
    </>
  );
}
