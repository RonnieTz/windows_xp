import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startMenuIsOpen: false,
  allProgramsMenuIsOpen: false,
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    toggleStartMenu: (state) => {
      state.startMenuIsOpen = !state.startMenuIsOpen;
    },
    closeStartMenu: (state) => {
      state.startMenuIsOpen = false;
    },
    openStartMenu: (state) => {
      state.startMenuIsOpen = true;
    },
    showAllProgramsMenu: (state) => {
      state.allProgramsMenuIsOpen = true;
    },
    hideAllProgramsMenu: (state) => {
      state.allProgramsMenuIsOpen = false;
    },
  },
});

export default systemSlice.reducer;
export const {
  toggleStartMenu,
  hideAllProgramsMenu,
  showAllProgramsMenu,
  closeStartMenu,
  openStartMenu,
} = systemSlice.actions;
