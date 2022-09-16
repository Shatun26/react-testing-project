import { createSlice } from '@reduxjs/toolkit';

const initialX = window.innerWidth / 2;
const initialY = window.innerHeight / 2;
interface initialStateInterface {
  isOpen: boolean;
  contentName: string;
  contentStartPosition: {
    X: number;
    Y: number;
  };
}
const initialState: initialStateInterface = {
  isOpen: false,
  contentName: '',
  contentStartPosition: {
    X: initialX,
    Y: initialY,
  },
};

const modal = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    openModal: (
      state,
      {
        payload: { contentName, coords },
      }: {
        payload: { contentName?: string; coords?: { X: number; Y: number } };
      }
    ) => {
      if (contentName) state.contentName = contentName;
      if (!!coords?.X) {
        state.isOpen = true;
        state.contentStartPosition.X = coords.X;
        state.contentStartPosition.Y = coords.Y;
      }
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { closeModal, openModal } = modal.actions;
export default modal.reducer;
