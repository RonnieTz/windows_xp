import * as stylex from '@stylexjs/stylex';
import icon from '@/public/folder/views.png';
import arrowDown from '@/public/folder/ArrowDown.svg';
import Image from 'next/image';
import Dropdown from '../toolbar/Dropdown';
import DropdownItem from '../toolbar/DropdownItem';
import { useEffect, useState } from 'react';
import { useTooltip } from '@/app/hooks/useTooltip';
import Tooltip from '../../desktop/Tooltip';
import { useManageViews } from '../hooks/useManageViews';

const styles = stylex.create({
  button: {
    height: '100%',
    position: 'relative',
    width: 64,
    border: {
      default: '1px solid transparent',
      ':hover': '1px solid #cecec3',
      ':active': '1px solid #9d9d92',
    },
    backgroundColor: {
      default: 'transparent',
      ':active': '#e5e5dd',
    },
    color: {
      default: '#000',
      ':active': 'white',
    },
    borderRadius: 2,
    boxShadow: { default: null, ':hover': '-0.5px -1px 2px 0 #cecec3 inset' },
    display: 'flex',
    gap: 5,
    fontSize: 12,
    alignItems: 'center',
    padding: '0 7px',
    zIndex: 1,
  },

  arrowDown: {
    height: 12,
    width: 12,
    position: 'absolute',
    right: 7,
  },
  active: {
    backgroundColor: '#e5e5dd',
    color: 'white',
    border: '1px solid #9d9d92',
  },
});

const ButtonViews = () => {
  const {
    hideTooltip,
    onMouseLeave,
    onMouseMove,
    showTooltip,
    toolipPosition,
  } = useTooltip(false);
  const { setView, view } = useManageViews();
  const [show, setShow] = useState(false);
  const changeView = (view: string) => {
    setView(view);
    setTimeout(() => {
      setShow(false);
      hideTooltip();
    }, 500);
  };

  useEffect(() => {
    const close = () => {
      setShow(false);
      hideTooltip();
    };
    addEventListener('click', close);
    return () => {
      removeEventListener('click', close);
    };
  }, [show]);

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        e.stopPropagation();
        setShow(!show);
        hideTooltip();
      }}
      {...stylex.props(styles.button, show && styles.active)}
    >
      <Image src={icon} alt="Back" width={30} height={30} />
      <Image
        {...stylex.props(styles.arrowDown)}
        src={arrowDown}
        alt="arrow down"
      />
      {show && (
        <Dropdown>
          <DropdownItem
            callback={changeView}
            selected={view === 'Thumbnails'}
            title="Thumbnails"
          />
          <DropdownItem
            callback={changeView}
            selected={view === 'Tiles'}
            title="Tiles"
          />
          <DropdownItem
            callback={changeView}
            selected={view === 'Icons'}
            title="Icons"
          />
          <DropdownItem
            callback={changeView}
            selected={view === 'List'}
            title="List"
          />
          <DropdownItem
            callback={changeView}
            selected={view === 'Details'}
            title="Details"
          />
        </Dropdown>
      )}
      {showTooltip && !show && (
        <Tooltip
          hide={hideTooltip}
          left={toolipPosition.left}
          top={toolipPosition.top}
          text="Views"
        />
      )}
    </div>
  );
};
export default ButtonViews;
