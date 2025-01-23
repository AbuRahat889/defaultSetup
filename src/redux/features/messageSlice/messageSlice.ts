/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MessageState {
  messageIds: any[]; // Adjust type if `messageId` has a specific type
}

const initialState: MessageState = {
  messageIds: [],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessageId: (state, action: PayloadAction<any>) => {
      state.messageIds.push(action.payload);
    },
    removeMessageId: (state, action: PayloadAction<any>) => {
      state.messageIds = state.messageIds.filter((id) => id !== action.payload);
    },
    resetMessageIds: (state) => {
      state.messageIds = [];
    },
  },
});

export const { addMessageId, removeMessageId, resetMessageIds } =
  messageSlice.actions;
export default messageSlice.reducer;
