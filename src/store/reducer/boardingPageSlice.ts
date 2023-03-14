import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showGoogleMap: false,
};

export const layoutSlice = createSlice({
  name: "boardingPage",
  initialState,
  reducers: {
    toggleShowGoogleMap: (state) => {
      state.showGoogleMap = !state.showGoogleMap;
    },
  },
});

export const { toggleShowGoogleMap } = layoutSlice.actions;

export default layoutSlice.reducer;
