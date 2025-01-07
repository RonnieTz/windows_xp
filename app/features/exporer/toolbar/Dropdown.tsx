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
  container: {
    border: '1.5px solid #aca899',
    backgroundColor: 'white',
    position: 'absolute',
    top: '100%',
    left: 0,
    boxShadow: '2px 2px 3px 0 rgba(0, 0, 0, 0.5)',
    animation: `${fadeIn} 0.1s ease-in`,
    padding: 2,
  },
});

type Props = {
  children: React.ReactNode;
};

const Dropdown = ({ children }: Props) => {
  return <div {...stylex.props(styles.container)}>{children}</div>;
};
export default Dropdown;
