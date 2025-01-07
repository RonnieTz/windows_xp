import { setPosition } from '../windowSlice';
import { useRedux } from '@/app/hooks/useRedux';

import { useEffect, useRef, useState } from 'react';

export const useDrag = (id: string) => {
  const { useReduxDispatch, useReduxSelector } = useRedux();
  const dispatch = useReduxDispatch();
  const windows = useReduxSelector((state) => state.window.windows);
  const window = windows.find((window) => window.id === id);
  const grabbingPoint = useRef({ top: 0, left: 0 });
  const isDragging = useRef(false);
  const [windowPosition, setWindowPosition] = useState({
    left: window?.left || 0,
    top: window?.top || 0,
  });

  useEffect(() => {
    const handleDrag = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const left = e.clientX - grabbingPoint.current.left;
      const top = e.clientY - grabbingPoint.current.top;
      setWindowPosition({ left, top: Math.max(top, 0) });
    };

    const mouseup = (e: MouseEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      dispatch(
        setPosition({
          id,
          left: windowPosition.left || 0,
          top: windowPosition.top || 0,
        })
      );
    };

    addEventListener('mousemove', handleDrag);
    addEventListener('mouseup', mouseup);
    return () => {
      removeEventListener('mousemove', handleDrag);
      removeEventListener('mouseup', mouseup);
    };
  }, [windowPosition]);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (window?.fullscreen) return;
    isDragging.current = true;
    grabbingPoint.current = {
      left: e.clientX - (window?.left || 0),
      top: e.clientY - (window?.top || 0),
    };
  };

  const onDragEnd = () => {
    isDragging.current = false;
    grabbingPoint.current = { left: 0, top: 0 };
    dispatch(
      setPosition({
        id,
        left: windowPosition.left || 0,
        top: windowPosition.top || 0,
      })
    );
  };

  return {
    windowPosition,
    onDragStart,
    setWindowPosition,
    isDragging,
    onDragEnd,
  };
};
