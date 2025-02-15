import { useRedux } from '@/app/hooks/useRedux';
import { useRef } from 'react';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import {
  selectLink,
  removeSelection,
  setLinkPosition,
  moveLinkLocation,
} from '@/app/redux/slices/linkSlice';
import { openWindow } from '../../windows/windowSlice';

export const useManageLink = (id?: string) => {
  const { useReduxSelector, useReduxDispatch } = useRedux();
  const dispatch = useReduxDispatch();
  const { links } = useReduxSelector((state) => state.link);
  const link = links.find((link) => link.id === id);

  const select = () => {
    if (!id) return;
    dispatch(selectLink({ id }));
  };
  const unSelect = () => {
    if (!id) return;
    dispatch(removeSelection({ id }));
  };
  const ref = useClickOutside(unSelect);
  const unSelectAll = () => {
    links.forEach((link) => {
      dispatch(removeSelection({ id: link.id }));
    });
  };

  const setPosition = (position: { top: number; left: number }, id: string) => {
    dispatch(setLinkPosition({ id, position }));
  };

  const moveLocation = (location: string, id: string) => {
    dispatch(moveLinkLocation({ id, location }));
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!e.ctrlKey) unSelectAll();
    select();
  };

  const open = () => {
    if (!id) return;
    dispatch(openWindow(id));
  };

  return {
    link,
    onClick,
    unSelectAll,
    unSelect,
    setPosition,
    moveLocation,
    open,
    ref,
  };
};
