import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  content: {
    flex: '1',
    height: '100%',
  },
});

const Content = () => {
  return <div {...stylex.props(styles.content)}></div>;
};
export default Content;
