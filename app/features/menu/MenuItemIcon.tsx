import * as stylex from '@stylexjs/stylex';
import Image, { StaticImageData } from 'next/image';

const styles = stylex.create({
  menuItemIcon: {
    height: '100%',
    width: 'auto',
    position: 'relative',
    filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.8))',
  },
});

type MenuItemIconProps = { icon: StaticImageData };

const MenuItemIcon = ({ icon }: MenuItemIconProps) => {
  return (
    <Image
      priority
      {...stylex.props(styles.menuItemIcon)}
      src={icon}
      alt="Menu item icon"
    />
  );
};
export default MenuItemIcon;
