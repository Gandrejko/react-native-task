import {primaryColors} from '@constants/theme';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type Settings = {
  primaryColor: string;
  language: string;
  theme: 'light' | 'dark';
};

const initialState: Settings = {
  primaryColor: primaryColors[0],
  language: 'en',
  theme: 'light',
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
    setLanguage: (state, action: PayloadAction<Settings['language']>) => {
      return {...state, language: action.payload};
    },
    setTheme: (state, action: PayloadAction<Settings['theme']>) => {
      return {...state, theme: action.payload};
    },
    resetSettings: () => {
      return initialState;
    },
  },
});

export const {setPrimaryColor, resetSettings, setLanguage, setTheme} =
  settingsSlice.actions;

export default settingsSlice.reducer;
