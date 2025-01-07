'use client';

import * as stylex from '@stylexjs/stylex';
import Explorer from '../exporer/Explorer';

const { desktop } = stylex.create({
  desktop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
});

const WindowsLayer = () => {
  return (
    <div {...stylex.props(desktop)}>
      <Explorer />
    </div>
  );
};
export default WindowsLayer;
