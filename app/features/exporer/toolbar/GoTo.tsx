import Divider from './Divider';
import DropdownItem from './DropdownItem';
import Expand from './Expand';

const GoTo = () => {
  return (
    <Expand>
      <DropdownItem disabled secondaryTitle="Alt+Left Arrow" title="Back" />
      <DropdownItem disabled secondaryTitle="Alt+Right Arrow" title="Forward" />
      <DropdownItem title="Up One Level" />
      <Divider />
      <DropdownItem secondaryTitle="Alt+Home" title="Home Page" />
      <Divider />
      <DropdownItem checked title="My Computer" />
    </Expand>
  );
};
export default GoTo;
