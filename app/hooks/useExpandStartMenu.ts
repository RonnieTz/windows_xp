import { useRef, useState } from 'react';

export const useExpand = (delay: number) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const onMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsExpanded(true);
    }, delay);
  };
  const onMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsExpanded(false);
  };

  return { onMouseEnter, onMouseLeave, isExpanded };
};
