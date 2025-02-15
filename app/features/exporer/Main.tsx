import * as stylex from '@stylexjs/stylex';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';

const styles = stylex.create({
  main: {
    display: 'flex',
    height: '100%',
    position: 'relative',
  },
});

type Props = {
  manageLocation: {
    changeFolderLocation: (newLocation: string) => void;
    folderLocation: string;
    windowID: string;
  };
};

const Main = ({ manageLocation }: Props) => {
  return (
    <div {...stylex.props(styles.main)}>
      <Sidebar />
      <Content manageLocation={manageLocation} />
    </div>
  );
};
export default Main;
