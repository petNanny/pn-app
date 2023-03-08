import { RootState } from "..";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, petOwnerId: null },
  reducers: {
    setCredential: (state, action) => {
      const { accessToken, currentPetOwner } = action.payload;
      state.token = accessToken;
      state.petOwnerId = currentPetOwner._id;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("currentPetOwnerId", currentPetOwner._id);
    },
    logOut: (state) => {
      state.token = null;
      state.petOwnerId = null;
      localStorage.removeItem("token");
      localStorage.removeItem("currentPetOwnerId");
    },
  },
});

export const { setCredential, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;

export const selectCurrentPetOwnerId = (state: RootState) => state.auth.petOwnerId;
