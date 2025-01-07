import Divider from './Divider';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

const HelpMenu = () => {
  return (
    <Dropdown>
      <DropdownItem title="Help and Support Center" />
      <Divider />
      <DropdownItem title="As this copy of Windows legal?" />
      <DropdownItem title="About Windows" />
    </Dropdown>
  );
};
export default HelpMenu;
