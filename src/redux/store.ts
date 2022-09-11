import {
  configureStore,
  ThunkAction,
  Action,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import modal from './slices/Modal/reducer';

export const store = configureStore({
  reducer: {
    modal,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type ThunkAppDispath = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispath>();
