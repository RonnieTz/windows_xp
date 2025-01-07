import * as stylex from '@stylexjs/stylex';
import { useManageWindow } from '../hooks/useManageWindow';

const style = stylex.create({
  root: {
    position: 'absolute',
    width: 10,
    height: 10,
    zIndex: 1000,
  },
  topRight: {
    top: -3,
    right: -3,
    cursor: 'nesw-resize',
  },
  topLeft: {
    top: -3,
    left: -3,
    cursor: 'nwse-resize',
  },
  bottomRight: {
    bottom: -3,
    right: -3,
    cursor: 'nwse-resize',
  },
  bottomLeft: {
    bottom: -3,
    left: -3,
    cursor: 'nesw-resize',
  },
  top: {
    top: -3,
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'ns-resize',
    width: '70%',
  },
  right: {
    top: '50%',
    right: -3,
    transform: 'translateY(-50%)',
    cursor: 'ew-resize',
    height: '70%',
  },
  bottom: {
    bottom: -3,
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'ns-resize',
    width: '70%',
  },
  left: {
    top: '50%',
    left: -3,
    transform: 'translateY(-50%)',
    cursor: 'ew-resize',
    height: '70%',
  },
});

type ResizeAnchorProps = {
  position:
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left';
  id: string;
  onResize?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    position: string
  ) => void;
};

const ResizeAnchor = ({ position, id, onResize }: ResizeAnchorProps) => {
  const { focus } = useManageWindow(id);
  return (
    <div
      onMouseDown={(e) => {
        e.stopPropagation();
        focus();
        onResize?.(e, position);
      }}
      {...stylex.props(style.root, style[position])}
    ></div>
  );
};
export default ResizeAnchor;
