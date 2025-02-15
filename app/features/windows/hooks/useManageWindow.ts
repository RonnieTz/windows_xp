import { useRedux } from '@/app/hooks/useRedux';
import {
  setFocus,
  setFullscreen,
  setIndex,
  setMinimized,
  closeWindow,
  setName,
  openWindow,
} from '../windowSlice';
import { useResize } from './useResize';
import { useDrag } from './useDrag';

export const useManageWindow = (id: string) => {
  const {
    setWindowPosition,
    windowPosition,
    onDragStart,
    isDragging,
    onDragEnd,
  } = useDrag(id);
  const { useReduxDispatch, useReduxSelector } = useRedux();
  const dispatch = useReduxDispatch();
  const windows = useReduxSelector((state) => state.window.windows);
  const tasks = useReduxSelector((state) => state.window.tasks);
  const window = windows.find((window) => window.id === id);

  const { windowSize, resize } = useResize(
    id,
    { left: windowPosition.left || 0, top: windowPosition.top || 0 },
    setWindowPosition
  );

  const focus = () => {
    windows.forEach((window) => {
      if (window.id !== id) {
        dispatch(setFocus({ id: window.id, focus: false }));
        dispatch(setIndex({ id: window.id, zIndex: 1 }));
      }
    });
    dispatch(setFocus({ id, focus: true }));
    dispatch(setIndex({ id, zIndex: 10 }));
  };
  const blur = () => dispatch(setFocus({ id, focus: false }));
  const maximize = () => dispatch(setFullscreen({ id, fullscreen: true }));
  const restore = () => dispatch(setFullscreen({ id, fullscreen: false }));
  const close = () => dispatch(closeWindow(id));
  const minimize = () => dispatch(setMinimized({ id, minimized: true }));
  const restoreMinimized = () =>
    dispatch(setMinimized({ id, minimized: false }));
  const renameWindow = (name: string) => dispatch(setName({ id, name }));
  const open = (id: string) => dispatch(openWindow(id));

  return {
    window,
    focus,
    blur,
    restore,
    maximize,
    close,
    minimize,
    restoreMinimized,
    tasks,
    onDragStart,
    windowPosition,
    setWindowPosition,
    windowSize,
    resize,
    isDragging,
    onDragEnd,
    renameWindow,
    open,
  };
};
