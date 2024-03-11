import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {UserResponse} from '@types';

const initialState: Partial<UserResponse> = {};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserResponse>) => {
      return action.payload;
    },
    resetProfile: () => {
      return initialState;
    },
  },
});

export const {setProfile, resetProfile} = profileSlice.actions;

export default profileSlice.reducer;
