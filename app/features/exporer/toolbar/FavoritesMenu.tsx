import { useSelectExpandMenuItem } from '@/app/hooks/useSelectExpandMenuItem';
import Divider from './Divider';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import Expand from './Expand';
import folderIcon from '@/public/desktop/FolderClosed.webp';
import catalogIcon from '@/public/start/Windows Catalog.webp';

const FavoritesMenu = () => {
  const { itemHovered, onMouseEnter, onMouseLeave, selectedItem } =
    useSelectExpandMenuItem(500);
  return (
    <Dropdown>
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="Add to Favorites..."
      />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        title="Organize Favorites..."
      />
      <Divider />
      <DropdownItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
        icon={folderIcon}
        hasExpand
        title="Links"
      >
        <Expand>
          <DropdownItem icon={catalogIcon} title="Windows Marketplace" />
        </Expand>
      </DropdownItem>
    </Dropdown>
  );
};
export default FavoritesMenu;
