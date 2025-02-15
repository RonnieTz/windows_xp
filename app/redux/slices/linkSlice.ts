import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logos } from '@/public/logos';
import { StaticImageData } from 'next/image';

export type Link = {
  name: string;
  id: string;
  location: string;
  isShortcut: boolean;
  position: { top: number; left: number };
  icon: StaticImageData;
  selected: boolean;
  dateModified: string;
  dateCreated: string;
};

const initialState: {
  links: Link[];
} = {
  links: [
    {
      name: 'Folder',
      id: 'folder1',
      location: 'desktop',
      isShortcut: false,
      position: { top: 100, left: 100 },
      icon: logos.folder,
      selected: false,
      dateCreated: new Date().toISOString(),
      dateModified: new Date().toISOString(),
    },
    {
      name: 'Folder2',
      id: 'folder2',
      location: 'desktop',
      isShortcut: false,
      position: { top: 200, left: 200 },
      icon: logos.folder,
      selected: false,
      dateCreated: new Date().toISOString(),
      dateModified: new Date().toISOString(),
    },
    {
      name: 'Folder3',
      id: 'folder3',
      location: 'folder2',
      isShortcut: false,
      position: { top: 200, left: 200 },
      icon: logos.folder,
      selected: false,
      dateCreated: new Date().toISOString(),
      dateModified: new Date().toISOString(),
    },
  ],
};

const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    selectLink: (state, action: PayloadAction<{ id: string }>) => {
      const link = state.links.find((link) => link.id === action.payload.id);
      if (link) {
        link.selected = true;
      }
    },
    removeSelection: (state, action: PayloadAction<{ id: string }>) => {
      const link = state.links.find((link) => link.id === action.payload.id);
      if (link) {
        link.selected = false;
      }
    },
    setLinkPosition: (
      state,
      action: PayloadAction<{
        id: string;
        position: { top: number; left: number };
      }>
    ) => {
      const link = state.links.find((link) => link.id === action.payload.id);
      if (link) {
        link.position = action.payload.position;
      }
    },
    moveLinkLocation: (
      state,
      action: PayloadAction<{ id: string; location: string }>
    ) => {
      const link = state.links.find((link) => link.id === action.payload.id);
      if (link) {
        link.location = action.payload.location;
      }
    },
  },
});

export default linkSlice.reducer;
export const {
  selectLink,
  removeSelection,
  setLinkPosition,
  moveLinkLocation,
} = linkSlice.actions;
