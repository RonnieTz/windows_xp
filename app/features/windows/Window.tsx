'use client';

import * as stylex from '@stylexjs/stylex';
import Bar from './components/Bar';
import Content from './components/Content';
import { useManageWindow } from './hooks/useManageWindow';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import ResizeAnchor from './components/ResizeAnchor';

const { container, fullscreen, height, left, top, width, zIndex, minimized } =
  stylex.create({
    container: {
      position: 'absolute',
      zIndex: 1,
      borderRadius: '8px 8px 0 0',
      borderTopWidth: 0,
      display: 'flex',
      flexDirection: 'column',
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
    height: (height: number) => ({
      height,
    }),
    width: (width: number) => ({
      width,
    }),
    top: (top: number) => ({
      top,
    }),
    left: (left: number) => ({
      left,
    }),
    zIndex: (zIndex: number) => ({
      zIndex,
    }),
    minimized: {
      display: 'none',
    },
  });

type WindowProps = {
  id: string;
  children: React.ReactNode;
};

const Window = ({ id, children }: WindowProps) => {
  const {
    blur,
    focus,
    window,
    windowPosition,
    onDragStart,
    windowSize,
    resize,
    isDragging,
    onDragEnd,
  } = useManageWindow(id);
  const ref = useClickOutside(blur);
  return (
    <div
      onClickCapture={focus}
      onClick={focus}
      ref={ref}
      {...stylex.props(
        container,
        height(windowSize.height),
        width(windowSize.width),
        top(windowPosition.top || 0),
        left(windowPosition.left || 0),
        zIndex(window?.zIndex || 0),
        window?.fullscreen && fullscreen,
        window?.minimized && minimized
      )}
    >
      <Bar
        id={id}
        fullscreen={window?.fullscreen || false}
        focus={window?.focus}
        onDragStart={onDragStart}
        isDragging={isDragging.current}
        onDragEnd={onDragEnd}
      />
      <Content fullscreen={window?.fullscreen || false} focus={window?.focus}>
        {children}
      </Content>
      {!window?.fullscreen && (
        <>
          <ResizeAnchor onResize={resize} id={id} position="bottomLeft" />
          <ResizeAnchor onResize={resize} id={id} position="bottomRight" />
          <ResizeAnchor onResize={resize} id={id} position="topLeft" />
          <ResizeAnchor onResize={resize} id={id} position="topRight" />
          <ResizeAnchor onResize={resize} id={id} position="top" />
          <ResizeAnchor onResize={resize} id={id} position="right" />
          <ResizeAnchor onResize={resize} id={id} position="bottom" />
          <ResizeAnchor onResize={resize} id={id} position="left" />
        </>
      )}
    </div>
  );
};
export default Window;
