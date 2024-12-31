import { useRedux } from './useRedux';
import {
  setFocus,
  setFullscreen,
  setIndex,
  setMinimized,
  closeWindow,
  setPosition,
} from '../redux/slices/windowSlice';
import { useRef, useState } from 'react';

export const useManageWindow = (id: string) => {
  const grabbingPoint = useRef({ top: 0, left: 0 });
  const skipCount = useRef(0);
  const { useReduxDispatch, useReduxSelector } = useRedux();
  const dispatch = useReduxDispatch();
  const windows = useReduxSelector((state) => state.window.windows);
  const tasks = useReduxSelector((state) => state.window.tasks);
  const window = windows.find((window) => window.id === id)!;
  const [windowPosition, setWindowPosition] = useState({
    left: window.left,
    top: window.top,
  });
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

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.dataTransfer.effectAllowed = 'all';
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setDragImage(new Image(), 0, 0);
    grabbingPoint.current = {
      left: e.clientX - window.left,
      top: e.clientY - window.top,
    };
  };
  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.clientX === 0 && e.clientY === 0) return;
    focus();
    skipCount.current += 1;
    if (skipCount.current < 3) return;
    skipCount.current = 0;

    setWindowPosition({
      left: e.clientX - grabbingPoint.current.left,
      top: e.clientY - grabbingPoint.current.top,
    });
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(
      setPosition({
        id,
        left: windowPosition.left,
        top: windowPosition.top,
      })
    );
    grabbingPoint.current = { left: 0, top: 0 };
  };

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
    onDrag,
    windowPosition,
    setWindowPosition,
    onDragEnd,
  };
};
