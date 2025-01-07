import { setSize, setPosition } from '../windowSlice';
import { useRedux } from '@/app/hooks/useRedux';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export const useResize = (
  id: string,
  windowPosition: { top: number; left: number },
  setWindowPosition: Dispatch<
    SetStateAction<{
      left: number;
      top: number;
    }>
  >
) => {
  const { useReduxDispatch, useReduxSelector } = useRedux();
  const anchorPosition = useRef('');
  const dispatch = useReduxDispatch();
  const windows = useReduxSelector((state) => state.window.windows);
  const window = windows.find((window) => window.id === id)!;
  const isResizing = useRef(false);
  const grabbingPoint = useRef({ top: 0, left: 0 });
  const grabbingPointPosition = useRef({ top: 0, left: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window?.width,
    height: window?.height,
  });

  useEffect(() => {
    const handleResize = (e: MouseEvent) => {
      if (!isResizing.current) return;
      const widthRight = e.clientX - grabbingPoint.current.left;
      const widthLeft =
        window.width * 2 + grabbingPoint.current.left - e.clientX;
      const heightBottom = e.clientY - grabbingPoint.current.top;
      const heightTop =
        window.height * 2 + grabbingPoint.current.top - e.clientY;
      const left = e.clientX - grabbingPointPosition.current.left;
      const top = e.clientY - grabbingPointPosition.current.top;

      if (
        anchorPosition.current.toLowerCase().includes('right') &&
        widthRight > window.minWidth
      ) {
        setWindowSize((prev) => ({ ...prev, width: widthRight }));
      }
      if (
        anchorPosition.current.toLowerCase().includes('bottom') &&
        heightBottom > window.minHeight
      ) {
        setWindowSize((prev) => ({ ...prev, height: heightBottom }));
      }
      if (anchorPosition.current.toLowerCase().includes('left')) {
        if (widthLeft > window.minWidth) {
          setWindowSize((prev) => ({ ...prev, width: widthLeft }));
          setWindowPosition((prev) => ({ ...prev, left }));
        }
      }
      if (anchorPosition.current.toLowerCase().includes('top')) {
        if (heightTop > window.minHeight) {
          setWindowSize((prev) => ({ ...prev, height: heightTop }));
          setWindowPosition((prev) => ({ ...prev, top }));
        }
      }
    };
    const handleMouseUp = () => {
      if (!isResizing.current) return;
      isResizing.current = false;
      dispatch(
        setSize({
          id,
          width: windowSize.width,
          height: windowSize.height,
        })
      );

      dispatch(
        setPosition({ id, left: windowPosition.left, top: windowPosition.top })
      );
      dispatch(
        setSize({ width: windowSize.width, height: windowSize.height, id })
      );

      grabbingPoint.current = { top: 0, left: 0 };
      grabbingPointPosition.current = { top: 0, left: 0 };
      anchorPosition.current = '';
    };

    addEventListener('mousemove', handleResize);
    addEventListener('mouseup', handleMouseUp);

    return () => {
      removeEventListener('mousemove', handleResize);
      removeEventListener('mouseup', handleMouseUp);
    };
  }, [windowSize, window]);

  const resize = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    position: string
  ) => {
    e.stopPropagation();
    isResizing.current = true;
    anchorPosition.current = position;

    grabbingPoint.current = {
      left: e.clientX - window.width,
      top: e.clientY - window.height,
    };
    grabbingPointPosition.current = {
      left: e.clientX - windowPosition.left,
      top: e.clientY - windowPosition.top,
    };
  };

  return { resize, windowSize };
};
