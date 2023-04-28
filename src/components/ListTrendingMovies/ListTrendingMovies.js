import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
//import axios from 'axios';
// import { fetchGetMoviesListTrend } from 'components/API/fetches';
import { fetchGetMoviesListTrend } from '../API/fetches';
import { MoviesList, MovieLink, MovieItem } from './ListTrendingMovies.styled';

// const KEY = '7fbdf6cf40f68e209048a77188ae45b3';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default function ListTrendingMovies() {
  const [listFilms, setListFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  //const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    // if (firstRender.current) {
    //   firstRender.current = false;
    //   return;
    //}
    const getQuery = async function () {
      try {
        setLoader(true);
        fetchGetMoviesListTrend(setListFilms, setLoader);
      } catch (error) {
        console.log(error);
      }
      setLoader(true);

      // const fetchGetMoviesListTrend = async () => {
      //   const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
      //   const result = response.data.results;

      //   const workWithQuery = array => {
      //     return array.map(({ id, title }) => ({
      //       id,
      //       title,
      //     }));
      //   };
      //   setListFilms(workWithQuery(result));
      //   setLoader(false);
      // };
      // fetchGetMoviesListTrend();
    };
    getQuery();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <MoviesList>
        {loader && (
          <>
            <RotatingLines
              strokeColor="orange"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
            <span> is loading...</span>
          </>
        )}
        {listFilms.map(({ title, id }) => (
          <MovieItem key={id}>
            <MovieLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </MovieItem>
        ))}
      </MoviesList>
    </>
  );
}
