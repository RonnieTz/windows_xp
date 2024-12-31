'use client';

import * as stylex from '@stylexjs/stylex';
import trayImage from '@/public/taskbar/timebox.jpg';
import Image from 'next/image';
import Tooltip from './Tooltip';
import { useHover } from '@/app/hooks/useHover';
import dynamic from 'next/dynamic';

const Time = dynamic(() => import('@/app/features/taskbar/Time'), {
  ssr: false,
});
const Date = dynamic(() => import('@/app/features/taskbar/Date'), {
  ssr: false,
});

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
