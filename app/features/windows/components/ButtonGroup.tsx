import * as stylex from '@stylexjs/stylex';
import Button from './Button';

const styles = stylex.create({
  buttonGroup: {
    height: '70%',
    right: 3,
    bottom: 5,
    position: 'absolute',
    display: 'flex',
    gap: 3,
  },
});

type ButtonGroupProps = { id: string };

const ButtonGroup = ({ id }: ButtonGroupProps) => {
  return (
    <div {...stylex.props(styles.buttonGroup)}>
      <Button id={id} type="minimize" />
      <Button id={id} type="maximize" />
      <Button id={id} type="exit" />
    </div>
  );
};
export default ButtonGroup;
