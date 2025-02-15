import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Window, Task } from './types';
import { logos } from '@/public/logos';

const initialState: { windows: Window[]; tasks: Task[] } = {
  windows: [
    {
      id: 'folder1',
      title: 'Folder1',
      width: 550,
      minWidth: 500,
      height: 550,
      minHeight: 400,
      top: 150,
      left: 250,
      focus: true,
      fullscreen: true,
      zIndex: 2,
      minimized: false,
      open: true,
      icon: logos.folder,
      app: 'explorer',
    },
  ],
  tasks: [],
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    openWindow: (state, action: PayloadAction<string>) => {
      const window = state.windows.find(
        (window) => window.id === action.payload
      );
      if (window) {
        window.open = true;
      }
      if (!state.tasks.find((task) => task.id === action.payload)) {
        state.tasks.push({ id: action.payload });
      }
    },
    setSize: (
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
    setName: (state, action: PayloadAction<{ name: string; id: string }>) => {
      const { name, id } = action.payload;
      state.windows = state.windows.map((window) =>
        window.id === id ? { ...window, title: name } : window
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
      const window = state.windows.find(
        (window) => window.id === action.payload
      );
      if (window) {
        window.open = false;
      }
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
  setSize,
  setFocus,
  setFullscreen,
  closeWindow,
  setIndex,
  setMinimized,
  setPosition,
  setName,
  openWindow,
} = windowSlice.actions;
export default windowSlice.reducer;
