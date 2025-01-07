import { configureStore } from '@reduxjs/toolkit';
import systemSlice from './slices/systemSlice';
import windowSlice from '../features/windows/windowSlice';

export const store = configureStore({
  reducer: { system: systemSlice, window: windowSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
