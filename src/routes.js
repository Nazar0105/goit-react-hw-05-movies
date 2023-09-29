import React from 'react';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Movies = React.lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = React.lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./pages/Cast/Cast'));
const Reviews = React.lazy(() => import('./pages/Reviews/Reviews'));

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

  {
  path: '*',
  element: <NotFoundPage />, 
}
];

export default routes;
