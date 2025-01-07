import * as stylex from '@stylexjs/stylex';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';

const styles = stylex.create({
  main: {
    display: 'flex',
    height: '100%',
    position: 'relative',
  },
});

const Main = () => {
  return (
    <div {...stylex.props(styles.main)}>
      <Sidebar />
      <Content />
    </div>
  );
};
export default Main;
