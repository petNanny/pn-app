import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PetState {
  petId: string | null;
}

export const initialState: PetState = {
  petId: null,
};

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    setPetId: (state: PetState, action: PayloadAction<string>) => {
      state.petId = action.payload;
    },
  },
});

export const { setPetId } = petSlice.actions;

export default petSlice.reducer;
