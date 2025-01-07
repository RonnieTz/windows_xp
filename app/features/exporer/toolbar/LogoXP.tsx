import * as stylex from '@stylexjs/stylex';
import logo from '@/public/folder/XP_logo.webp';
import Image from 'next/image';

const styles = stylex.create({
  container: {
    height: 'calc(100% + 1px)',
    width: 50,
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    top: 0,
    borderWidth: ' 0 0 1.5px 1.5px',
    borderStyle: 'solid',
    borderColor: '#d8d2bd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '80%',
    width: 'auto',
  },
});

const LogoXP = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <Image {...stylex.props(styles.logo)} src={logo} alt="XP Logo" />
    </div>
  );
};
export default LogoXP;
