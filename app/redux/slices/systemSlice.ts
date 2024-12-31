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
    showAllProgramsMenu: (state) => {
      state.allProgramsMenuIsOpen = true;
    },
    hideAllProgramsMenu: (state) => {
      state.allProgramsMenuIsOpen = false;
    },
  },
});

export default systemSlice.reducer;
export const { toggleStartMenu, hideAllProgramsMenu, showAllProgramsMenu } =
  systemSlice.actions;