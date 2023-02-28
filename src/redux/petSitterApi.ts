import { apiSlice } from "./api/apiSlice";

export const petSittersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPetSitterDetail: builder.query({
      query: (id) => ({
        url: `/petSitters/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPetSitterDetailQuery } = petSittersApi;
