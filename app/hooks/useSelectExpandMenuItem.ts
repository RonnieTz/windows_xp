import { useState, useRef } from 'react';

export const useSelectExpandMenuItem = (delay: number) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [itemHovered, setItemHovered] = useState('');
  const timeoutRef = useRef<number | null>(null);
  const timeoutCloseRef = useRef<number | null>(null);
  const onMouseEnter = (title: string) => {
    setItemHovered(title);
    if (timeoutCloseRef.current) {
      clearTimeout(timeoutCloseRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setSelectedItem(title);
    }, delay);
  };
  const onMouseLeave = () => {
    setItemHovered('');
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return { selectedItem, onMouseEnter, onMouseLeave, itemHovered };
};
