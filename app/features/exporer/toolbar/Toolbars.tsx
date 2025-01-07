import Divider from './Divider';
import DropdownItem from './DropdownItem';
import Expand from './Expand';

const Toolbars = () => {
  return (
    <Expand>
      <DropdownItem checked title="Standard Buttons" />
      <DropdownItem checked title="Address Bar" />
      <DropdownItem title="Links" />
      <Divider />
      <DropdownItem checked title="Lock the Toolbars" />
      <DropdownItem title="Customize..." />
    </Expand>
  );
};
export default Toolbars;
