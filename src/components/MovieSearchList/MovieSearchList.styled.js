import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const MovieItem = styled.li`
  padding: 7px 20px;
  max-width: 700px;
  border-radius: 3px;
  box-shadow: 2px 1px 9px 0px #000000;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    background-color: orange;
    transform: scale(1.01);
    font-size: 16px;
    font-weight: 500;
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: black;
`;
