'use client';

import * as stylex from '@stylexjs/stylex';
import DesktopLink from '../links/desktopLink/DesktopLink';
import { logos } from '@/public/logos';

const { desktop } = stylex.create({
  desktop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'column',
  },
});

const LinksLayer = () => {
  const { folderClosed } = logos;
  return <div {...stylex.props(desktop)}></div>;
};
export default LinksLayer;
