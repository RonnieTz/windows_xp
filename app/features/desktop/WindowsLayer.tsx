'use client';

import { useRedux } from '@/app/hooks/useRedux';
import * as stylex from '@stylexjs/stylex';
import Window from '../windows/Window';

const { desktop } = stylex.create({
  desktop: {
    width: '100%',
    height: '100%',
  },
});

const WindowsLayer = () => {
  const { useReduxSelector } = useRedux();
  const windows = useReduxSelector((state) => state.window.windows);
  return (
    <div {...stylex.props(desktop)}>
      {windows.map(
        (window) => window.open && <Window key={window.id} id={window.id} />
      )}
    </div>
  );
};
export default WindowsLayer;
