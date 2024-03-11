import {primaryColors} from '@constants/theme';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type Settings = {
  primaryColor: string;
};

const initialState: Settings = {
  primaryColor: primaryColors[2],
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setPrimaryColor: (
      state,
      action: PayloadAction<Settings['primaryColor']>,
    ) => {
      return {...state, primaryColor: action.payload};
    },
    resetSettings: () => {
      return initialState;
    },
  },
});

export const {setPrimaryColor, resetSettings} = settingsSlice.actions;

export default settingsSlice.reducer;
