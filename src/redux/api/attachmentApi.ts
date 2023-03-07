import { apiSlice } from "./apiSlice";

export const attachmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPetSitterImages: builder.query({
      query: (_id) => `/petSitters/${_id}`,
    }),
    upload: builder.mutation({
      query: ({ body, petSitterId }) => ({
        url: `/petSitters/upload/${petSitterId}`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUploadMutation, useGetPetSitterImagesQuery } = attachmentApi;
