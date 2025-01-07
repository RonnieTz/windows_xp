import Divider from './Divider';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

const ToolsMenu = () => {
  return (
    <Dropdown>
      <DropdownItem title="Map Network Drive..." />
      <DropdownItem title="Disconnect Network Drive..." />
      <DropdownItem title="Synchronize" />
      <Divider />
      <DropdownItem title="Folder Options..." />
    </Dropdown>
  );
};
export default ToolsMenu;
