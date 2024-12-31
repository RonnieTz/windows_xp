import ExpandMenu from './ExpandMenu';
import ExpandMenuItem from './ExpandMenuItem';
import Divider from './Divider';
import { logos } from '@/public/logos';
import Accessories from './Accessories';
import { useSelectExpandMenuItem } from '@/app/hooks/useSelectExpandMenuItem';
import Games from './Games';
import { tooltipTexts } from '../desktop/tooltips';

const AllProgramsMenu = () => {
  const { selectedItem, onMouseEnter, onMouseLeave, itemHovered } =
    useSelectExpandMenuItem(500);
  return (
    <ExpandMenu root>
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Set program Access and Defaults"
        icon={logos.setProgramAccess}
        tooltipText={tooltipTexts.programsAccess}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Windows Catalog"
        icon={logos.windowsCatalog}
        tooltipText={tooltipTexts.catalog}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Windows Update"
        icon={logos.windowsUpdate}
        tooltipText={tooltipTexts.windowsUpdate}
      />
      <Divider />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        hasExpand
        title="Accessories"
        icon={logos.menuPrograms}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
      >
        <Accessories />
      </ExpandMenuItem>
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        hasExpand
        title="Games"
        icon={logos.menuPrograms}
        itemHovered={itemHovered}
      >
        <Games />
      </ExpandMenuItem>
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selectedItem={selectedItem}
        hasExpand
        title="Startup"
        icon={logos.menuPrograms}
        itemHovered={itemHovered}
      >
        <ExpandMenu></ExpandMenu>
      </ExpandMenuItem>
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Internet Explorer"
        icon={logos.internetExplorer}
        tooltipText={tooltipTexts.intenetExplorer}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Outlook Express"
        icon={logos.email}
        tooltipText={tooltipTexts.email}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="MSN"
        icon={logos.windowsMessenger}
        tooltipText={tooltipTexts.msn}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Remote Assistance"
        icon={logos.remoteAssistance}
        tooltipText={tooltipTexts.remoteAssistance}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Windows Messenger"
        icon={logos.windowsMessenger}
        tooltipText={tooltipTexts.messenger}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Windows Media Player"
        icon={logos.windowsMediaPlayer}
        tooltipText={tooltipTexts.mediaPlayer}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Windows Movie Maker"
        icon={logos.windowsMovieMaker}
        tooltipText={tooltipTexts.movieMaker}
      />
    </ExpandMenu>
  );
};
export default AllProgramsMenu;
