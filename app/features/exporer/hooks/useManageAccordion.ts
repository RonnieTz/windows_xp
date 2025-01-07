import { useHover } from '@/app/hooks/useHover';
import { useState } from 'react';
import { useTooltip } from '@/app/hooks/useTooltip';

export const useManageAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { bind: hoverBind, isHovered } = useHover();
  const {
    hideTooltip,
    onMouseLeave,
    onMouseMove,
    showTooltip,
    toolipPosition,
  } = useTooltip(false);
  const bind = {
    onMouseEnter: () => {
      hoverBind.onMouseEnter();
    },
    onMouseLeave: () => {
      hoverBind.onMouseLeave();
      onMouseLeave();
    },
    onMouseMove,
  };
  const toggle = () => setIsOpen((prev) => !prev);
  return {
    bind,
    isHovered,
    isOpen,
    toggle,
    hideTooltip,
    showTooltip,
    toolipPosition,
  };
};
