import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;


