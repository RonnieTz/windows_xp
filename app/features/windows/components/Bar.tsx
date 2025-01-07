import * as stylex from '@stylexjs/stylex';
import ButtonGroup from './ButtonGroup';
import Title from './Title';
import { useManageWindow } from '../hooks/useManageWindow';

const styles = stylex.create({
  bar: {
    width: '100%',
    height: 35,
    minHeight: 35,
    background:
      'linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%);',
    borderRadius: '8px 8px 0 0',
    margin: '1px auto 0 auto',
    position: 'relative',
    boxShadow:
      '0 0 3px 0 rgba(0, 0, 250, 1) inset , 0 -2px 2px 0 rgba(255, 255, 255, 0.3) inset',
  },
  faded: {
    boxShadow:
      '0 0 4px 0 rgba(0, 0, 250, 1) inset, 0 -2px 2px 0 rgba(255, 255, 255, 0.3) inset',
    filter: 'saturate(0.3) brightness(1.6)',
  },
  fullscreen: {
    borderRadius: 0,
    margin: 0,
  },
  dragCursor: {
    cursor: 'grabbing',
  },
});

type BarProps = {
  focus?: boolean;
  fullscreen: boolean;
  id: string;
  onDragStart: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isDragging: boolean;
  onDragEnd: () => void;
};

const Bar = ({
  focus = false,
  fullscreen,
  id,
  onDragStart,
  isDragging,
  onDragEnd,
}: BarProps) => {
  const { maximize, restore, window } = useManageWindow(id);
  const handleDoubleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (window?.fullscreen) {
      restore();
    } else {
      maximize();
    }
  };
  return (
    <div
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onDoubleClickCapture={handleDoubleClick}
      {...stylex.props(
        styles.bar,
        !focus && styles.faded,
        fullscreen && styles.fullscreen,
        isDragging && styles.dragCursor
      )}
    >
      <Title
        isDragging={isDragging}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        id={id}
      />
      <ButtonGroup id={id} />
    </div>
  );
};
export default Bar;
