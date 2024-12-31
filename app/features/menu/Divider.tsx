import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  divider: {
    height: 1,
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
    background:
      'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%) content-box',
  },
  fixed: {
    position: 'absolute',
  },
});

type DividerProps = { position?: string; fixed?: boolean };
const Divider = ({ position, fixed }: DividerProps) => {
  return (
    <div
      style={{ bottom: position }}
      {...stylex.props(styles.divider, fixed && styles.fixed)}
    ></div>
  );
};
export default Divider;
