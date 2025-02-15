import * as stylex from '@stylexjs/stylex';
import ButtonBack from './ButtonBack';
import ButtonForward from './ButtonForward';
import ButtonUp from './ButtonUp';
import Divider from './Divider';
import ButtonSearch from './ButtonSearch';
import ButtonFolders from './ButtonFolders';
import ButtonViews from './ButtonViews';

const styles = stylex.create({
  bar: {
    height: 50,
    width: '100%',
    backgroundColor: 'rgb(239, 236, 223)',
    borderTop: '1.5px solid white',
    borderWidth: '1.5px 0 1.5px 1.5px',
    borderStyle: 'solid',
    borderColor: '#fff #fff #d8d2bd #fff',
    display: 'flex',
    paddingLeft: 5,
    alignItems: 'center',
    zIndex: 100,
    position: 'relative',
  },
});

const StandardBar = () => {
  return (
    <div {...stylex.props(styles.bar)}>
      <ButtonBack />
      <ButtonForward />
      <ButtonUp />
      <Divider />
      <ButtonSearch />
      <ButtonFolders />
      <Divider />
      <ButtonViews />
    </div>
  );
};
export default StandardBar;
