import { configureStore } from '@reduxjs/toolkit';
import systemSlice from './slices/systemSlice';
import windowSlice from '../features/windows/windowSlice';
import folderSlice from './slices/folderSlice';
import linkSlice from './slices/linkSlice';

export const store = configureStore({
  reducer: {
    system: systemSlice,
    window: windowSlice,
    folder: folderSlice,
    link: linkSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
