import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    flex: '1',
    height: '100%',
    position: 'absolute',
    right: 0,
    width: 'calc(100% - 250px)',
    overflow: 'auto',
  },
});

const List = () => {
  return <div {...stylex.props(styles.container)}>List</div>;
};
export default List;
