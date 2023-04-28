import styled from 'styled-components';

export const CastListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  // row-gap: 20px;
  gap: 20px;
`;
export const InfoActorWrapper = styled.li`
  list-style: none;
  width: calc((100% - 80px) / 5);
  object-fit: cover;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 2px 1px 9px 0px #000000;
`;
export const ImageActorWrapper = styled.div``;
export const NoImageActor = styled.div`
  display: flex;
  flex-grow: 10;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 350px;
  // padding: 10px 25px;
`;
export const NoImageActorInfo = styled.p`
  padding: 0 20px;
`;
export const ImageActor = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ActorName = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding: 7px 0;
`;
