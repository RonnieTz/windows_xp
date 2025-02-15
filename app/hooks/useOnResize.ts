import { useEffect, useRef, useState } from 'react';

export const useOnResize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState({ hor: 0, ver: 0 });
  useEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = ref.current!.getBoundingClientRect();
      const hor = Math.floor(width / 80);
      const ver = Math.floor(height / 83);
      setGrid({ hor, ver });
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  });
  return { ref, grid };
};
