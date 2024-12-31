'use client';

import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import icon from '@/public/start/All_Programs.webp';
import { useRedux } from '@/app/hooks/useRedux';
import {
  hideAllProgramsMenu,
  showAllProgramsMenu,
} from '@/app/redux/slices/systemSlice';
import { useDelay } from '@/app/hooks/useDelay';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { useRef } from 'react';
import AllProgramsMenu from './AllProgramsMenu';

const styles = stylex.create({
  container: {
    height: 30,
    width: '96%',
    position: 'absolute',
    bottom: '0.5%',
    left: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    transition: 'all 0.1s',
    zIndex: 1000000,
    backgroundColor: {
      ':hover': 'rgb(47, 113, 205)',
    },
    color: {
      ':hover': 'white',
    },
  },
  text: {
    fontSize: 12,
    fontWeight: 700,
  },
  menuIsOpen: {
    backgroundColor: 'rgb(47, 113, 205)',
    color: 'white',
  },
  icon: {
    height: '100%',
    width: 'auto',
    scale: 0.8,
  },
});

const AllProgramsButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { useReduxDispatch, useReduxSelector } = useRedux();
  const isOpen = useReduxSelector(
    (state) => state.system.allProgramsMenuIsOpen
  );
  const dispatch = useReduxDispatch();
  const handleOpen = () => {
    dispatch(showAllProgramsMenu());
  };
  const handleClose = () => {
    dispatch(hideAllProgramsMenu());
  };
  const { onMouseEnter, onMouseLeave } = useDelay(500, handleOpen);
  useClickOutside(ref, handleClose);
  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...stylex.props(styles.container, isOpen && styles.menuIsOpen)}
    >
      <div {...stylex.props(styles.text)}>All programs</div>
      <Image
        {...stylex.props(styles.icon)}
        src={icon}
        alt="All programs icon"
      />
      {isOpen && <AllProgramsMenu />}
    </div>
  );
};
export default AllProgramsButton;
