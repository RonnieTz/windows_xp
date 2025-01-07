import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  divider: {
    width: 1.2,
    height: '90%',
    backgroundColor: '#cac6af',
    margin: '0 3px',
  },
});

const Divider = () => {
  return <div {...stylex.props(styles.divider)}></div>;
};
export default Divider;
