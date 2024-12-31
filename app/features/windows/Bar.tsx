import * as stylex from '@stylexjs/stylex';
import ButtonGroup from './ButtonGroup';
import Title from './Title';
import { useManageWindow } from '@/app/hooks/useManageWindow';

const styles = stylex.create({
  bar: {
    width: '100%',
    height: 40,
    background:
      'linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%);',
    borderRadius: '8px 8px 0 0',
    margin: '1px auto 0 auto',
    position: 'relative',
  },
  faded: {
    filter: 'saturate(0.3) brightness(1.6)',
  },
  fullscreen: {
    borderRadius: 0,
    margin: 0,
  },
});

type BarProps = {
  focus?: boolean;
  fullscreen: boolean;
  id: string;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
};

const Bar = ({
  focus = false,
  fullscreen,
  id,
  onDrag,
  onDragStart,
  onDragEnd,
}: BarProps) => {
  const { maximize, restore, window } = useManageWindow(id);
  const handleDoubleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (window.fullscreen) {
      restore();
    } else {
      maximize();
    }
  };
  return (
    <div
      draggable
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.effectAllowed = 'all';
        e.dataTransfer.dropEffect = 'move';
      }}
      onDragEnter={(e) => e.preventDefault()}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onDoubleClickCapture={handleDoubleClick}
      {...stylex.props(
        styles.bar,
        !focus && styles.faded,
        fullscreen && styles.fullscreen
      )}
    >
      <Title id={id} />
      <ButtonGroup id={id} />
    </div>
  );
};
export default Bar;
