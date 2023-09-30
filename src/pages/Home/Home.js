import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../api'; // Імпортуємо функцію з api.js
import MoviesList from '../../components/MoviesList/MoviesList';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies() // Використовуйте функцію для отримання списку трендових фільмів
      .then((data) => setTrendingMovies(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MoviesList movies={trendingMovies} />
    </div>
  );
}

export default Home;

