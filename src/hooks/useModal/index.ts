import { useDispatch } from 'react-redux';
import { openModal as openModalReducer } from '../../redux/slices/Modal/reducer';

export const useModal = () => {
  const dispatch = useDispatch();

  const openModal = (e: any, contentName: string) => {
    const coordX =
      e.target.offsetLeft + e.target.offsetWidth / 2 - window.pageXOffset;
    const coordY =
      e.target.offsetTop + e.target.offsetHeight / 2 - window.pageYOffset;

    dispatch(
      openModalReducer({
        coords: { X: coordX, Y: coordY },
        contentName: contentName,
      })
    );
  };
  return { openModal };
};
