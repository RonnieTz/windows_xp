'use client';

import * as stylex from '@stylexjs/stylex';
import backgroundImage from '../../../public/desktop/wallpaper.webp';
import Image from 'next/image';
import Menu from '../menu/Menu';
import ClientWrapper from '../menu/ClientWrapper';
import LinksLayer from './LinksLayer';
import DesktopLink from '../links/DesktopLink';
import { useRedux } from '@/app/hooks/useRedux';
import Explorer from '../exporer/Explorer';

const { background, desktop } = stylex.create({
  desktop: {
    width: '100%',
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  background: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
});

const Desktop = () => {
  const { useReduxSelector } = useRedux();
  const { links } = useReduxSelector((state) => state.link);
  const { windows } = useReduxSelector((state) => state.window);
  return (
    <div {...stylex.props(desktop)}>
      <Image
        priority
        {...stylex.props(background)}
        src={backgroundImage}
        alt="Desktop wallpaper image"
      />
      <ClientWrapper>
        <Menu />
      </ClientWrapper>
      <LinksLayer location="desktop" />
      {links
        .filter((link) => link.location === 'desktop')
        .map((link) => (
          <DesktopLink key={link.id} link={link} />
        ))}
      {windows.map(
        (window) =>
          window.app === 'explorer' && (
            <Explorer key={window.id} location={window.id} />
          )
      )}
    </div>
  );
};
export default Desktop;
