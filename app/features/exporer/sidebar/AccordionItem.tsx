import * as stylex from '@stylexjs/stylex';
import Image, { StaticImageData } from 'next/image';
import { useTooltip } from '@/app/hooks/useTooltip';
import Tooltip from '../../desktop/Tooltip';

const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    fontSize: 12,
    color: {
      default: '#215dc6',
      ':hover': '#428eef',
    },
    cursor: 'pointer',
    textDecoration: { default: 'none', ':hover': 'underline' },
  },
  icon: {
    height: 22,
    width: 'auto',
  },
});

type AccordionItemProps = {
  title: string;
  icon: StaticImageData;
};

const AccordionItem = ({ title, icon }: AccordionItemProps) => {
  const {
    hideTooltip,
    onMouseLeave,
    onMouseMove,
    showTooltip,
    toolipPosition,
  } = useTooltip(false);
  return (
    <div {...stylex.props(styles.container)}>
      <Image src={icon} alt="arrow" {...stylex.props(styles.icon)} />
      <div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        {...stylex.props(styles.title)}
      >
        {title}
      </div>
      {showTooltip && (
        <Tooltip
          hide={hideTooltip}
          left={toolipPosition.left}
          top={toolipPosition.top}
          text="Tooltip"
        />
      )}
    </div>
  );
};
export default AccordionItem;
