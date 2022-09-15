import { useState, useEffect } from 'react';

import { getMovies } from 'APIs/themoviedbApi';

export default function Movies() {
  const [searchText, setSearchText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [findedMovies, setFindedMovies] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    setSearchQuery(searchText);
  }

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetchMovies() {
      console.log(searchQuery);
      const data = await getMovies(searchQuery);
      setFindedMovies(data);
      console.log(data);
    }

    fetchMovies();
  }, [searchQuery]);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button type="submit" value="">
        Search
      </button>
      {console.log(findedMovies)}
    </form>
  );
}
