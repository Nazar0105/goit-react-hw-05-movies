export const fetchTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=316b4ff5021b2aca3f42c833755ebf8b`
  ).then((response) => response.json());
};

export const fetchMovieCredits = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=316b4ff5021b2aca3f42c833755ebf8b`
  ).then((response) => response.json());
};

export const fetchMovieReviews = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=316b4ff5021b2aca3f42c833755ebf8b`
  ).then((response) => response.json());
};

export const fetchSearchMovies = (query) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}&api_key=316b4ff5021b2aca3f42c833755ebf8b`
  ).then((response) => response.json());
};

export const fetchMovieDetails = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=316b4ff5021b2aca3f42c833755ebf8b`
  ).then((response) => response.json());
};

