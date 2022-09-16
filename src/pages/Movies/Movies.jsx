import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovies } from 'APIs/themoviedbApi';
import SearchedMovies from '../../components/SearchedMovies/SearchedMovies';

export default function Movies() {
  const [searchText, setSearchText] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');
  const [findedMovies, setFindedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  

  // function onSubmit(e) {
  //   e.preventDefault();
  //   setSearchQuery(searchText);
  // }

  useEffect(() => {
    if (!name) {
      return;
    }
    async function fetchMovies() {
      // console.log(searchQuery);
      const response = await getMovies(name);
      setFindedMovies(response.data.results);
      // console.log(data);
    }

    fetchMovies();
  }, [name]);

  const updateQueryString = e => {
    e.preventDefault();
    const nextSearch = searchText !== '' ? { name: searchText } : {};
    setSearchParams(nextSearch);
  };

  return (
    <>
      <form onSubmit={updateQueryString}>
        <input
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button type="submit" value="">
          Search
        </button>
      </form>
      {findedMovies?.length ? (
        <SearchedMovies movies={findedMovies} goBackParams={searchParams} />
      ) : (
        <p>We do not have any movie for this query.</p>
      )}
    </>
  );
}
