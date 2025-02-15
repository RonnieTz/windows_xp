import * as stylex from '@stylexjs/stylex';
import Thumbnail from './Thumbnail';
import { useRedux } from '@/app/hooks/useRedux';
import { useManageWindow } from '../../windows/hooks/useManageWindow';

const styles = stylex.create({
  container: {
    flex: '1',
    height: '100%',
    position: 'absolute',
    right: 0,
    width: 'calc(100% - 250px)',
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 15,
    alignContent: 'flex-start',
    padding: 10,
  },
});

type Props = {
  manageLocation: {
    changeFolderLocation: (newLocation: string) => void;
    folderLocation: string;
    windowID: string;
  };
};

const Thumbnails = ({ manageLocation }: Props) => {
  const { folderLocation, changeFolderLocation } = manageLocation;
  const { useReduxSelector } = useRedux();
  const { links } = useReduxSelector((state) => state.link);

  return (
    <div {...stylex.props(styles.container)}>
      {links
        .filter((link) => link.location === folderLocation)
        .map((link) => (
          <Thumbnail
            manageLocation={manageLocation}
            key={link.id}
            link={link}
          />
        ))}
    </div>
  );
};
export default Thumbnails;
