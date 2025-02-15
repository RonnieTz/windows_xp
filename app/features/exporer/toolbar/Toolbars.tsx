import Divider from './Divider';
import DropdownItem from './DropdownItem';
import Expand from './Expand';
import { useManageViews } from '../hooks/useManageViews';

const Toolbars = () => {
  const { toggleStandartBar, toggleAddressBar, addressBar, standartBar } =
    useManageViews();
  return (
    <Expand>
      <DropdownItem
        checked={standartBar}
        callback={toggleStandartBar}
        title="Standard Buttons"
      />
      <DropdownItem
        checked={addressBar}
        callback={toggleAddressBar}
        title="Address Bar"
      />
      <DropdownItem title="Links" />
      <Divider />
      <DropdownItem checked title="Lock the Toolbars" />
      <DropdownItem title="Customize..." />
    </Expand>
  );
};
export default Toolbars;
