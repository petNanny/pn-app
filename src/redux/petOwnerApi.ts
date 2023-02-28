import { apiSlice } from "./api/apiSlice";

export const petOwnerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPetOwner: builder.query({
      query: () => ({
        url: "/petOwners",
        method: "GET",
      }),
    }),
  }),
});
