'use client';

import * as stylex from '@stylexjs/stylex';
import Bar from './Bar';
import Content from './Content';
import { useManageWindow } from '@/app/hooks/useManageWindow';
import { useClickOutside } from '@/app/hooks/useClickOutside';

const styles = stylex.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    borderRadius: '8px 8px 0 0',
    borderTopWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0 2px 0 rgba(0, 0, 255, 0.5)',
  },
  fullscreen: {
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    borderRadius: 0,
    boxShadow: 'none',
    border: 'none',
  },
});

type WindowProps = {
  id: string;
};

const Window = ({ id }: WindowProps) => {
  const {
    blur,
    focus,
    window,
    windowPosition,
    onDrag,
    onDragStart,
    onDragEnd,
  } = useManageWindow(id);
  const ref = useClickOutside(blur);
  return (
    <div
      style={{
        width: !window.fullscreen ? window.width : undefined,
        height: !window.fullscreen ? window.height : undefined,
        top: !window.fullscreen ? windowPosition.top : undefined,
        left: !window.fullscreen ? windowPosition.left : undefined,
        zIndex: window.zIndex,
        display: !window.minimized ? undefined : 'none',
      }}
      onClickCapture={focus}
      onClick={focus}
      ref={ref}
      {...stylex.props(
        styles.container,
        window.fullscreen && styles.fullscreen
      )}
    >
      <Bar
        id={id}
        fullscreen={window.fullscreen}
        focus={window?.focus}
        onDrag={onDrag}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
      <Content fullscreen={window.fullscreen} focus={window?.focus} />
    </div>
  );
};
export default Window;
