import * as stylex from '@stylexjs/stylex';
import exitIcon from '@/public/window/Exit.webp';
import maximizeIcon from '@/public/window/Maximize.webp';
import mimimizeIcon from '@/public/window/Minimize.webp';
import restoreIcon from '@/public/window/Restore.webp';
import NextImage from 'next/image';
import { useManageWindow } from '../hooks/useManageWindow';

const styles = stylex.create({
  button: {
    height: '100%',
    aspectRatio: '1 / 1',
    display: 'flex',
    gap: 2,
  },
  icon: {
    height: '100%',
    width: '100%',
    transition: 'filter 0.1s ease',
    filter: {
      ':hover': 'brightness(1.2)',
      ':active': 'brightness(0.8)',
    },
  },
});

type ButtonProps = {
  type: 'exit' | 'maximize' | 'minimize';
  id: string;
};

const Button = ({ type, id }: ButtonProps) => {
  const { window, maximize, restore, close, minimize, blur } =
    useManageWindow(id);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (type === 'exit') {
      close();
    }
    if (type === 'maximize') {
      if (window?.fullscreen) {
        restore();
      } else {
        maximize();
      }
    }
    if (type === 'minimize') {
      minimize();
      blur();
    }
  };
  return (
    <div
      onDragStart={(e) => {
        e.stopPropagation();
      }}
      onMouseDown={(e) => e.stopPropagation()}
      onDrag={(e) => e.stopPropagation()}
      onDragEnd={(e) => e.stopPropagation()}
      onClick={handleClick}
      {...stylex.props(styles.button)}
    >
      <NextImage
        {...stylex.props(styles.icon)}
        src={
          type === 'exit'
            ? exitIcon
            : type === 'maximize'
            ? window?.fullscreen
              ? restoreIcon
              : maximizeIcon
            : type === 'minimize'
            ? mimimizeIcon
            : restoreIcon
        }
        alt={type}
      />
    </div>
  );
};
export default Button;
