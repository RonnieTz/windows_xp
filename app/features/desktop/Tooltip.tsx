import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  tooltip: {
    position: 'fixed',
    maxWidth: 400,
    zIndex: 10000000000,
    backgroundColor: 'rgb(255, 255, 225)',
    border: '1.5px solid black',
    fontSize: 12,
    padding: 3,
    color: 'black',
  },
});

type TooltipProps = {
  text: string;
  top: number;
  left: number;
  hide: () => void;
};

const Tooltip = ({ text, top, left, hide }: TooltipProps) => {
  return (
    <div
      onMouseEnter={hide}
      style={{ top, left }}
      {...stylex.props(styles.tooltip)}
    >
      {text}
    </div>
  );
};
export default Tooltip;
