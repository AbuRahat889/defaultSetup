/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import Cookies from "js-cookie";

export type TUser = {
  id?: any;
  name?: string;
  email: string;
  avatar: string | undefined;
  role: string;
  iat: number;
  exp: number;
  planType?: string;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
  accessToken: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: Cookies.get("token") || null,
  accessToken: Cookies.get("accessToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        user: TUser;
        token: string;
        accessToken: string;
      }>
    ) => {
      const { user, token, accessToken } = action.payload;
      state.user = user;
      state.token = token;
      state.accessToken = accessToken;

      Cookies.set("token", token);
      Cookies.set("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.accessToken = null;

      Cookies.remove("token");
      Cookies.remove("accessToken");
      localStorage.removeItem("user");
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.avatar = action.payload; // Update the avatar in Redux state
        localStorage.setItem("user", JSON.stringify(state.user)); // Persist to localStorage
      }
    },
    rehydrate: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.user = JSON.parse(user);
      }
    },
  },
});

export const { setUser, logout, rehydrate, updateAvatar } = authSlice.actions;

export default authSlice.reducer;

// Selectors
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useAccessToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentUser = (state: RootState) => state.auth.user;
