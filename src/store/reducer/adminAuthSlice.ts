import { RootState } from "..";
import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: { token: null, adminId: null },
  reducers: {
    setCredential: (state, action) => {
      const { adminAccessToken, currentAdmin } = action.payload;
      state.token = adminAccessToken;
      state.adminId = currentAdmin._id;
      localStorage.setItem("adminToken", adminAccessToken);
      localStorage.setItem("currentAdminId", currentAdmin._id);
    },
    logOut: (state) => {
      state.token = null;
      state.adminId = null;
      localStorage.removeItem("adminToken");
      localStorage.removeItem("currentAdminId");
    },
  },
});

export const { setCredential, logOut } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.adminAuth.token;

export const selectCurrentAdminId = (state: RootState) => state.adminAuth.adminId;
