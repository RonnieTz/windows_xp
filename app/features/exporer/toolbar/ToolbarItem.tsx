import * as stylex from '@stylexjs/stylex';
import { Dispatch, SetStateAction } from 'react';

const styles = stylex.create({
  toolbarItem: {
    height: '100%',
    color: {
      default: 'black',
      ':hover': 'white',
    },
    padding: '0 6px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    position: 'relative',
    backgroundColor: {
      default: 'transparent',
      ':hover': 'rgb(47,106,197)',
    },
  },
  selected: {
    backgroundColor: 'rgb(47,106,197)',
    color: 'white',
  },
});

type SelectedItems = 'File' | 'Edit' | 'View' | 'Favorites' | 'Tools' | 'Help';

type Props = {
  title: SelectedItems;
  props: {
    setShowDropdown: Dispatch<SetStateAction<boolean>>;
    showDropdown: boolean;
    setSelected: Dispatch<SetStateAction<SelectedItems | null>>;
    selected: SelectedItems | null;
  };
  children: React.ReactNode;
};

const ToolbarItem = ({ title, props, children }: Props) => {
  const { setShowDropdown, showDropdown, setSelected, selected } = props;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setShowDropdown(!showDropdown);
      }}
      onMouseEnter={() => {
        setSelected(title);
      }}
      {...stylex.props(
        styles.toolbarItem,
        selected === title && showDropdown && styles.selected
      )}
    >
      <div>{title}</div>
      {showDropdown && selected === title && children}
    </div>
  );
};
export default ToolbarItem;
