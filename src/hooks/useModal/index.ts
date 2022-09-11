import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/slices/Modal/reducer';
import { modalStatusSelector } from '../../redux/slices/Modal/selectors';

export const useModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(modalStatusSelector);

  return (e: any, contentName?: string) => {
    const coordX =
      e.target.offsetLeft + e.target.offsetWidth / 2 - window.pageXOffset;
    const coordY =
      e.target.offsetTop + e.target.offsetHeight / 2 - window.pageYOffset;

    if (contentName || isOpen) {
      dispatch(
        toggleModal({
          coords: { X: coordX, Y: coordY },
          contentName: contentName,
        })
      );
    }
  };
};
