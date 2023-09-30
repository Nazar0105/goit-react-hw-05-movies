import React, { useEffect, useState } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=316b4ff5021b2aca3f42c833755ebf8b`
    )
      .then((response) => response.json())
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
