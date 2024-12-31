import { useState, useRef } from 'react';

export const useTooltip = (hasExpand: boolean | undefined) => {
  const skipCount = useRef(0);
  const timeoutOpen = useRef<NodeJS.Timeout | undefined>(undefined);
  const [showTooltip, setShowTooltip] = useState(false);
  const [toolipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (showTooltip) return;
    if (skipCount.current < 5) {
      skipCount.current += 1;
      return;
    }
    const { top, left } = { top: e.clientY, left: e.clientX };
    clearTimeout(timeoutOpen.current);
    setShowTooltip(false);
    const timeout = setTimeout(() => {
      if (!hasExpand) {
        setTooltipPosition({ top: top + 17, left });
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
        }, 8000);
      }
    }, 500);
    timeoutOpen.current = timeout;
  };
  const onMouseLeave = () => {
    setShowTooltip(false);
    console.log('left');

    clearTimeout(timeoutOpen.current);
  };
  const hideTooltip = () => {
    setShowTooltip(false);
  };
  return {
    showTooltip,
    toolipPosition,
    onMouseMove,
    onMouseLeave,
    hideTooltip,
  };
};
