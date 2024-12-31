import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import buttonImageNormal from '@/public/taskbar/start-button-normal.png';

const { startButtonBackground } = stylex.create({
  startButtonBackground: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

const StartButtonBackground = () => {
  return (
    <Image
      {...stylex.props(startButtonBackground)}
      src={buttonImageNormal}
      alt="Start button"
    />
  );
};
export default StartButtonBackground;
