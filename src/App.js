import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Імпортуємо компонент хедера
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Cast from './pages/Cast/Cast';
import Reviews from './pages/Reviews/Reviews';

function App() {
  return (
    <div>
      {/* Включаємо компонент хедера */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;

