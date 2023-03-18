import { apiSlice } from "./api/apiSlice";

export const petSitterApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOnePetSitter: builder.query({
      query: (id) => ({
        url: `/petSitters/${id}`,
        method: "GET",
      }),
    }),

    filterPetSitter: builder.mutation({
      query: ({ body }) => ({
        url: `/petSitters/filter`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetOnePetSitterQuery, useFilterPetSitterMutation } = petSitterApi;
