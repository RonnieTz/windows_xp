import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import { Link } from '@/app/redux/slices/linkSlice';
import { useManageWindow } from '../../windows/hooks/useManageWindow';

const styles = stylex.create({
  container: {
    height: 120,
    width: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconContainer: {
    width: 100,
    aspectRatio: '1/1',
    border: '1.5px solid #ece9d8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    filter: 'drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.5))',
  },
  title: {
    fontSize: 12,
    marginTop: 5,
    display: 'flex',
    padding: '1px 4px',
    width: 'fit-content',
  },
  containerSelected: {
    border: '3px solid #316ac5',
  },
  titleSelected: {
    backgroundColor: '#316ac5',
    color: '#fff',
    border: '1.5px dotted #ce953a',
  },
});

type Props = {
  link: Link;
  manageLocation: {
    changeFolderLocation: (newLocation: string) => void;
    folderLocation: string;
    windowID: string;
  };
};

const Thumbnail = ({ link, manageLocation }: Props) => {
  const { name, icon, selected } = link;
  const { renameWindow } = useManageWindow(manageLocation.windowID);
  return (
    <div
      onDoubleClick={() => {
        manageLocation.changeFolderLocation(link.id);
        renameWindow(link.name);
      }}
      {...stylex.props(styles.container)}
    >
      <div
        {...stylex.props(
          styles.iconContainer,
          selected && styles.containerSelected
        )}
      >
        <Image src={icon} {...stylex.props(styles.icon)} alt="icon" />
      </div>
      <span {...stylex.props(styles.title, selected && styles.titleSelected)}>
        {name}
      </span>
    </div>
  );
};
export default Thumbnail;
