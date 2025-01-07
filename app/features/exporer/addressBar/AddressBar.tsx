import * as stylex from '@stylexjs/stylex';
import Address from './Address';
import AddressDisplay from './AddressDisplay';
import ButtonGo from './ButtonGo';

const styles = stylex.create({
  bar: {
    height: 30,
    width: '100%',
    backgroundColor: 'rgb(239, 236, 223)',
    borderWidth: '1.5px 0 0 1.5px',
    borderStyle: 'solid',
    borderColor: '#fff',
    display: 'flex',
  },
});

const AddressBar = () => {
  return (
    <div {...stylex.props(styles.bar)}>
      <Address />
      <AddressDisplay />
      <ButtonGo />
    </div>
  );
};
export default AddressBar;
