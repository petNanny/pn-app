import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    upload: builder.mutation({
      query: ({ body, petSitterId }) => ({
        url: `/petSitters/upload/${petSitterId}`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUploadMutation } = authApi;
