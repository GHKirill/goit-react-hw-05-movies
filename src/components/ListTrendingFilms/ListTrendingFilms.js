import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { fetchGetMoviesListTrend } from 'components/API/fetches';
import { MoviesList, MovieLink, MovieItem } from './ListTrendingFilms.styled';

export default function ListTrendingFilms() {
  const [listFilms, setListFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const firstRender = useRef(false);
  const location = useLocation();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const getQuery = async function () {
      try {
        setLoader(true);
        fetchGetMoviesListTrend(setListFilms, setLoader);
      } catch (error) {
        console.log(error);
      }
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
