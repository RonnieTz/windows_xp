import * as stylex from '@stylexjs/stylex';

const fadeIn = stylex.keyframes({
  '0%': {
    opacity: 0,
  },
  '70%': { opacity: 0 },
  '100%': {
    opacity: 1,
  },
});

const styles = stylex.create({
  tooltip: {
    backgroundColor: 'rgb(255, 255, 225)',
    color: 'black',
    fontSize: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '100%',
    border: '1.5px solid black',
    padding: '0.1rem 0.4rem',
    textWrap: 'nowrap',
    animation: `${fadeIn} 0.5s`,
  },
});

type TooltipProps = {
  children?: React.ReactNode;
  position: { right?: number; left?: number };
};

const Tooltip = ({ children, position }: TooltipProps) => {
  return (
    <div
      style={{ right: position.right, left: position.left }}
      {...stylex.props(styles.tooltip)}
    >
      {children}
    </div>
  );
};
export default Tooltip;
