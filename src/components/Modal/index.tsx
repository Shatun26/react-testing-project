import { FC, useMemo, useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import { toggleModal } from '../../redux/slices/Modal/reducer';
import { modalSelector } from '../../redux/slices/Modal/selectors';
import * as S from './style';

interface ModalProps {
  animationDuration?: number;
}

const Modal: FC<ModalProps> = ({ animationDuration = 200 }) => {
  const dispatch = useDispatch();
  const modalSel = useSelector(modalSelector);
  const { isOpen, contentName, contentStartPosition } = modalSel;
  const [isOpenState, setIsOpenState] = useState(false);
  const close = useModal();

  const element = useMemo(() => {
    const element = document.createElement('div');
    element.classList.add('modal');
    return element;
  }, []);

  const modalContent: Record<string, any> = {
    signUp: 'signUp',
    signIn: <div onClick={close}>Close</div>,
    securityCode: 'securityCode',
    stripe: 'stripe',
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen && body) {
      body.style.overflow = 'hidden';
      setIsOpenState(true);
    } else if (body) {
      body.style.overflow = 'auto';
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

  const contentNameMemo = useMemo(() => {
    return contentName;
  }, [isOpenState]);

  if (isOpenState) {
    return createPortal(
      <S.ModalOutlet
        animationDuration={animationDuration}
        isOpen={isOpen}
        onClick={(e) => {
          if (e.target === element.firstChild) dispatch(toggleModal({}));
        }}
      >
        <S.ModalContent
          animationDuration={animationDuration}
          isOpen={isOpen}
          startPosition={contentStartPosition}
        >
          {modalContent[contentNameMemo]}
        </S.ModalContent>
      </S.ModalOutlet>,
      element
    );
  } else {
    return null;
  }
};

export default Modal;
