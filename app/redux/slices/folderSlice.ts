import { createSlice } from '@reduxjs/toolkit';

type Folder = {
  name: string;
  id: string;
  subfolders: Folder[];
};

const initialState: {
  folderPaths: { name: string; id: string; subfolders: Folder[] }[];
  folderOptions: {
    view: 'Thumbnails' | 'List' | 'Details' | 'Tiles' | 'Icons';
    standartBar: boolean;
    addressBar: boolean;
  };
} = {
  folderPaths: [
    {
      name: 'C:',
      id: 'root',
      subfolders: [
        {
          name: 'Documents and Settings',
          id: 'documents',
          subfolders: [
            {
              name: 'User',
              id: 'user',
              subfolders: [
                {
                  name: 'Desktop',
                  id: 'desktop',
                  subfolders: [
                    {
                      name: 'Folder',
                      id: 'folder',
                      subfolders: [],
                    },
                    {
                      name: 'Folder2',
                      id: 'folder2',
                      subfolders: [],
                    },
                  ],
                },
                {
                  name: 'Downloads',
                  id: 'downloads',
                  subfolders: [],
                },
                {
                  name: 'My Documents',
                  id: 'documents',
                  subfolders: [],
                },
                {
                  name: 'Start Menu',
                  id: 'startMenu',
                  subfolders: [],
                },
              ],
            },
            {
              name: 'All Users',
              id: 'allUsers',
              subfolders: [],
            },
          ],
        },
        {
          name: 'Program Files',
          id: 'programs',
          subfolders: [],
        },
        {
          name: 'Windows',
          id: 'windows',
          subfolders: [],
        },
      ],
    },
  ],
  folderOptions: { view: 'Thumbnails', standartBar: true, addressBar: true },
};

const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.folderOptions.view = action.payload;
    },

    setStandardBar: (state, action) => {
      state.folderOptions.standartBar = action.payload;
    },

    setAddressBar: (state, action) => {
      state.folderOptions.addressBar = action.payload;
    },
  },
});

export default folderSlice.reducer;
export const { setView, setAddressBar, setStandardBar } = folderSlice.actions;
