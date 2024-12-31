import { logos } from '@/public/logos';
import ExpandMenu from './ExpandMenu';
import ExpandMenuItem from './ExpandMenuItem';
import { tooltipTexts } from '../desktop/tooltips';

const SystemTools = () => {
  return (
    <ExpandMenu top>
      <ExpandMenuItem
        tooltipText={tooltipTexts.backup}
        title="Backup"
        icon={logos.backup}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.characterMap}
        title="Character Map"
        icon={logos.characterMap}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.diskCleanup}
        title="Disk Cleanup"
        icon={logos.diskCleanup}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.diskDefragmenter}
        title="Disk Defragmenter"
        icon={logos.diskDefragmenter}
      />
      <ExpandMenuItem
        title="Files and Settings Transfer Wizard"
        icon={logos.filesAndSettingsTransferWizard}
        tooltipText={tooltipTexts.filesAndSettingsTransferWizard}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.scheduledTasks}
        title="Scheduled Tasks"
        icon={logos.scheduledTasks}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.securityCenter}
        title="Security Center"
        icon={logos.securityCenter}
      />
      <ExpandMenuItem
        title="System Information"
        icon={logos.systemInformation}
        tooltipText={tooltipTexts.systemInformation}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.systemRestore}
        title="System Restore"
        icon={logos.systemRestore}
      />
    </ExpandMenu>
  );
};
export default SystemTools;
