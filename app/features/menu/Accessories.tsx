import { logos } from '@/public/logos';
import ExpandMenu from './ExpandMenu';
import ExpandMenuItem from './ExpandMenuItem';
import Accessibility from './Accessibility';
import { useSelectExpandMenuItem } from '@/app/hooks/useSelectExpandMenuItem';
import Communications from './Communications';
import Entertainment from './Entertainment';
import SystemTools from './SystemTools';
import { tooltipTexts } from '../desktop/tooltips';

const Accessories = () => {
  const { selectedItem, onMouseEnter, onMouseLeave, itemHovered } =
    useSelectExpandMenuItem(500);
  return (
    <ExpandMenu>
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        hasExpand
        title="Accessibility"
        icon={logos.menuPrograms}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
      >
        <Accessibility />
      </ExpandMenuItem>
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        hasExpand
        title="Communications"
        icon={logos.menuPrograms}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
      >
        <Communications />
      </ExpandMenuItem>
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        hasExpand
        title="Entertainment"
        icon={logos.menuPrograms}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
      >
        <Entertainment />
      </ExpandMenuItem>
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        hasExpand
        title="System tools"
        icon={logos.menuPrograms}
        selectedItem={selectedItem}
        itemHovered={itemHovered}
      >
        <SystemTools />
      </ExpandMenuItem>
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Address Book"
        icon={logos.addressBook}
        tooltipText={tooltipTexts.addressBook}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Calculator"
        icon={logos.calculator}
        tooltipText={tooltipTexts.calculator}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Command Prompt"
        icon={logos.commandPrompt}
        tooltipText={tooltipTexts.commandPromt}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Notepad"
        icon={logos.notepad}
        tooltipText={tooltipTexts.notepad}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Paint"
        icon={logos.paint}
        tooltipText={tooltipTexts.paint}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Program Compatibility Wizard"
        icon={logos.programCompatibilityWizard}
        tooltipText={tooltipTexts.programCompatibilityWizard}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Synchronize"
        icon={logos.synchronize}
        tooltipText={tooltipTexts.synchronize}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Tour Windows XP"
        icon={logos.tourWindowsXP}
        tooltipText={tooltipTexts.tourXP}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Windows Explorer"
        icon={logos.windowsExplorer}
        tooltipText={tooltipTexts.windowsExplorer}
      />
      <ExpandMenuItem
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="WordPad"
        icon={logos.wordpad}
        tooltipText={tooltipTexts.wordpad}
      />
    </ExpandMenu>
  );
};
export default Accessories;
