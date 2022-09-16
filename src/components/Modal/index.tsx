import { FC, useMemo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/Modal/reducer';
import { modalSelector } from '../../redux/slices/Modal/selectors';
import * as S from './style';

interface ModalProps {
  animationDuration?: number;
}

const Modal: FC<ModalProps> = ({ animationDuration = 400 }) => {
  const dispatch = useDispatch();
  const { isOpen, contentName, contentStartPosition } =
    useSelector(modalSelector);
  const [isOpenState, setIsOpenState] = useState(false);
  const [moving, setIsMomoving] = useState(false);

  const body = document.querySelector('body') as HTMLElement;
  const root = document.getElementById('root') as HTMLElement;

  const element = useMemo(() => {
    const element = document.createElement('div');
    element.classList.add('modal');
    return element;
  }, []);

  const modalContent: Record<string, any> = {
    signUp: 'signUp',
    signIn: (
      <div>
        <p>123</p>
        <input type='text' placeholder='123123123' />
        <input type='text' placeholder='123123123' />
        <input type='text' placeholder='123123123' />
        <input type='text' placeholder='123123123' />
        <input type='text' placeholder='123123123' />
      </div>
    ),
    securityCode: 'securityCode',
    stripe: 'stripe',
  };

  useEffect(() => {
    if (isOpen) {
      body.style.overflow = 'hidden';
      root.style.pointerEvents = 'none';
      root.style.touchAction = 'none';
      setIsOpenState(true);
      setIsMomoving(true);
      const timeout = setTimeout(() => {
        setIsMomoving(false);
      }, animationDuration);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setIsMomoving(true);
      const timeout = setTimeout(() => {
        root.removeAttribute('style');
        body.removeAttribute('style');
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
        touchNone={moving}
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
