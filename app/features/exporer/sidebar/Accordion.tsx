import * as stylex from '@stylexjs/stylex';
import arrowDown from '@/public/folder/arrow-double.svg';
import arrowDownHighlighted from '@/public/folder/arrow-double-highlighted.svg';
import { useManageAccordion } from '../hooks/useManageAccordion';
import Tooltip from '../../desktop/Tooltip';

import Image from 'next/image';

const styles = stylex.create({
  accordion: {
    width: '100%',
    transition: 'all 0.3s',
  },
  header: {
    borderRadius: '3px 3px 0 0',
    background: 'linear-gradient(90deg, #fff 50%, #c7d3f7 100%)',
    overflow: 'hidden',
    height: 30,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 10,
    fontSize: 12,
    fontWeight: 600,
    color: { default: '#215dc6', ':hover': '#428eef' },
    transition: 'color 0.2s',
    cursor: 'pointer',
    position: 'relative',
  },
  arrow: {
    cursor: 'pointer',
    marginLeft: 'auto',
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    boxShadow:
      '0 0 2px rgba(0, 0, 200, 0.3), 0 0 2px rgba(0, 0, 200, 0.3) inset, 1px 1px 2px rgba(0, 0, 200, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    transition: 'all 0.3s',
  },
  arrowDown: {
    rotate: '90deg',
  },
  arrowUp: {
    rotate: '-90deg',
  },
  body: {
    backgroundColor: '#d6dff7',
    borderWidth: '0 1.5px 1.5px 1.5px',
    borderStyle: 'solid',
    borderColor: 'white',
    maxHeight: 120,
    overflow: 'hidden',
    transition: 'all 0.3s',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  close: {
    maxHeight: 0,
    padding: 0,
    paddingLeft: 10,
  },
});

type Props = { title: string; children?: React.ReactNode };

const Accordion = ({ title, children }: Props) => {
  const {
    bind,
    isHovered,
    isOpen,
    toggle,
    hideTooltip,
    showTooltip,
    toolipPosition,
  } = useManageAccordion();
  return (
    <div {...bind} {...stylex.props(styles.accordion, isOpen)}>
      <div onClick={toggle} {...stylex.props(styles.header)}>
        <span>{title}</span>
        <span
          {...stylex.props(
            styles.arrow,
            styles.arrowDown,
            isOpen && styles.arrowUp
          )}
        >
          <Image
            style={{ cursor: 'pointer' }}
            width={8}
            height={8}
            src={!isHovered ? arrowDown : arrowDownHighlighted}
            alt="arrow down"
          />
        </span>
        {showTooltip && !isOpen && (
          <Tooltip
            hide={hideTooltip}
            left={toolipPosition.left}
            top={toolipPosition.top}
            text="Tooltip"
          />
        )}
      </div>
      <div
        onMouseEnter={(e) => {
          e.stopPropagation();
        }}
        onMouseMove={(e) => {
          e.stopPropagation();
        }}
        {...stylex.props(styles.body, !isOpen && styles.close)}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
