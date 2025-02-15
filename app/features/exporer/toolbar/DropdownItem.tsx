import * as stylex from '@stylexjs/stylex';
import Arrow from '../../menu/Arrow';
import dotIcon from '@/public/folder/dot.png';
import checkIcon from '@/public/folder/check-mark.png';
import Image, { StaticImageData } from 'next/image';
import { useHover } from '@/app/hooks/useHover';

const styles = stylex.create({
  container: {
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'flex-start',
    gap: 70,
    backgroundColor: {
      default: 'transparent',
      ':hover': 'rgb(47,106,197)',
    },
    color: {
      default: 'black',
      ':hover': 'white',
    },
    paddingLeft: 20,
    paddingRight: 20,
    textWrap: 'nowrap',
    position: 'relative',
  },
  selected: {
    backgroundColor: 'rgb(47,106,197)',
    color: 'white',
  },
  disabled: {
    color: '#aca899',
  },
  secondary: {
    marginLeft: 'auto',
  },
  arrow: {
    paddingRight: 5,
    gap: 20,
  },
  icon: {
    width: 10,
    height: 10,
    position: 'absolute',
    left: 5,
  },
  folderIcon: { width: 'auto', height: '80%', position: 'absolute', left: 1 },
  hoverIcon: {
    filter: 'invert(1)',
  },
});
type Props = {
  title: string;
  secondaryTitle?: string;
  disabled?: boolean;
  hasExpand?: boolean;
  checked?: boolean;
  selected?: boolean;
  icon?: StaticImageData;
  children?: React.ReactNode;
  selectedItem?: string;
  onMouseEnter?: (title: string) => void;
  onMouseLeave?: () => void;
  itemHovered?: string;
  callback?: (str: string) => void;
};
const DropdownItem = ({
  title,
  disabled = false,
  secondaryTitle,
  hasExpand,
  checked,
  selected,
  icon,
  children,
  selectedItem,
  onMouseEnter,
  onMouseLeave,
  itemHovered,
  callback,
}: Props) => {
  const { bind, isHovered } = useHover();

  return (
    <div
      onMouseEnter={(e) => {
        e.stopPropagation();
        onMouseEnter?.(title);
        bind.onMouseEnter();
      }}
      onMouseLeave={() => {
        onMouseLeave?.();
        bind.onMouseLeave();
      }}
      {...stylex.props(
        styles.container,
        disabled && styles.disabled,
        hasExpand && styles.arrow,
        selectedItem === title && !itemHovered && styles.selected
      )}
      onClick={(e) => {
        e.stopPropagation();
        callback?.(title);
      }}
    >
      {selected && (
        <Image
          {...stylex.props(
            styles.icon,
            (isHovered || (selectedItem === title && !itemHovered)) &&
              styles.hoverIcon
          )}
          src={dotIcon}
          alt="dot"
        />
      )}
      {checked && (
        <Image
          {...stylex.props(
            styles.icon,
            (isHovered || (selectedItem === title && !itemHovered)) &&
              styles.hoverIcon
          )}
          src={checkIcon}
          alt="check"
        />
      )}
      {icon && (
        <Image {...stylex.props(styles.folderIcon)} src={icon} alt="check" />
      )}
      <div>{title}</div>
      {secondaryTitle && (
        <div {...stylex.props(styles.secondary)}>{secondaryTitle}</div>
      )}
      {selectedItem === title && children}
      {hasExpand && (
        <Arrow
          isHovered={isHovered || (selectedItem === title && !itemHovered)}
        />
      )}
    </div>
  );
};
export default DropdownItem;
