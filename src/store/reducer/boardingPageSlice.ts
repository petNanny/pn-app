import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMapOrCard: false,
};

export const boardingPageSlice = createSlice({
  name: "boardingPage",
  initialState,
  reducers: {
    toggleShowMapOrCard: (state) => {
      state.showMapOrCard = !state.showMapOrCard;
    },
  },
});

export const { toggleShowMapOrCard } = boardingPageSlice.actions;

export default boardingPageSlice.reducer;
