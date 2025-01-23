import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  channelName: null,
  agoraToken: null,
  appId: null,
};

export const agoraSlice = createSlice({
  name: "agoraSlice",
  initialState,
  reducers: {
    setAppInfo: (state, action) => {
      const { uid, channelName, token, appId } = action.payload;
      state.uid = uid;
      state.channelName = channelName;
      state.agoraToken = token;
      state.appId = appId;
    },
    clearAppInfo: (state) => {
      state.uid = null;
      state.channelName = null;
      state.agoraToken = null;
      state.appId = null;
    },
  },
});

export const { setAppInfo, clearAppInfo } = agoraSlice.actions;

export default agoraSlice.reducer;
