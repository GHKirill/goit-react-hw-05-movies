import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
// import { fetchGetMovieDetails } from 'components/API/fetches';
import { fetchGetMovieDetails } from '../API/fetches';
import { getGenres } from 'components/API/getMovieInfo';
import { getMovieYearInfo } from 'components/API/getMovieInfo';
import { getUserScore } from 'components/API/getMovieInfo';
import { RotatingLines } from 'react-loader-spinner';
import {
  ContainerInfo,
  Image,
  InfoWrapper,
  NameMovie,
  UserScoreMovie,
  InfoTypeOverviewMovie,
  InfoTypeGenresMovie,
  Button,
  ButtonWrapper,
  ButtonArrowLeft,
  ButtonLinkWrapper,
  ButtonLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState({});
  const [loader, setLoader] = useState(false);
  const firstRender = useRef(true);
  const linkToStart = useRef(null);
  if (location?.state?.from) {
    linkToStart.current = location.state.from;
  }
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const getQuery = async function () {
      try {
        setLoader(true);
        fetchGetMovieDetails(movieId, setMovieDetails, setLoader);
      } catch (error) {
        console.log(error);
      }
    };
    getQuery();
  }, [movieId]);

  return (
    <>
      <ButtonWrapper>
        <ButtonArrowLeft size={22} />
        <Button to={linkToStart.current || '/'}>Go Back</Button>
      </ButtonWrapper>

      <ContainerInfo>
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
        {movieDetails.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}
            alt=""
          />
        )}
        <InfoWrapper>
          <NameMovie>
            {movieDetails.title} ({getMovieYearInfo(movieDetails)})
          </NameMovie>
          <UserScoreMovie>
            User Score: {getUserScore(movieDetails)}
          </UserScoreMovie>
          <InfoTypeOverviewMovie>Overview:</InfoTypeOverviewMovie>
          <div>{movieDetails.overview}</div>
          <InfoTypeGenresMovie>Genres</InfoTypeGenresMovie>
          <div>{getGenres(movieDetails)}</div>
        </InfoWrapper>
      </ContainerInfo>

      <p>Additional information</p>
      <ButtonLinkWrapper>
        <ButtonLink to="cast">Cast</ButtonLink>
        <ButtonLink to="reviews">Reviews</ButtonLink>
      </ButtonLinkWrapper>

      <Outlet />
    </>
  );
}
