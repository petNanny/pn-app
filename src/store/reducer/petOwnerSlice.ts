import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface PetOwnerState {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  avatar: string;
  phone: string;
  roles: string[];
  petSitterId: string;
}

export const initialState: PetOwnerState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
  avatar: "",
  phone: "",
  roles: [],
  petSitterId: "",
};

export const petOwnerSlice = createSlice({
  name: "petOwner",
  initialState,
  reducers: {
    updatePetOwnerInfo: (state: PetOwnerState, action: PayloadAction<PetOwnerState>) => {
      return action.payload;
    },
  },
});

export const { updatePetOwnerInfo } = petOwnerSlice.actions;

export default petOwnerSlice.reducer;
