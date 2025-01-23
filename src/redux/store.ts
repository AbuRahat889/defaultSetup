/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { configureStore } from "@reduxjs/toolkit";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import authReducer from "./features/auth/authSlice";
import reviewFormReducer from "./features/reviewForm/reviewFormSlice";
import billingFromReducer from "./features/billingSlice/billingSlice";
import { baseApi } from "./api/baseApi";
import messageReducer from "./features/messageSlice/messageSlice";
import  agoraSlice from "./features/agoraSlice/agoraSlice";


const createNoopStorage = () => {
  return {
    getItem(_key: string): Promise<null> {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any): Promise<any> {
      return Promise.resolve(value);
    },
    removeItem(_key: string): Promise<void> {
      return Promise.resolve();
    },
  };
};

const storage = createWebStorage("local") || createNoopStorage();

const persistConfig = {
  key: "auth",
  storage,
};
const persistConfig2 = {
  key: "agoraSlice",
  storage,
};

const persistAgoraReducer = persistReducer(persistConfig2, agoraSlice)

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: persistedAuthReducer,
      reviewForm: reviewFormReducer,
      billing: billingFromReducer,
      message: messageReducer,
      agoraSlice: persistAgoraReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddlewares) =>
      getDefaultMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  });
};

export const store = makeStore();
export const persistor = persistStore(store);

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
