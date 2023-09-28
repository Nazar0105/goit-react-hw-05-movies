import React from 'react';

const Home = React.lazy(() => import('./components/Home/Home'));
const Movies = React.lazy(() => import('./components/Movies/Movies'));
const MovieDetails = React.lazy(() => import('./components/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./components/Cast/Cast'));
const Reviews = React.lazy(() => import('./components/Reviews/Reviews'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/movies/:movieId',
    element: <MovieDetails />,
  },
  {
    path: '/movies/:movieId/cast',
    element: <Cast />,
  },
  {
    path: '/movies/:movieId/reviews',
    element: <Reviews />,
  },
];

export default routes;
