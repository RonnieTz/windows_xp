'use client';
import * as stylex from '@stylexjs/stylex';
import { useRedux } from '@/app/hooks/useRedux';

const { wrapper, hidden } = stylex.create({
  wrapper: {
    height: 530,
    width: 450,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  hidden: {
    display: 'none',
  },
});
type ClientWrapperProps = {
  children?: React.ReactNode;
};
const ClientWrapper = ({ children }: ClientWrapperProps) => {
  const { useReduxSelector } = useRedux();
  const startMenuIsOpen = useReduxSelector(
    (state) => state.system.startMenuIsOpen
  );
  return (
    <div {...stylex.props(wrapper, !startMenuIsOpen && hidden)}>{children}</div>
  );
};
export default ClientWrapper;
