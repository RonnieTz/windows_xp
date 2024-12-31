import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import arrow from '@/public/folder/ArrowDown.svg';

const styles = stylex.create({
  arrow: {
    width: 12,
    height: 12,
    marginLeft: 'auto',
    rotate: '-90deg',
  },
  hover: {
    filter: 'invert(1)',
  },
});
type ArrowProps = {
  isHovered: boolean;
};
const Arrow = ({ isHovered }: ArrowProps) => {
  return (
    <Image
      {...stylex.props(styles.arrow, isHovered && styles.hover)}
      src={arrow}
      alt="Arrow"
    />
  );
};
export default Arrow;
