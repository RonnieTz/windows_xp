'use client';

import * as stylex from '@stylexjs/stylex';
import backgroundImage from '@/public/start/menu.jpg';
import Image from 'next/image';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { useRedux } from '@/app/hooks/useRedux';
import {
  toggleStartMenu,
  hideAllProgramsMenu,
} from '@/app/redux/slices/systemSlice';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { useRef } from 'react';

const styles = stylex.create({
  menu: {
    height: 500,
    width: 480,
    bottom: 0,
    left: 0,
    position: 'absolute',
    zIndex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
    filter: 'drop-shadow(2px 6px 2px rgba(0, 0, 0, 0.7))',
    borderRadius: '8px 8px 0 0',
  },
});

const Menu = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { useReduxDispatch } = useRedux();
  const dispatch = useReduxDispatch();
  const handleClose = () => {
    dispatch(toggleStartMenu());
    dispatch(hideAllProgramsMenu());
  };
  useClickOutside(ref, handleClose);
  return (
    <div ref={ref} {...stylex.props(styles.menu)}>
      <Image
        {...stylex.props(styles.image)}
        src={backgroundImage}
        alt="Menu background image"
      />
      <LeftMenu />
      <RightMenu />
    </div>
  );
};
export default Menu;
