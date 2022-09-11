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
    toggleModal: (
      state,
      {
        payload: { contentName, coords },
      }: { payload: { contentName?: string; coords?: { X: number; Y: number } } }
    ) => {
      state.isOpen = contentName ? !state.isOpen : false;
      if (coords?.X !== undefined) {
        state.contentStartPosition.X = coords.X;
        state.contentStartPosition.Y = coords.Y;
        if (contentName) state.contentName = contentName;
      } else {
        state.contentName = '';
      }
    },
  },
});

export const { toggleModal } = modal.actions;
export default modal.reducer;
