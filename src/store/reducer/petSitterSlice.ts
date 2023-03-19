import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface PetSitterState {
  petOwnerId: string;
  address: {
    streetNumber: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postcode: string;
    latitude: string;
    longitude: string;
  };
  images: string[];
  languages: string[];
  introduction: string;
  description: string;
  service: [
    {
      service: string;
      serviceDesc: string;
      Rate: number;
      isActive: boolean;
    }
  ];
  additionalService: [
    {
      service: string;
      isActive: boolean;
    }
  ];
  policy: string;
  preference: {
    age: string;
    size: string;
    petTypes: string;
  };
  home: {
    propertyType: string;
    outDoorArea: string;
    fenced: boolean;
    kids: string;
  };
  walkingAreas: string;
  experiences: [
    {
      title: string;
      years: string;
    }
  ];
  experienceDesc: string;
  completedCheck: [
    {
      title: string;
      isFinished: boolean;
    }
  ];
  bankAccount: [{ bsb: string; accountNumber: string }];
  isActivePetSitter: boolean;
  createdAt: string;
  updatedAt: string;
}

export const initialState: PetSitterState = {
  petOwnerId: "",
  address: {
    streetNumber: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
    latitude: "",
    longitude: "",
  },
  images: [],
  languages: [],
  introduction: "",
  description: "",
  service: [
    {
      service: "",
      serviceDesc: "",
      Rate: 0,
      isActive: false,
    },
  ],
  additionalService: [
    {
      service: "",
      isActive: false,
    },
  ],
  policy: "",
  preference: {
    age: "",
    size: "",
    petTypes: "",
  },
  home: {
    propertyType: "",
    outDoorArea: "",
    fenced: false,
    kids: "",
  },
  walkingAreas: "",
  experiences: [
    {
      title: "",
      years: "",
    },
  ],
  experienceDesc: "",
  completedCheck: [
    {
      title: "",
      isFinished: false,
    },
  ],
  bankAccount: [{ bsb: "", accountNumber: "" }],
  isActivePetSitter: false,
  createdAt: "",
  updatedAt: "",
};

export const petSitterSlice = createSlice({
  name: "petSitter",
  initialState,
  reducers: {
    updatePetSitterInfo: (state: PetSitterState, action: PayloadAction<PetSitterState>) => {
      return action.payload;
    },
  },
});

export const { updatePetSitterInfo } = petSitterSlice.actions;

export default petSitterSlice.reducer;
