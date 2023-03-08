import { apiSlice } from "./apiSlice";

export const attachmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPetSitterImages: builder.query({
      query: (_id) => `/petSitters/${_id}`,
    }),
    upload: builder.mutation({
      query: ({ body, petOwnerId }) => ({
        url: `/petSitters/upload/${petOwnerId}`,
        method: "POST",
        body,
      }),
    }),
    delete: builder.mutation({
      query: ({ body, petOwnerId }) => ({
        url: `/petSitters/delete/${petOwnerId}`,
        method: "DELETE",
        body,
      }),
    }),
  }),
});

export const { useUploadMutation, useGetPetSitterImagesQuery, useDeleteMutation } = attachmentApi;
