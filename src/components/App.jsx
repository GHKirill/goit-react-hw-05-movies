import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
//import HomePage from './Pages/HomePage';
// import ListTrendingMovies from './ListTrendingMovies/ListTrendingMovies';
//======================
//====================
//import HomePage from './Pages/HomePage';
//import MoviesSearchPage from './Pages/MoviesSearchPage';
//import MovieDetails from './MovieDetails/MovieDetails';
//import MovieCastList from './MovieCastList/MovieCastList';
//import MovieReviews from './MovieReviews/MovieReviews';
//import NotFoundPage from './Pages/NotFoundPage';

const HomePage = lazy(() => import('./Pages/HomePage'));
const MoviesSearchPage = lazy(() => import('./Pages/MoviesSearchPage'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const MovieCastList = lazy(() => import('./MovieCastList/MovieCastList'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route index element={<ListTrendingMovies />} /> */}
        <Route path="movies" element={<MoviesSearchPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCastList />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
