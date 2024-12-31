import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import { useManageWindow } from '@/app/hooks/useManageWindow';

const styles = stylex.create({
  container: {
    height: 30,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 7,
    position: 'absolute',
    justifyContent: 'flex-start',
    top: 5,
    gap: 2,
  },
  icon: {
    height: 22,
    width: 22,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '2px 1px 2px rgba(0, 0, 0, 0.7)',
    letterSpacing: 0.8,
  },
});

type TitleProps = { id: string };

const Title = ({ id }: TitleProps) => {
  const { window } = useManageWindow(id);
  return (
    <div {...stylex.props(styles.container)}>
      <Image
        {...stylex.props(styles.icon)}
        src={window.icon}
        alt="My Documents"
      />
      <div {...stylex.props(styles.title)}>{window.title}</div>
    </div>
  );
};
export default Title;
