import * as stylex from '@stylexjs/stylex';
import arrow from '@/public/folder/arrow-back.svg';
import arrowDown from '@/public/folder/ArrowDown.svg';
import Image from 'next/image';

const styles = stylex.create({
  button: {
    height: '100%',
    position: 'relative',
    width: 100,
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
    padding: '0 5px',
  },
  divider: {
    ':hover': {
      '::after': {
        content: '""',
        display: 'block',
        height: '100%',
        borderWidth: '0 1px 0 1px ',
        borderStyle: 'solid',
        borderColor: '#f5f5f3 #f5f5f3 #d8d2bd #c7c6bd',
      },
    },
  },
  arrowContainer: {
    height: '75%',
    aspectRatio: '1/1',
    backgroundColor: '#18a106',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1.2px solid #076702',
  },
  arrowDown: {
    height: 12,
    width: 12,
    position: 'absolute',
    right: 7,
  },
  disabled: {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    '::after': {
      display: 'none',
    },
    color: 'black',
    filter: 'grayscale(1) opacity(0.3)',
  },
});

type ButtonBackProps = {
  disabled?: boolean;
};

const ButtonBack = ({ disabled = false }: ButtonBackProps) => {
  return (
    <div
      {...stylex.props(
        styles.button,
        !disabled && styles.divider,
        disabled && styles.disabled
      )}
    >
      <div {...stylex.props(styles.arrowContainer)}>
        <Image src={arrow} alt="Back" width={25} height={25} />
      </div>
      <div>Back</div>
      <Image
        {...stylex.props(styles.arrowDown)}
        src={arrowDown}
        alt="arrow down"
      />
    </div>
  );
};
export default ButtonBack;
