import { useManageViews } from '../hooks/useManageViews';
import Details from './Details';
import Icons from './Icons';
import Tiles from './Tiles';
import Thumbnails from './Thumbnails';
import List from './List';
import ReactPlayer from 'react-player';

type Props = {
  manageLocation: {
    changeFolderLocation: (newLocation: string) => void;
    folderLocation: string;
    windowID: string;
  };
};

const Content = ({ manageLocation }: Props) => {
  const { view } = useManageViews();

  return (
    <>
      {view === 'Details' && <Details />}
      {view === 'Icons' && <Icons />}
      {view === 'Tiles' && <Tiles />}
      {view === 'Thumbnails' && <Thumbnails manageLocation={manageLocation} />}
      {view === 'List' && <List />}
    </>
  );
};
export default Content;
