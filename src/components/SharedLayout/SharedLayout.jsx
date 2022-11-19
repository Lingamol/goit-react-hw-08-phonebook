// Imports
import { Outlet } from 'react-router-dom';
import { LinkItem, Container, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkItem to="/" end>
            Home
          </LinkItem>
          <LinkItem to="register">Register</LinkItem>
          <LinkItem to="login">Login</LinkItem>
          {/* <NavLink to="/products">Products</NavLink> */}
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
export default SharedLayout;
