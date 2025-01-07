import Divider from './Divider';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

const EditMenu = () => {
  return (
    <Dropdown>
      <DropdownItem title="Undo" secondaryTitle="Ctrl+Z" />
      <Divider />
      <DropdownItem title="Cut" secondaryTitle="Ctrl+X" />
      <DropdownItem title="Copy" secondaryTitle="Ctrl+C" />
      <DropdownItem disabled title="Paste" secondaryTitle="Ctrl+V" />
      <DropdownItem title="Paste Shortcut" />
      <Divider />
      <DropdownItem title="Copy To Folder" />
      <DropdownItem title="Move To Folder" />
      <Divider />
      <DropdownItem title="Select All" secondaryTitle="Ctrl+A" />
      <DropdownItem title="Invert Selection" />
    </Dropdown>
  );
};
export default EditMenu;
