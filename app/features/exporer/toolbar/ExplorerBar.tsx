import Divider from './Divider';
import DropdownItem from './DropdownItem';
import Expand from './Expand';

const ExplorerBar = () => {
  return (
    <Expand>
      <DropdownItem secondaryTitle="Ctrl+E" title="Search" />
      <DropdownItem secondaryTitle="Ctrl+I" title="Favorites" />
      <DropdownItem secondaryTitle="Ctrl+H" title="History" />
      <DropdownItem title="Folders" />
      <Divider />
      <DropdownItem title="Tip of the Day" />
    </Expand>
  );
};
export default ExplorerBar;
