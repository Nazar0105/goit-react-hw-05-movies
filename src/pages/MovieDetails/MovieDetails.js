import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import styles from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
    <div className={styles.container}>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>Genre: {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
      <p>Rating: {movieDetails.vote_average}/10</p>

      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : defaultImg
        }
        alt="Movie Poster"
        width={250}
      />
      <Link className={styles.link} to={`/movies/${movieId}/cast`}>
        Cast
      </Link>
      <Link className={styles.link} to={`/movies/${movieId}/reviews`}>
        Reviews
      </Link>
      <Link className={styles.link} to="/">
        Back to Home
      </Link>

      {/* Використовуйте Outlet для рендерингу вкладених маршрутів */}
      <Outlet />
    </div>
  );
}

export default MovieDetails;


