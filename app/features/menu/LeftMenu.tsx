import * as stylex from '@stylexjs/stylex';
import MenuItem from './MenuItem';
import MenuItemIcon from './MenuItemIcon';
import { logos } from '@/public/logos';
import Divider from './Divider';
import { tooltipTexts } from '../desktop/tooltips';
import AllProgramsButton from './AllProgramsButton';

const { container } = stylex.create({
  container: {
    position: 'absolute',
    top: '14%',
    left: '1%',
    width: '48.5%',
    height: '76.5%',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    padding: 3,
  },
});

const LeftMenu = () => {
  return (
    <div {...stylex.props(container)}>
      <AllProgramsButton />
      <MenuItem
        isLarge
        descriptionText="Internet Explorer"
        isBold
        title="Intenet"
        tooltip={tooltipTexts.intenetExplorer}
      >
        <MenuItemIcon icon={logos.internetExplorer} />
      </MenuItem>
      <MenuItem
        tooltip={tooltipTexts.email}
        isLarge
        descriptionText="Outlook Express"
        isBold
        title="Email"
      >
        <MenuItemIcon icon={logos.email} />
      </MenuItem>
      <Divider />
      <MenuItem
        tooltip={tooltipTexts.windowsMediaPlayer}
        isLarge
        title="Windows Media Player"
      >
        <MenuItemIcon icon={logos.windowsMediaPlayer} />
      </MenuItem>
      <MenuItem
        isLarge
        title="Windows Messenger"
        tooltip={tooltipTexts.messenger}
      >
        <MenuItemIcon icon={logos.windowsMessenger} />
      </MenuItem>
      <MenuItem isLarge title="Tour Windows XP" tooltip={tooltipTexts.tourXP}>
        <MenuItemIcon icon={logos.tourWindowsXP} />
      </MenuItem>
      <Divider position="8%" fixed />
    </div>
  );
};
export default LeftMenu;
