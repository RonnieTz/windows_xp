import * as stylex from '@stylexjs/stylex';
import icon from '@/public/folder/Up.png';
import Image from 'next/image';

const styles = stylex.create({
  button: {
    height: '100%',
    position: 'relative',
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

const ButtonUp = ({ disabled = false }: ButtonBackProps) => {
  return (
    <div {...stylex.props(styles.button, disabled && styles.disabled)}>
      <Image src={icon} alt="Back" width={30} height={30} />
    </div>
  );
};
export default ButtonUp;
