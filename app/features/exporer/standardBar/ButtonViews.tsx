import * as stylex from '@stylexjs/stylex';
import icon from '@/public/folder/views.png';
import arrowDown from '@/public/folder/ArrowDown.svg';
import Image from 'next/image';

const styles = stylex.create({
  button: {
    height: '100%',
    position: 'relative',
    width: 64,
    border: {
      default: '1px solid transparent',
      ':hover': '1px solid #cecec3',
      ':active': '1px solid #9d9d92',
    },
    backgroundColor: {
      default: 'transparent',
      ':active': '#e5e5dd',
    },
    color: {
      default: '#000',
      ':active': 'white',
    },
    borderRadius: 2,
    boxShadow: { default: null, ':hover': '-0.5px -1px 2px 0 #cecec3 inset' },
    display: 'flex',
    gap: 5,
    fontSize: 12,
    alignItems: 'center',
    padding: '0 7px',
  },

  arrowDown: {
    height: 12,
    width: 12,
    position: 'absolute',
    right: 7,
  },
});

const ButtonViews = () => {
  return (
    <div {...stylex.props(styles.button)}>
      <Image src={icon} alt="Back" width={30} height={30} />
      <Image
        {...stylex.props(styles.arrowDown)}
        src={arrowDown}
        alt="arrow down"
      />
    </div>
  );
};
export default ButtonViews;
