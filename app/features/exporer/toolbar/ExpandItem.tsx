import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: { height: 20, position: 'relative' },
});

type Props = { title: string };

const ExpandItem = ({ title }: Props) => {
  return <div {...stylex.props(styles.container)}>{title}</div>;
};

export default ExpandItem;
