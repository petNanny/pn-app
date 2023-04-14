import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AdminHomepage: false,
};

export const adminSlice = createSlice({
  name: "adminPage",
  initialState,
  reducers: {
    toggleShowAdminHomepage: (state) => {
      state.AdminHomepage = true;
    },
    toggleOffAdminHomepage: (state) => {
      state.AdminHomepage = false;
    },
  },
});

export const { toggleShowAdminHomepage, toggleOffAdminHomepage } = adminSlice.actions;

export default adminSlice.reducer;
