import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { StyledPageWrapper } from './style';

const MainLayout: FC = () => {
  return (
    <StyledPageWrapper>
      <header>Header</header>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'dashboard'}>Dashboard</Link>
        <Link to={'settings'}>Settings</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </StyledPageWrapper>
  );
};
export default MainLayout;
