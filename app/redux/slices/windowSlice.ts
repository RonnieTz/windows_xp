import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import icon from '@/public/start/Control Panel.webp';
import { Window, Task } from '../types';

const initialState: { windows: Window[]; tasks: Task[] } = {
  windows: [
    {
      id: '0',
      title: 'Window 1',
      width: 300,
      height: 300,
      top: 150,
      left: 150,
      focus: true,
      fullscreen: false,
      open: true,
      zIndex: 1,
      minimized: false,
      icon,
    },
    {
      id: '1',
      title: 'Window 2',
      width: 300,
      height: 300,
      top: 250,
      left: 250,
      focus: true,
      fullscreen: false,
      open: true,
      zIndex: 1,
      minimized: false,
      icon,
    },
  ],
  tasks: [{ id: '0' }, { id: '1' }],
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setWindowSize: (
      state,
      action: PayloadAction<{ id: string; width: number; height: number }>
    ) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload.id
          ? {
              ...window,
              width: action.payload.width,
              height: action.payload.height,
            }
          : window
      );
    },
    setFocus: (
      state,
      action: PayloadAction<{ id: string; focus: boolean }>
    ) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload.id
          ? { ...window, focus: action.payload.focus }
          : window
      );
    },
    setFullscreen: (
      state,
      action: PayloadAction<{ id: string; fullscreen: boolean }>
    ) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload.id
          ? { ...window, fullscreen: action.payload.fullscreen }
          : window
      );
    },
    closeWindow: (state, action: PayloadAction<string>) => {
      state.windows = state.windows.filter(
        (window) => window.id !== action.payload
      );
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setIndex: (
      state,
      action: PayloadAction<{ id: string; zIndex: number }>
    ) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload.id
          ? { ...window, zIndex: action.payload.zIndex }
          : window
      );
    },
    setMinimized: (
      state,
      action: PayloadAction<{ id: string; minimized: boolean }>
    ) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload.id
          ? { ...window, minimized: action.payload.minimized }
          : window
      );
    },
    setPosition: (
      state,
      action: PayloadAction<{ id: string; top: number; left: number }>
    ) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload.id
          ? { ...window, top: action.payload.top, left: action.payload.left }
          : window
      );
    },
  },
});

export const {
  setWindowSize,
  setFocus,
  setFullscreen,
  closeWindow,
  setIndex,
  setMinimized,
  setPosition,
} = windowSlice.actions;
export default windowSlice.reducer;
