import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';

function Movies() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}&api_key=316b4ff5021b2aca3f42c833755ebf8b`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <SearchForm onSubmit={handleSearch} />
      <MoviesList movies={searchResults} />
    </div>
  );
}

export default Movies;



