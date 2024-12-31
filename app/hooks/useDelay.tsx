import { useRef } from 'react';

export const useDelay = (delay: number, callback: () => void) => {
  const timeoutRef = useRef<number | null>(null);

  const onMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => {
      callback();
    }, delay);
  };
  const onMouseLeave = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  return { onMouseEnter, onMouseLeave };
};
