import { FC, useMemo, useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/Modal/reducer';
import { modalSelector } from '../../redux/slices/Modal/selectors';
import * as S from './style';

interface ModalProps {
  animationDuration?: number;
}
const modalContent: Record<string, any> = {
  signUp: 'signUp',
  signIn: 'signIn',
  securityCode: 'securityCode',
  stripe: 'stripe',
};
const Modal: FC<ModalProps> = ({ animationDuration = 200 }) => {
  const dispatch = useDispatch();
  const modalSel = useSelector(modalSelector);
  const { isOpen, contentName, contentStartPosition } = modalSel;
  const [isOpenState, setIsOpenState] = useState(false);
  const [modalClass, setModalClass] = useState('');
  const element = useMemo(() => {
    const element = document.createElement('div');
    element.classList.add('modal');
    return element;
  }, []);
  const body = document.querySelector('body') as HTMLElement;
  const root = document.getElementById('root') as HTMLElement;

  useEffect(() => {
    if (isOpen) {
      body.style.overflow = 'hidden';
      root.style.pointerEvents = 'none';
      setIsOpenState(true);
      setModalClass('enter');
      const timeout = setTimeout(() => {
        setModalClass('enter-active');
      }, animationDuration);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      body.style.overflow = '';
      root.style.pointerEvents = '';
      setModalClass('exit');
      const timeout = setTimeout(() => {
        setIsOpenState(false);
      }, animationDuration);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    document.body?.appendChild(element);
    return () => {
      document.body?.removeChild(element);
    };
  }, []);

  if (isOpenState) {
    return createPortal(
      <S.ModalOutlet
        className={`modal-${modalClass}`}
        animationDuration={animationDuration}
        isOpen={isOpen}
        onClick={(e) => {
          if (e.target === element.firstChild) dispatch(closeModal());
        }}
      >
        <S.ModalContent
          animationDuration={animationDuration}
          isOpen={isOpen}
          startPosition={contentStartPosition}
        >
          {modalContent[contentName]}
        </S.ModalContent>
      </S.ModalOutlet>,
      element
    );
  } else {
    return null;
  }
};

export default Modal;
