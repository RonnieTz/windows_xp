import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  content: {
    width: '100% - 5px',
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    borderWidth: '0 2px 2px 2px',
    borderColor: '#1b48ff',
    borderStyle: 'solid',
  },
  faded: {
    borderColor: 'rgb(122, 147, 223)',
  },
  fullscreen: {
    border: 0,
    width: '100%',
  },
});

type ContentProps = {
  focus?: boolean;
  fullscreen: boolean;
};

const Content = ({ focus = false, fullscreen }: ContentProps) => {
  return (
    <div
      {...stylex.props(
        styles.content,
        !focus && styles.faded,
        fullscreen && styles.fullscreen
      )}
    ></div>
  );
};
export default Content;
