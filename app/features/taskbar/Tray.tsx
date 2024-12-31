'use client';

import * as stylex from '@stylexjs/stylex';
import trayImage from '@/public/taskbar/timebox.jpg';
import Image from 'next/image';
import Time from './Time';
import Tooltip from './Tooltip';
import Date from './Date';
import { useHover } from '@/app/hooks/useHover';

const { tray, background } = stylex.create({
  tray: {
    height: '100%',
    width: '100px',
    position: 'relative',
  },
  background: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

const Tray = () => {
  const { bind, isHovered } = useHover();
  return (
    <div {...bind} {...stylex.props(tray)}>
      <Image {...stylex.props(background)} src={trayImage} alt="Tray image" />
      <Time />
      {isHovered && (
        <Tooltip position={{ right: 0 }}>
          <Date />
        </Tooltip>
      )}
    </div>
  );
};
export default Tray;
