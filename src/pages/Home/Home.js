import React, { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'; // Правильний шлях до SearchForm
import MoviesList from '../../components/MoviesList/MoviesList'; // Правильний шлях до MoviesList

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // Стан для зберігання результатів пошуку

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=316b4ff5021b2aca3f42c833755ebf8b`
    )
      .then((response) => response.json())
      .then((data) => setTrendingMovies(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Функція, яка буде викликана при подачі форми пошуку
  const handleSearch = (query) => {
  // Виконати запит до API для пошуку за заданим запитом (query)
  fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}&api_key=316b4ff5021b2aca3f42c833755ebf8b`)
    .then((response) => response.json())
    .then((data) => {
      // Отримані дані записати до стану searchResults
      setSearchResults(data.results);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};


  return (
    <div>
      <h2>Trending Movies</h2>
      {/* Включаємо компонент форми пошуку та передаємо функцію handleSearch */}
      <SearchForm onSubmit={handleSearch} />
      {/* Включаємо компонент для відображення списку фільмів і передаємо результати пошуку */}
      <MoviesList movies={searchResults.length > 0 ? searchResults : trendingMovies} />
    </div>
  );
}

export default Home;