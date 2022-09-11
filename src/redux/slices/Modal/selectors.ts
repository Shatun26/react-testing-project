import { RootState } from '../../store';

export const modalSelector = ({ modal }: RootState) => modal;
export const modalStatusSelector = ({ modal }: RootState) => modal.isOpen;
