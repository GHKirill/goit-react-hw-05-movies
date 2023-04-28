import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { fetchGetMovieReviews } from 'components/API/fetches';
import {
  ReviewsWrapper,
  ReviewItem,
  ReviewAuthor,
} from './MovieReviews.styled';

export default function MovieReviews() {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const fetchMoviesReviews = async () => {
      setLoader(true);
      fetchGetMovieReviews(setMoviesReviews, movieId, setLoader);
    };
    fetchMoviesReviews();
  }, [movieId]);

  return moviesReviews.length ? (
    <ReviewsWrapper>
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
      {moviesReviews.map(({ author, content, id }) => (
        <ReviewItem key={id}>
          <ReviewAuthor>{author}</ReviewAuthor>
          <p>{content}</p>
        </ReviewItem>
      ))}
    </ReviewsWrapper>
  ) : (
    <div>We don't have reviews for this movie</div>
  );
}
