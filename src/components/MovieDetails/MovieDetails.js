import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=316b4ff5021b2aca3f42c833755ebf8b`
    )
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
