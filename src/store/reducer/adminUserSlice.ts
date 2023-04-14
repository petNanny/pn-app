import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface adminUserState {
  id: string;
  email: string;
  userName: string;
  avatar: string;
}

export const initialState: adminUserState = {
  id: "",
  email: "",
  userName: "",
  avatar: "",
};

export const adminUserState = createSlice({
  name: "adminUser",
  initialState,
  reducers: {
    updateAdminUserInfo: (state: adminUserState, action: PayloadAction<adminUserState>) => {
      return action.payload;
    },
  },
});

export const { updateAdminUserInfo } = adminUserState.actions;

export default adminUserState.reducer;
