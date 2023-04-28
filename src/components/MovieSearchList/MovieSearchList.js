import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
//import { fetchGetMoviesListQuery } from 'components/API/fetches';
import { fetchGetMoviesListQuery } from '../API/fetches';
import { MoviesList, MovieLink, MovieItem } from './MovieSearchList.styled';

export default function MovieSearchList({ query }) {
  const [movieList, setMovieList] = useState([]);
  const [loader, setLoader] = useState(false);
  const firstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const getQuery = async () => {
      setLoader(true);
      fetchGetMoviesListQuery(setMovieList, query, setLoader);
    };
    getQuery();
  }, [query]);

  return (
    <>
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
        {!movieList.length ? (
          <div>
            There are not movies in the database according to your query
          </div>
        ) : (
          movieList.map(({ title, id }) => (
            <MovieItem key={id}>
              <MovieLink to={`${id}`} state={{ from: location }}>
                {title}
              </MovieLink>
            </MovieItem>
          ))
        )}
      </MoviesList>
    </>
  );
}
