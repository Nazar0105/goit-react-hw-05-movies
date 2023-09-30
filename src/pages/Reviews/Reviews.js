import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api'; // Імпортуємо функцію з api.js

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const defaultMessage = 'No reviews for this movie yet.';

  useEffect(() => {
    if (!movieId) return;

    fetchMovieReviews(movieId) // Використовуйте функцію для отримання оглядів
      .then((data) => setReviews(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>{defaultMessage}</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews;


