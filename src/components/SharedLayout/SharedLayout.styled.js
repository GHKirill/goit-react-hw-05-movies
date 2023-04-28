import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  max-width: 1560px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px 30px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
`;
export const Button = styled(NavLink)`
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
