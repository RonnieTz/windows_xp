import * as stylex from '@stylexjs/stylex';
import Image, { StaticImageData } from 'next/image';
import Arrow from './Arrow';
import { useHover } from '@/app/hooks/useHover';
import { useTooltip } from '@/app/hooks/useTooltip';
import Tooltip from '../desktop/Tooltip';

const styles = stylex.create({
  expandItem: {
    height: 27,
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    padding: '0 10px 0 5px',
    transition: 'all 0.1s',
    position: 'relative',
    backgroundColor: {
      ':hover': 'rgb(47, 113, 205)',
    },
    color: {
      ':hover': 'white',
    },
  },
  icon: {
    width: 20,
    height: 20,
    filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.8))',
  },
  title: {
    fontSize: 12,
    textWrap: 'nowrap',
    marginRight: 20,
  },
  arrow: {
    width: 12,
    height: 12,
    marginLeft: 'auto',
    rotate: '-90deg',
  },
  selected: {
    backgroundColor: 'rgb(47, 113, 205)',
    color: 'white',
  },
});

type Props = {
  title: string;
  icon: StaticImageData;
  hasExpand?: boolean;
  children?: React.ReactNode;
  tooltipText?: string;
  selectedItem?: string;
  onMouseEnter?: (title: string) => void;
  onMouseLeave?: () => void;
  itemHovered?: string;
};

const ExpandMenuItem = ({
  title,
  icon,
  hasExpand,
  children,
  onMouseEnter,
  onMouseLeave,
  selectedItem,
  itemHovered,
  tooltipText,
}: Props) => {
  const { bind, isHovered } = useHover();
  const {
    onMouseLeave: mouseLeaveTooltip,
    onMouseMove,
    showTooltip,
    toolipPosition,
    hideTooltip,
  } = useTooltip(hasExpand);
  return (
    <div
      onMouseEnter={() => {
        onMouseEnter?.(title);
        bind.onMouseEnter();
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        onMouseLeave?.();
        bind.onMouseLeave();
        mouseLeaveTooltip();
      }}
      {...stylex.props(
        styles.expandItem,
        selectedItem === title && !itemHovered && styles.selected
      )}
    >
      <Image priority {...stylex.props(styles.icon)} src={icon} alt={title} />
      <span {...stylex.props(styles.title)}>{title}</span>
      {hasExpand && (
        <Arrow
          isHovered={isHovered || (selectedItem === title && !itemHovered)}
        />
      )}
      {selectedItem === title && children}
      {showTooltip && isHovered && (
        <Tooltip
          left={toolipPosition.left}
          top={toolipPosition.top}
          hide={hideTooltip}
          text={tooltipText || ''}
        />
      )}
    </div>
  );
};
export default ExpandMenuItem;
