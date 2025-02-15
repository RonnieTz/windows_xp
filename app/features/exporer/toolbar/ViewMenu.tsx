import Divider from './Divider';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import { useSelectExpandMenuItem } from '@/app/hooks/useSelectExpandMenuItem';
import Toolbars from './Toolbars';
import ExplorerBar from './ExplorerBar';
import ArrangeIconsBy from './ArrangeIconsBy';
import GoTo from './GoTo';
import { useManageViews } from '../hooks/useManageViews';

type ViewMenuProps = {
  closeDropDown: () => void;
};

const ViewMenu = ({ closeDropDown }: ViewMenuProps) => {
  const { itemHovered, onMouseEnter, onMouseLeave, selectedItem } =
    useSelectExpandMenuItem(500);
  const { setView, view } = useManageViews();
  const changeView = (view: string) => {
    setView(view);
    closeDropDown();
  };

  return (
    <Dropdown>
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        hasExpand
        title="Toolbars"
      >
        <Toolbars />
      </DropdownItem>
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        checked
        title="Status Bar"
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        hasExpand
        title="Explorer Bar"
      >
        <ExplorerBar />
      </DropdownItem>
      <Divider />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="Thumbnails"
        selected={view === 'Thumbnails'}
        callback={changeView}
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="Tiles"
        selected={view === 'Tiles'}
        callback={changeView}
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="Icons"
        selected={view === 'Icons'}
        callback={changeView}
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="List"
        selected={view === 'List'}
        callback={changeView}
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="Details"
        selected={view === 'Details'}
        callback={changeView}
      />
      <Divider />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        hasExpand
        title="Arrange Icons By"
      >
        <ArrangeIconsBy />
      </DropdownItem>
      <Divider />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="Choose Details"
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        hasExpand
        title="Go To"
      >
        <GoTo />
      </DropdownItem>
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="Refresh"
      />
    </Dropdown>
  );
};
export default ViewMenu;
