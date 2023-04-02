import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: undefined,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    start: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    success: (state) => {
      state.loading = false;
      state.error = undefined;
    },
    failed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
