import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  isConfettying: boolean;
};

const initialState: CommonState = {
  isConfettying: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setIsConfettying: (state, action: PayloadAction<boolean>) => {
      state.isConfettying = action.payload;
    },
  },
});

export const CommonActions = commonSlice.actions;
export const CommonReducer = commonSlice.reducer;