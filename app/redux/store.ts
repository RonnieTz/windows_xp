import { configureStore } from '@reduxjs/toolkit';
import systemSlice from './slices/systemSlice';

export const store = configureStore({ reducer: { system: systemSlice } });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
