import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  divider: {
    height: 1.5,
    width: '100%',
    backgroundColor: '#aca899',
    margin: '2px 0',
  },
});

const Divider = () => {
  return <div {...stylex.props(styles.divider)} />;
};

export default Divider;
