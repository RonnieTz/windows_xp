import { logos } from '@/public/logos';
import ExpandMenu from './ExpandMenu';
import ExpandMenuItem from './ExpandMenuItem';
import { tooltipTexts } from '../desktop/tooltips';

const Games = () => {
  return (
    <ExpandMenu>
      <ExpandMenuItem
        tooltipText={tooltipTexts.freeCell}
        title="Freecell"
        icon={logos.freeCell}
      ></ExpandMenuItem>
      <ExpandMenuItem
        tooltipText={tooltipTexts.hearts}
        title="Hearts"
        icon={logos.hearts}
      ></ExpandMenuItem>
      <ExpandMenuItem
        title="Minesweeper"
        icon={logos.minesweeper}
        tooltipText={tooltipTexts.minesweeper}
      ></ExpandMenuItem>
      <ExpandMenuItem
        tooltipText={tooltipTexts.pinball}
        title="Pinball"
        icon={logos.pinball}
      ></ExpandMenuItem>
      <ExpandMenuItem
        tooltipText={tooltipTexts.solitaire}
        title="Solitaire"
        icon={logos.solitaire}
      ></ExpandMenuItem>
      <ExpandMenuItem
        tooltipText={tooltipTexts.spiderSolitaire}
        title="Spider Solitaire"
        icon={logos.spiderSolitaire}
      />
    </ExpandMenu>
  );
};
export default Games;
