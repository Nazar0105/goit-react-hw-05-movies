import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import { fetchSearchMovies } from '../../api'; // Імпортуємо функцію для пошуку фільмів

function Movies() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    fetchSearchMovies(query) // Використовуємо функцію для пошуку фільмів
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



