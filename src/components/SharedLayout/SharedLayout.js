import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Container, Navigation, Button } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Navigation>
        <Button to="/">Home</Button>
        <Button to="/movies">Movies</Button>
      </Navigation>
      <Suspense
        fallback={
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
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
}
