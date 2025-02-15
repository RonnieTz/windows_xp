import * as stylex from '@stylexjs/stylex';
import Toolbar from './toolbar/Toolbar';
import AddressBar from './addressBar/AddressBar';
import StandardBar from './standardBar/StandardBar';
import { Dispatch, SetStateAction } from 'react';
import { useManageViews } from './hooks/useManageViews';

const styles = stylex.create({
  barContainer: {
    width: '100%',
    border: '1.5px solid #aca899',
  },
});

type SelectedItems = 'File' | 'Edit' | 'View' | 'Favorites' | 'Tools' | 'Help';

type Props = {
  props: {
    setShowDropdown: Dispatch<SetStateAction<boolean>>;
    showDropdown: boolean;
    setSelected: Dispatch<SetStateAction<SelectedItems | null>>;
    selected: SelectedItems | null;
  };
};

const BarContainer = ({ props }: Props) => {
  const { standartBar, addressBar } = useManageViews();
  return (
    <div {...stylex.props(styles.barContainer)}>
      <Toolbar props={props} />
      {standartBar && <StandardBar />}
      {addressBar && <AddressBar />}
    </div>
  );
};
export default BarContainer;
