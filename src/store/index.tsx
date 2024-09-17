import { Action } from "redux"
import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { CommonReducer } from "./slices/common.slice";

export const store = configureStore({
  reducer: {
    common: CommonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export * from './hooks';
