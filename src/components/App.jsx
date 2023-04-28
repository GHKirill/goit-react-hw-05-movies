import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
//import HomePage from './Pages/HomePage';
import ListTrendingMovies from './ListTrendingMovies/ListTrendingMovies';
import MoviesSearchPage from './Pages/MoviesSearchPage';
import MovieDetails from './MovieDetails/MovieDetails';
import MovieCastList from './MovieCastList/MovieCastList';
import MovieReviews from './MovieReviews/MovieReviews';
import NotFoundPage from './Pages/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route index element={<ListTrendingMovies />} />
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
