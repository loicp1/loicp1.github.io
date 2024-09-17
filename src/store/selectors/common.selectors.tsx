import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

const common = (state: RootState) => state.common;

const isConfettying = createSelector([common], (c) => c.isConfettying);

export const CommonSelectors = {
  isConfettying,
};