import { Outlet } from 'react-router-dom';
import { Container, Navigation, Button } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Navigation>
        <Button to="/">Home</Button>
        <Button to="/movies">Movies</Button>
      </Navigation>
      <Outlet />
    </Container>
  );
}
