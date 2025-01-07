import Divider from './Divider';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

const FileMenu = () => {
  return (
    <Dropdown>
      <DropdownItem disabled title="Create Shortcut" />
      <DropdownItem title="Delete" />
      <DropdownItem title="Rename" />
      <DropdownItem title="Properties" />
      <Divider />
      <DropdownItem title="Close" />
    </Dropdown>
  );
};
export default FileMenu;
