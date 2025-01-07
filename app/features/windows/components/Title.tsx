import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import { useManageWindow } from '../hooks/useManageWindow';

const styles = stylex.create({
  container: {
    height: '100%',
    display: 'flex',
    paddingLeft: 7,
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    gap: 2,
  },
  icon: {
    height: 22,
    width: 22,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '2px 1px 2px rgba(0, 0, 0, 0.7)',
    letterSpacing: 0.8,
  },
  dragCursor: {
    cursor: 'grabbing',
  },
});

type TitleProps = {
  id: string;
  onDragStart: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isDragging: boolean;
  onDragEnd: () => void;
};

const Title = ({ id, isDragging, onDragEnd, onDragStart }: TitleProps) => {
  const { window } = useManageWindow(id);
  return (
    <div
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      {...stylex.props(styles.container, isDragging && styles.dragCursor)}
    >
      {window && (
        <Image
          {...stylex.props(styles.icon)}
          src={window?.icon}
          alt="My Documents"
        />
      )}
      <div {...stylex.props(styles.title)}>{window?.title}</div>
    </div>
  );
};
export default Title;
