import * as stylex from '@stylexjs/stylex';
import backgroundImage from '../../../public/desktop/wallpaper.webp';
import Image from 'next/image';
import Menu from '../menu/Menu';
import ClientWrapper from '../menu/ClientWrapper';
import WindowsLayer from './WindowsLayer';

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
  },
});

const Desktop = () => {
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
      <WindowsLayer />
    </div>
  );
};
export default Desktop;
