import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api'; // Імпортуємо функцію з api.js
// eslint-disable-next-line
 import styles from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    fetchMovieCredits(movieId) // Використовуйте функцію для отримання інформації про акторів
      .then((data) => setCast(data.cast))
      .catch((error) => console.error('Error fetching data:', error));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.name}
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={`${actor.name}'s profile`}
                width={250}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;



