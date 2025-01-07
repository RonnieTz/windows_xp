import * as stylex from '@stylexjs/stylex';
import ToolbarItem from './ToolbarItem';
import LogoXP from './LogoXP';
import { Dispatch, SetStateAction } from 'react';
import FileMenu from './FileMenu';
import EditMenu from './EditMenu';
import ViewMenu from './ViewMenu';
import FavoritesMenu from './FavoritesMenu';
import ToolsMenu from './ToolsMenu';
import HelpMenu from './HelpMenu';

const styles = stylex.create({
  toolbar: {
    height: 30,
    width: '100%',
    backgroundColor: 'rgb(239, 236, 223)',
    display: 'flex',
    padding: 2,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#fff #fff #d8d2bd #fff',
    position: 'relative',
    zIndex: 1,
  },
});

export type SelectedItems =
  | 'File'
  | 'Edit'
  | 'View'
  | 'Favorites'
  | 'Tools'
  | 'Help';

type Props = {
  props: {
    setShowDropdown: Dispatch<SetStateAction<boolean>>;
    showDropdown: boolean;
    setSelected: Dispatch<SetStateAction<SelectedItems | null>>;
    selected: SelectedItems | null;
  };
};

const Toolbar = ({ props }: Props) => {
  return (
    <div id="toolbar" {...stylex.props(styles.toolbar)}>
      <ToolbarItem props={props} title="File">
        <FileMenu />
      </ToolbarItem>
      <ToolbarItem props={props} title="Edit">
        <EditMenu />
      </ToolbarItem>
      <ToolbarItem props={props} title="View">
        <ViewMenu />
      </ToolbarItem>
      <ToolbarItem props={props} title="Favorites">
        <FavoritesMenu />
      </ToolbarItem>
      <ToolbarItem props={props} title="Tools">
        <ToolsMenu />
      </ToolbarItem>
      <ToolbarItem props={props} title="Help">
        <HelpMenu />
      </ToolbarItem>
      <LogoXP />
    </div>
  );
};
export default Toolbar;
