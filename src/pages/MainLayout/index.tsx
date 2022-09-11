import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import Modal from '../../components/Modal';
import { useModal } from '../../hooks/useModal';
import { toggleModal } from '../../redux/slices/Modal/reducer';

const MainLayout: FC = () => {
  const toggleModal = useModal();

  return (
    <>
      <header>
        Header
        <button onClick={(e) => toggleModal(e, 'signIn')}>
          Open/Close Modal
        </button>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'dashboard'}>Dashboard</Link>
          <Link to={'settings'}>Settings</Link>
        </nav>
      </header>
      <main>
        <button onClick={(e) => toggleModal(e, 'signUp')}>Open/Close Modal</button>

        <Outlet />
      </main>
      <Modal  />
      <button onClick={toggleModal}>Open/Close Modal</button>

      <footer>Footer</footer>
    </>
  );
};
export default MainLayout;
