import { logos } from '@/public/logos';
import * as stylex from '@stylexjs/stylex';
import MenuItem from './MenuItem';
import MenuItemIcon from './MenuItemIcon';
import Divider from './Divider';
import { tooltipTexts } from '../desktop/tooltips';

const { container } = stylex.create({
  container: {
    position: 'absolute',
    top: '14%',
    right: '1%',
    width: '48.5%',
    height: '76.5%',
    zIndex: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    padding: 3,
  },
});

const RightMenu = () => {
  return (
    <div {...stylex.props(container)}>
      <MenuItem tooltip={tooltipTexts.myDocuments} isBold title="My Documents">
        <MenuItemIcon icon={logos.myDocuments} />
      </MenuItem>
      <MenuItem hasExpand isBold title="My Recent Documents">
        <MenuItemIcon icon={logos.myRecentDocuments} />
      </MenuItem>
      <MenuItem tooltip={tooltipTexts.myPictures} isBold title="My Pictures">
        <MenuItemIcon icon={logos.myPictures} />
      </MenuItem>
      <MenuItem tooltip={tooltipTexts.myMusic} isBold title="My Music">
        <MenuItemIcon icon={logos.myMusic} />
      </MenuItem>
      <MenuItem tooltip={tooltipTexts.myComputer} isBold title="My Computer">
        <MenuItemIcon icon={logos.myComputer} />
      </MenuItem>
      <Divider />
      <MenuItem tooltip={tooltipTexts.controlPanel} title="Control Panel">
        <MenuItemIcon icon={logos.controlPanel} />
      </MenuItem>
      <MenuItem
        tooltip={tooltipTexts.programsAccess}
        title="Set Program Access and Defaults"
      >
        <MenuItemIcon icon={logos.setProgramAccess} />
      </MenuItem>
      <MenuItem hasExpand title="Connect to">
        <MenuItemIcon icon={logos.connectTo} />
      </MenuItem>
      <MenuItem
        tooltip={tooltipTexts.printersAndFaxes}
        title="Printers and Faxes"
      >
        <MenuItemIcon icon={logos.printersAndFaxes} />
      </MenuItem>
      <Divider />
      <MenuItem tooltip={tooltipTexts.helpAndSupport} title="Help and Support">
        <MenuItemIcon icon={logos.helpAndSupport} />
      </MenuItem>
      <MenuItem tooltip={tooltipTexts.search} title="Search">
        <MenuItemIcon icon={logos.search} />
      </MenuItem>
      <MenuItem tooltip={tooltipTexts.run} title="Run..">
        <MenuItemIcon icon={logos.run} />
      </MenuItem>
    </div>
  );
};
export default RightMenu;
