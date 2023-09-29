import React, { useState } from 'react';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchQuery}&api_key=316b4ff5021b2aca3f42c833755ebf8b`
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img
              src={movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
              }
              alt="Movie Poster"
              width={250}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;

