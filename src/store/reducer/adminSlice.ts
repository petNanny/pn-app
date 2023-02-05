//FIXME: will delete, is an example, only for create folder structure
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface AdminState {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const initialState: AdminState = {
  userId: "",
  email: "",
  firstName: "",
  lastName: "",
};

export const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    updateAdminInfo: (state: AdminState, action: PayloadAction<AdminState>) => {
      return action.payload;
    },
  },
});

export const defaultUser = initialState;
export const { updateAdminInfo } = AdminSlice.actions;
export const adminData = (state: RootState) => state.user;

export default AdminSlice.reducer;
