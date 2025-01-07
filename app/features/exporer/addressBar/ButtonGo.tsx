import * as stylex from '@stylexjs/stylex';
import arrow from '@/public/folder/arrow-forward.svg';
import Image from 'next/image';

const styles = stylex.create({
  button: {
    height: '100%',
    position: 'relative',
    border: {
      default: '1px solid transparent',
    },
    background: {
      default: 'linear-gradient(180deg, #efeee8 0%, #ecebe2 92%, #cdcabb 100%)',
      ':hover': '#f4f4ee',
      ':active': '#e2e1da',
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
    paddingRight: 12,
  },

  arrowContainer: {
    height: '75%',
    aspectRatio: '1/1',
    backgroundColor: '#18a106',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1.2px solid #076702',
    borderRadius: 2,
  },
});

const ButtonGo = () => {
  return (
    <div {...stylex.props(styles.button)}>
      <div {...stylex.props(styles.arrowContainer)}>
        <Image src={arrow} alt="Back" width={18} height={18} />
      </div>
      <div>Go</div>
    </div>
  );
};
export default ButtonGo;
