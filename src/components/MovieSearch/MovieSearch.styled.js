import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 30px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: rgb(192, 182, 182);
  border-radius: 4px;
  border: none;
  padding: 4px 20px;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    background-color: orange;
    transform: scale(1.01);
    color: white;
    box-shadow: 2px 1px 9px 0px #000000;
  }
`;
export const Input = styled.input`
  font-size: 18px;
  padding-left: 10px;
  &:focus {
    outline: 2px solid orange;
    border: 1px solid transparent;
  }
`;
