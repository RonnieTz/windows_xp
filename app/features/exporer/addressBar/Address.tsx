import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  address: {
    height: '100%',
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    color: '#7f7c73',
    background:
      'linear-gradient(180deg, #efeee8 0%, #ecebe2 92%, #cdcabb 100%)',
  },
});

const Address = () => {
  return <div {...stylex.props(styles.address)}>Address</div>;
};
export default Address;
