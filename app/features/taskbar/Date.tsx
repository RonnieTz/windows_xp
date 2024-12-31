'use client';

import * as stylex from '@stylexjs/stylex';
import { useDateTime } from '@/app/hooks/useDateTime';

const { style } = stylex.create({
  style: {
    color: 'black',
    fontSize: 11,
    userSelect: 'none',
  },
});

const Date = () => {
  const { date } = useDateTime();
  return <div {...stylex.props(style)}>{date}</div>;
};
export default Date;
