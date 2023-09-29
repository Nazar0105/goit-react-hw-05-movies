import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=316b4ff5021b2aca3f42c833755ebf8b`
    )
      .then((response) => response.json())
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
            {actor.profile_path && ( // Перевірка наявності фото актора
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={`${actor.name}'s profile`}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;

