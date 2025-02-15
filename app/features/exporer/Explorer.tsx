import * as stylex from '@stylexjs/stylex';
import Window from '../windows/Window';
import Main from './Main';
import BarContainer from './BarContainer';
import { useManageToolbar } from './hooks/useManageToolbar';
import { useManageWindow } from '../windows/hooks/useManageWindow';
import { useState } from 'react';

const styles = stylex.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

type Props = {
  location: string;
};

const Explorer = ({ location }: Props) => {
  const { closeDropdown, props } = useManageToolbar();
  const { window } = useManageWindow(location);
  const [folderLocation, setFolderLocation] = useState(location);
  const changeFolderLocation = (newLocation: string) => {
    setFolderLocation(newLocation);
  };
  const manageLocation = {
    changeFolderLocation,
    folderLocation,
    windowID: location,
  };
  const [history, setHistory] = useState<string[]>([location]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const manageHistory = {
    history,
    add: (newLocation: string) => {
      if (history[currentIndex] === newLocation) return;
      setHistory([...history, newLocation]);
      setCurrentIndex(history.length);
    },
    goBack: () => {
      if (currentIndex === 0) return;
      setCurrentIndex(currentIndex - 1);
      setFolderLocation(history[currentIndex - 1]);
    },
  };

  return (
    <>
      {window?.open && (
        <Window id={window.id}>
          <div onClick={closeDropdown} {...stylex.props(styles.container)}>
            <BarContainer props={props} />
            <Main manageLocation={manageLocation} />
          </div>
        </Window>
      )}
    </>
  );
};

export default Explorer;
