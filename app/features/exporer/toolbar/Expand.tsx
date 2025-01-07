import * as stylex from '@stylexjs/stylex';

const fadeIn = stylex.keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const styles = stylex.create({
  menu: {
    position: 'absolute',
    top: -3,
    boxShadow: 'rgba(0, 0, 0, 0.5) 2px 3px 3px',
    backgroundColor: 'white',
    zIndex: 100000,
    color: 'black',
    border: '1.5px solid #aca899',
    padding: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    left: '96%',
    animation: `${fadeIn} 0.15s ease-in-out`,
  },
});

type Props = { children?: React.ReactNode };

const Expand = ({ children }: Props) => {
  return (
    <div
      style={{
        minWidth: !children ? 90 : undefined,
      }}
      {...stylex.props(styles.menu)}
    >
      {children}
    </div>
  );
};

export default Expand;
