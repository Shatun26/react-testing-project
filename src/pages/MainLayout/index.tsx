import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Modal from '../../components/Modal';
import { useModal } from '../../hooks/useModal';

const MainLayout: FC = () => {
  const { openModal } = useModal();

  return (
    <>
      <header>
        Header
        <button onClick={(e) => openModal(e, 'signIn')}>
          Open/Close Modal
        </button>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'dashboard'}>Dashboard</Link>
          <Link to={'settings'}>Settings</Link>
        </nav>
      </header>
      <main>
        <button onClick={(e) => openModal(e, 'signUp')}>
          Open/Close Modal
        </button>

        <Outlet />
      </main>
      <Modal />
      <button onClick={(e) => openModal(e, 'securityCode')}>
        Open/Close Modal
      </button>

      <footer>Footer</footer>
    </>
  );
};
export default MainLayout;
