import Divider from './Divider';
import DropdownItem from './DropdownItem';
import Expand from './Expand';

const ArrangeIconsBy = () => {
  return (
    <Expand>
      <DropdownItem title="Name" />
      <DropdownItem selected title="Type" />
      <DropdownItem title="Total Size" />
      <DropdownItem title="Free Space" />
      <DropdownItem title="Comments" />
      <Divider />
      <DropdownItem checked title="Show in Groups" />
      <DropdownItem disabled title="Auto Arrange" />
      <DropdownItem disabled title="Align to Grid" />
    </Expand>
  );
};
export default ArrangeIconsBy;
