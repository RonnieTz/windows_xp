import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  content: {
    width: '100% - 5px',
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    borderWidth: '0 3.5px 3.5px 3.5px',
    borderColor: '#0f3ffd',
    borderStyle: 'solid',
  },
  faded: {
    borderColor: 'rgb(87, 119, 217)',
  },
  fullscreen: {
    border: 0,
    width: '100%',
  },
});

type ContentProps = {
  focus?: boolean;
  fullscreen: boolean;
  children: React.ReactNode;
};

const Content = ({ focus = false, fullscreen, children }: ContentProps) => {
  return (
    <div
      {...stylex.props(
        styles.content,
        !focus && styles.faded,
        fullscreen && styles.fullscreen
      )}
    >
      {children}
    </div>
  );
};
export default Content;
