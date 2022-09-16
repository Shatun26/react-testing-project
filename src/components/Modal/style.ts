import styled, { keyframes } from 'styled-components';

const startAnimationOutlet = keyframes`
  from {
    background-color: rgba(0,0,0,0);
    backdrop-filter: blur(0px);
  }

  to {
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(2px);
  }
`;

const endAnimationOutlet = keyframes`
  from {
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(2px);
  }

  to {
    background-color: rgba(0,0,0,0);
    backdrop-filter: blur(0px);
  }

`;

const startMoveContent = (position: any, isOpen: boolean) => keyframes`
 ${
   isOpen
     ? `from{
    opacity: 0.2;
    transform: translate(-50%, -50%) scale(0.5);
    top: ${position.Y}px;
    left: ${position.X}px;
      }
      to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    top: 50%;
    left: 50%
      }`
     : `
      from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    top: 50%;
    left: 50%
      }
      to{
    opacity: 0.2;
    transform: translate(-50%, -50%) scale(0.5);
    top: ${position.Y}px;
    left: ${position.X}px;
    }
  `
 }
`;

export const ModalOutlet = styled.div<{
  isOpen: boolean;
  animationDuration?: number;
  touchNone: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${({ touchNone }) => (touchNone ? 'none' : ' all')};
  touch-action: ${({ touchNone }) => (touchNone ? 'none' : ' auto')};
  animation: ${({ isOpen }) =>
      isOpen ? startAnimationOutlet : endAnimationOutlet}
    ${({ animationDuration }) => animationDuration}ms forwards;
`;

export const ModalContent = styled.div<{
  animationDuration?: number;
  startPosition: any;
  isOpen: boolean;
}>`
  background-color: white;
  border: 1px solid red;
  position: absolute;
  transform: translate(-50%, -50%) scale(0.2);

  animation: ${({ startPosition, isOpen }) =>
      startMoveContent(startPosition, isOpen)}
    ${({ animationDuration }) => animationDuration}ms forwards;
`;
