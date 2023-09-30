import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const defaultMessage = 'No reviews for this movie yet.';

  useEffect(() => {
    // Отримайте огляди фільму за допомогою movieId і встановіть їх у стан компонента
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=316b4ff5021b2aca3f42c833755ebf8b`
    )
      .then((response) => response.json())
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


