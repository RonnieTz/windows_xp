import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import { useManageWindow } from '@/app/hooks/useManageWindow';

const styles = stylex.create({
  task: {
    height: 30,
    minWidth: 130,
    maxWidth: 200,
    borderRadius: 3,
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    gap: 5,
    padding: '0 5px',
    border: '1px solid rgb(48, 111, 217)',
    backgroundColor: 'rgb(57, 128, 244)',
    boxShadow: '1px 1px 2px rgba(255, 255, 255, 0.4) inset',
  },
  icon: {
    height: 20,
    width: 20,
  },
  title: {
    color: '#fff',
    overflow: 'hidden',
    fontSize: 13,
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  focused: {
    border: '1px solid rgb(18, 61, 148)',
    backgroundColor: 'rgb(26, 80, 184)',
    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.3) inset',
  },
});

type TaskProps = { id: string };

const Task = ({ id }: TaskProps) => {
  const { window, focus, blur, restoreMinimized, minimize, restore } =
    useManageWindow(id);
  const handleClick = () => {
    if (window.minimized) {
      restoreMinimized();
      focus();
    }
    if (!window.minimized && !window.focus) {
      focus();
    }
    if (!window.minimized && window.focus) {
      blur();
      minimize();
    }
  };
  return (
    <div
      onClick={handleClick}
      {...stylex.props(styles.task, window.focus && styles.focused)}
    >
      <Image
        {...stylex.props(styles.icon)}
        src={window.icon}
        alt="Taskbar image"
      />
      <div {...stylex.props(styles.title)}>{window.title}</div>
    </div>
  );
};
export default Task;
