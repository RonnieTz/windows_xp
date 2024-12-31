import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  menu: {
    minWidth: 180,
    minHeight: 27,
    position: 'absolute',
    bottom: 0,
    left: '100%',
    boxShadow:
      'rgb(114, 173, 233) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.5) 2px 3px 3px, rgb(64, 129, 255) 4px 0px inset',
    backgroundColor: 'white',
    zIndex: 100000,
    color: 'black',
    padding: '1px 0 1px 4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  empty: {
    fontSize: 12,
    alignSelf: 'center',
  },
  root: {
    left: '88%',
  },
  top: {
    bottom: 'auto',
    top: 0,
  },
});

type Props = { children?: React.ReactNode; root?: boolean; top?: boolean };

const ExpandMenu = ({ children, root, top }: Props) => {
  return (
    <div
      style={{
        minWidth: !children ? 90 : undefined,
      }}
      {...stylex.props(styles.menu, top && styles.top, root && styles.root)}
    >
      {children || <div {...stylex.props(styles.empty)}>(Empty)</div>}
    </div>
  );
};

export default ExpandMenu;
