import axios from 'axios';
const KEY = '7fbdf6cf40f68e209048a77188ae45b3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchGetMovieDetails = async (
  movieId,
  setMovieDetails,
  setLoader
) => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  const {
    id,
    title,
    release_date,
    overview,
    vote_average,
    poster_path,
    backdrop_path,
    genres,
  } = response.data;
  setMovieDetails({
    id,
    title,
    release_date,
    overview,
    vote_average,
    poster_path,
    backdrop_path,
    genres,
  });
  setLoader(false);
};

export const fetchGetMoviesListTrend = async (setListFilms, setLoader) => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  const result = response.data.results;

  const workWithQuery = array => {
    return array.map(({ id, title }) => ({
      id,
      title,
    }));
  };
  setListFilms(workWithQuery(result));
  setLoader(false);
};

export const fetchGetMoviesListQuery = async (
  setMovieList,
  query,
  setLoader
) => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  const workWithQuery = array => {
    return array.map(({ id, title }) => ({
      id,
      title,
    }));
  };
  setMovieList(workWithQuery(response.data.results));
  setLoader(false);
};

export const fetchGetMovieReviews = async (
  setMoviesReviews,
  movieId,
  setLoader
) => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  const workWithQuery = response =>
    response.map(({ author, content, id }) => ({ author, content, id }));
  setMoviesReviews(workWithQuery(response.data.results));
  setLoader(false);
};

export const fetchGetMovieCastList = async (
  setCastList,
  movieId,
  setLoader
) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );

  const workWithQuery = data => {
    return data.map(({ id, name, profile_path }) => ({
      id,
      name,
      profile_path,
    }));
  };
  setCastList(workWithQuery(response.data.cast));
  setLoader(false);
};
