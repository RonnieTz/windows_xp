import ExpandMenu from './ExpandMenu';
import ExpandMenuItem from './ExpandMenuItem';
import { logos } from '@/public/logos';
import { tooltipTexts } from '../desktop/tooltips';

const Communications = () => {
  return (
    <ExpandMenu top>
      <ExpandMenuItem
        tooltipText={tooltipTexts.hyperTerminal}
        title="Hyper Terminal"
        icon={logos.hyperTerminal}
      />
      <ExpandMenuItem
        title="Network Connections"
        icon={logos.networkConnections}
        tooltipText={tooltipTexts.nerworkConnections}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.networkSetupWizard}
        title="Network Setup Wizard"
        icon={logos.networkSetupWizard}
      />
      <ExpandMenuItem
        title="New Connection Wizard"
        icon={logos.newConnectionWizard}
        tooltipText={tooltipTexts.newConnectionWizard}
      />
      <ExpandMenuItem
        title="Remote Desktop Connection"
        icon={logos.remoteDesktopConnection}
        tooltipText={tooltipTexts.remoteDesktopConnection}
      />
      <ExpandMenuItem
        title="Wireless Network Setup Wizard"
        icon={logos.wirelessNetworkSetupWizard}
        tooltipText={tooltipTexts.wirelessNetworkSetupWizard}
      />
    </ExpandMenu>
  );
};
export default Communications;
