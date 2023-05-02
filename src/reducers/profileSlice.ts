import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoggedIn: false,
  } as ProfileType,
  reducers: {
    signIn: (state, { payload }) => {
      const profile = { ...payload, isLoggedIn: true };
      return profile;
    },
    signOut: (state, { payload }) => {
      const profile = { ...payload, isLoggedIn: false };
      return profile;
    },
  },
});

export const { signIn, signOut } = profileSlice.actions;

export const profileSelector = ({ profile }: RootState) => profile;
