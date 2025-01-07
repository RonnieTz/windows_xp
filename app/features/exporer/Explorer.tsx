import * as stylex from '@stylexjs/stylex';
import Window from '../windows/Window';
import Main from './Main';
import BarContainer from './BarContainer';
import { useManageToolbar } from './hooks/useManageToolbar';
import { useManageWindow } from '../windows/hooks/useManageWindow';

const styles = stylex.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

type WindowProps = {};

const Explorer = ({}: WindowProps) => {
  const { closeDropdown, props } = useManageToolbar();
  const { window } = useManageWindow('1');

  return (
    <>
      {window?.open && (
        <Window id="1">
          <div onClick={closeDropdown} {...stylex.props(styles.container)}>
            <BarContainer props={props} />
            <Main />
          </div>
        </Window>
      )}
    </>
  );
};

export default Explorer;
