import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import shortcutArrow from '@/public/desktop/shortcut-arrow.svg';
import { Link } from '@/app/redux/slices/linkSlice';
import { useManageLink } from './hooks/useManageLink';

const styles = stylex.create({
  desktopLink: {
    minHeight: 80,
    height: 83,
    width: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    textAlign: 'center',
    position: 'absolute',
    zIndex: 2,
  },
  top: (top: number) => ({
    top,
  }),
  left: (left: number) => ({
    left,
  }),
  icon: {
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 12,
    color: '#fff',
    textShadow: '1px 1px 4px #000',
    padding: '3px 6px',
    width: '100%',
  },
  selectedText: {
    backgroundColor: '#316ac5',
    color: '#fff',
    border: '1px dotted #ce953a',
  },
  selectedIcon: {
    filter: 'brightness(0.5)',
  },
  arrowContainer: {
    position: 'absolute',
    width: 15,
    height: 15,
    top: 32,
    left: 20,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#808080 #000 #000 #808080',
  },
  arrow: {
    height: 10,
    width: 15,
    rotate: '-40deg',
  },
});

type DesktopLinkProps = {
  link: Link;
};

const DesktopLink = ({ link }: DesktopLinkProps) => {
  const { icon, name, isShortcut, selected } = link;
  const { onClick, open, ref } = useManageLink(link.id);
  return (
    <div
      ref={ref}
      draggable
      onDragStart={(e) => {
        const data = JSON.stringify(link);
        e.dataTransfer.setData('text/plain', data);
      }}
      onClick={onClick}
      {...stylex.props(
        styles.desktopLink,
        styles.top(link.position.top),
        styles.left(link.position.left)
      )}
      onDoubleClick={() => {
        open();
      }}
    >
      <Image
        {...stylex.props(styles.icon, selected && styles.selectedIcon)}
        src={icon}
        alt="Folder icon"
      />
      <span {...stylex.props(styles.title, selected && styles.selectedText)}>
        {name}
      </span>
      {isShortcut && (
        <span {...stylex.props(styles.arrowContainer)}>
          <Image
            {...stylex.props(styles.arrow)}
            src={shortcutArrow}
            alt="Shortcut arrow"
          />
        </span>
      )}
    </div>
  );
};
export default DesktopLink;
