import { apiSlice } from "./api/apiSlice";

export const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOnePetSitter: builder.query({
      query: (id) => ({
        url: `/petSitters/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOnePetSitterQuery } = imageApi;
