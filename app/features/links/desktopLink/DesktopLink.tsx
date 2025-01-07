import * as stylex from '@stylexjs/stylex';
import Image, { StaticImageData } from 'next/image';
import shortcutArrow from '@/public/desktop/shortcut-arrow.svg';

const styles = stylex.create({
  desktopLink: {
    minHeight: 80,
    height: 80,
    width: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    textAlign: 'center',
    position: 'relative',
  },
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
  title: string;
  icon: StaticImageData;
  selected: boolean;
  isShortcut?: boolean;
};

const DesktopLink = ({
  title,
  icon,
  selected,
  isShortcut = false,
}: DesktopLinkProps) => {
  return (
    <div {...stylex.props(styles.desktopLink)}>
      <Image
        {...stylex.props(styles.icon, selected && styles.selectedIcon)}
        src={icon}
        alt="Folder icon"
      />
      <span {...stylex.props(styles.title, selected && styles.selectedText)}>
        {title}
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
