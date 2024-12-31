'use client';

import * as stylex from '@stylexjs/stylex';
import { useDateTime } from '@/app/hooks/useDateTime';

const { style } = stylex.create({
  style: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: 13,
    letterSpacing: 1,
    userSelect: 'none',
    textShadow: '1px 1px 5px black',
  },
});

const Time = () => {
  const { time } = useDateTime();
  return <div {...stylex.props(style)}>{time}</div>;
};
export default Time;
