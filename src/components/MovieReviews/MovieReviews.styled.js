import styled from 'styled-components';

export const ReviewsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewItem = styled.li`
  margin: 0;
  padding: 10px 20px;
  border-radius: 7px;
  box-shadow: 2px 1px 9px 0px #000000;
`;

export const ReviewAuthor = styled.p`
  font-size: 20px;
  font-weight: 400;
`;
