import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieCastList } from 'components/API/fetches';
import { RotatingLines } from 'react-loader-spinner';
import {
  CastListWrapper,
  InfoActorWrapper,
  ImageActor,
  NoImageActor,
  NoImageActorInfo,
  ActorName,
} from './MovieCastList.styled';

export default function MovieCastLis() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getQuery = async () => {
      setLoader(true);
      fetchGetMovieCastList(setCastList, movieId, setLoader);
    };
    getQuery();
  }, [movieId]);

  return (
    <CastListWrapper>
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
      {castList.length ? (
        castList.map(({ id, name, profile_path }) => {
          return (
            <InfoActorWrapper key={id}>
              {profile_path ? (
                <ImageActor
                  src={`https://image.tmdb.org/t/p/w400${profile_path}`}
                  alt=""
                />
              ) : (
                <NoImageActor>
                  <NoImageActorInfo>
                    There is no {name}'s photo in the database
                  </NoImageActorInfo>
                </NoImageActor>
              )}

              <ActorName>{name}</ActorName>
            </InfoActorWrapper>
          );
        })
      ) : (
        <div>There is no information about actors</div>
      )}
    </CastListWrapper>
  );
}
