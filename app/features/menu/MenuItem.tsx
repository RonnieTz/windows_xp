'use client';
import * as stylex from '@stylexjs/stylex';
import { useHover } from '@/app/hooks/useHover';
import Arrow from './Arrow';
import Tooltip from '../desktop/Tooltip';
import { useTooltip } from '@/app/hooks/useTooltip';
import { useRedux } from '@/app/hooks/useRedux';
import { hideAllProgramsMenu } from '@/app/redux/slices/systemSlice';
import ExpandMenu from './ExpandMenu';
import { useExpand } from '@/app/hooks/useExpandStartMenu';
import { useDelay } from '@/app/hooks/useDelay';

const { bold, container, description, text, large, increaseZindex } =
  stylex.create({
    container: {
      width: '100%',
      height: 26,
      backgroundColor: {
        default: 'transparent',
        ':hover': 'rgb(47, 113, 205)',
      },
      display: 'flex',
      gap: 5,
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: { default: 'rgb(0, 19, 107)', ':hover': 'white' },
      transition: 'all 0.05s',
      paddingLeft: 2,
      zIndex: 1,
      position: 'relative',
    },
    text: {
      fontSize: 12,
      paddingRight: 40,
    },
    bold: {
      fontWeight: 700,
    },
    description: {
      fontWeight: 400,
      color: 'rgba(0, 0, 0, 0.4)',
    },
    large: {
      height: 33,
    },
    increaseZindex: {
      zIndex: 100,
    },
  });

type MenuItemProps = {
  children: React.ReactNode;
  title: string;
  isBold?: boolean;
  descriptionText?: string;
  isLarge?: boolean;
  hasExpand?: boolean;
  tooltip?: string;
};

const MenuItem = ({
  children,
  title,
  isBold,
  descriptionText,
  isLarge,
  hasExpand,
  tooltip,
}: MenuItemProps) => {
  const {
    onMouseLeave,
    onMouseMove,
    showTooltip,
    toolipPosition,
    hideTooltip,
  } = useTooltip(hasExpand);
  const { bind, isHovered } = useHover();
  const { useReduxDispatch } = useRedux();
  const dispatch = useReduxDispatch();
  const {
    isExpanded,
    onMouseEnter,
    onMouseLeave: onMouseLeaveExpand,
  } = useExpand(500);

  const handleCloseAllProgramsMenu = () => {
    dispatch(hideAllProgramsMenu());
  };

  const { onMouseEnter: delayEnter, onMouseLeave: delayLeave } = useDelay(
    500,
    handleCloseAllProgramsMenu
  );

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        onMouseLeave();
        bind.onMouseLeave();
        onMouseLeaveExpand();
        delayLeave();
      }}
      onMouseEnter={() => {
        bind.onMouseEnter();
        onMouseEnter();
        delayEnter();
      }}
      {...stylex.props(
        container,
        isLarge && large,
        isHovered && increaseZindex
      )}
    >
      {children}
      <div {...stylex.props(text, isBold && bold)}>
        <span>{title}</span>
        <div
          style={{ color: isHovered ? 'white' : undefined }}
          {...stylex.props(description)}
        >
          {descriptionText}
        </div>
      </div>
      {hasExpand && <Arrow isHovered={isHovered} />}
      {isExpanded && hasExpand && <ExpandMenu />}
      {showTooltip && (
        <Tooltip
          text={tooltip || ''}
          top={toolipPosition.top}
          left={toolipPosition.left}
          hide={hideTooltip}
        />
      )}
    </div>
  );
};
export default MenuItem;
