import React from 'react';
import NotFoundPage from './NotFoundPage';

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
  // Додавання маршруту для перенаправлення на домашню сторінку при неіснуючому маршруті
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
