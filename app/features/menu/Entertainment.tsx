import { logos } from '@/public/logos';
import ExpandMenu from './ExpandMenu';
import ExpandMenuItem from './ExpandMenuItem';
import { tooltipTexts } from '../desktop/tooltips';

const Entertainment = () => {
  return (
    <ExpandMenu top>
      <ExpandMenuItem
        title="Windows Media Player"
        icon={logos.windowsMediaPlayer}
        tooltipText={tooltipTexts.windowsMediaPlayer}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.soundRecorder}
        title="Sound Recorder"
        icon={logos.soundRecorder}
      />
      <ExpandMenuItem
        tooltipText={tooltipTexts.volumeControl}
        title="Volume Control"
        icon={logos.volumeControl}
      />
    </ExpandMenu>
  );
};
export default Entertainment;
