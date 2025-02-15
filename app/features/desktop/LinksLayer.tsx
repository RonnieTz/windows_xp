'use client';

import * as stylex from '@stylexjs/stylex';
import { useOnResize } from '@/app/hooks/useOnResize';
import { useManageLink } from '../links/hooks/useManageLink';
import { Link } from '@/app/redux/slices/linkSlice';

const { desktop } = stylex.create({
  desktop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'column',
  },
});

type Props = {
  location: string;
};

const LinksLayer = ({ location }: Props) => {
  const { ref, grid } = useOnResize();
  const { setPosition, moveLocation } = useManageLink();

  return (
    <div ref={ref} {...stylex.props(desktop)}>
      {Array.from({ length: grid.hor }).map((_, i) => {
        return Array.from({ length: grid.ver }).map((_, j) => {
          return (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                e.dataTransfer.effectAllowed = 'all';
                e.dataTransfer.dropEffect = 'move';
              }}
              onDrop={(e) => {
                e.preventDefault();
                const { id, location: linkLocation }: Link = JSON.parse(
                  e.dataTransfer.getData('text')
                );
                setPosition({ top: j * 83, left: i * 80 }, id);

                if (location !== linkLocation) {
                  moveLocation(location, id);
                }
              }}
              key={i + '' + j}
              style={{
                width: '80px',
                height: '83px',
              }}
            ></div>
          );
        });
      })}
    </div>
  );
};
export default LinksLayer;
