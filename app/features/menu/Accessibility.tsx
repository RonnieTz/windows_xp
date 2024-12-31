import ExpandMenu from './ExpandMenu';
import ExpandMenuItem from './ExpandMenuItem';
import { logos } from '@/public/logos';
import { tooltipTexts } from '../desktop/tooltips';

const Accessibility = () => {
  return (
    <ExpandMenu top>
      <ExpandMenuItem
        title="Accessibility Wizard"
        icon={logos.accessibilityWizard}
        tooltipText={tooltipTexts.accessibilityWizard}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.magnifier}
        title="Magnifier"
        icon={logos.magnifier}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.narrator}
        title="Narrator"
        icon={logos.narrator}
      />
      <ExpandMenuItem
        title="On-Screen Keyboard"
        icon={logos.onScreenKeyboard}
        tooltipText={tooltipTexts.onScreenKeyboard}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.utilityManager}
        title="Utility Manager"
        icon={logos.utilityManager}
      />
    </ExpandMenu>
  );
};
export default Accessibility;
