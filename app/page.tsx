import * as stylex from '@stylexjs/stylex';
import Desktop from './features/desktop/Desktop';
import Taskbar from './features/taskbar/Taskbar';

const styles = stylex.create({
  app: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
});

export default function Home() {
  return (
    <div {...stylex.props(styles.app)}>
      <Desktop />
      <Taskbar />
    </div>
  );
}
