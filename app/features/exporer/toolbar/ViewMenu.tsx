import Divider from './Divider';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import { useSelectExpandMenuItem } from '@/app/hooks/useSelectExpandMenuItem';
import Toolbars from './Toolbars';
import ExplorerBar from './ExplorerBar';
import ArrangeIconsBy from './ArrangeIconsBy';
import GoTo from './GoTo';

const ViewMenu = () => {
  const { itemHovered, onMouseEnter, onMouseLeave, selectedItem } =
    useSelectExpandMenuItem(500);

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
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        selected
        title="Tiles"
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="Icons"
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="List"
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="Details"
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
