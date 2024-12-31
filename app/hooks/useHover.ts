import { useState } from 'react';

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const bind = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return { isHovered, bind };
};
