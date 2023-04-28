import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const ContainerInfo = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 2px solid grey;
`;
export const Image = styled.img`
  width: 300px;
  height: 100%;
`;
export const InfoWrapper = styled.div`
  padding: 30px 0px;
`;

export const NameMovie = styled.p`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const UserScoreMovie = styled.p`
  margin-bottom: 20px;
`;
export const InfoTypeOverviewMovie = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
export const InfoTypeGenresMovie = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
export const ButtonWrapper = styled.span`
  position: relative;
`;
export const Button = styled(Link)`
  font-size: 14px;
  padding: 3px 5px 3px 40px;
  text-decoration: none;
  font-weight: 500;
  background-color: rgb(192, 182, 182);
  border-radius: 4px;
`;
export const ButtonArrowLeft = styled(BsArrowLeft)`
  position: absolute;
  left: 7px;
`;
export const ButtonLink = styled(NavLink)`
  color: black;
  padding: 5px 10px;
  text-decoration: none;
  font-weight: 500;
  background-color: rgb(192, 182, 182);
  border-radius: 4px;
  &.active {
    background-color: orange;
    color: white;
  }
`;
export const ButtonLinkWrapper = styled.span`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid grey;
`;
