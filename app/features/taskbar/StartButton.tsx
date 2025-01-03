'use client';

import * as stylex from '@stylexjs/stylex';
import { useHover } from '@/app/hooks/useHover';
import Tooltip from './Tooltip';
import { useRedux } from '@/app/hooks/useRedux';
import { openStartMenu } from '@/app/redux/slices/systemSlice';

const { startButton, open } = stylex.create({
  startButton: {
    height: '100%',
    width: 120,
    position: 'relative',
    filter: {
      default: null,
      ':hover': 'brightness(1.1)',
    },
    transition: 'filter 0.1s',
  },
  open: {
    filter: 'brightness(0.8)',
  },
});

type StartButtonProps = {
  children?: React.ReactNode;
};

const StartButton = ({ children }: StartButtonProps) => {
  const { bind, isHovered } = useHover();
  const { useReduxSelector, useReduxDispatch } = useRedux();
  const dispatch = useReduxDispatch();
  const startMenuIsOpen = useReduxSelector(
    (state) => state.system.startMenuIsOpen
  );
  return (
    <div
      onClickCapture={(e) => {
        e.stopPropagation();
        dispatch(openStartMenu());
      }}
      {...bind}
      {...stylex.props(startButton, startMenuIsOpen && open)}
    >
      {children}
      {isHovered && !startMenuIsOpen && (
        <Tooltip position={{ left: 20 }}>
          <div>Click here to begin</div>
        </Tooltip>
      )}
    </div>
  );
};
export default StartButton;
