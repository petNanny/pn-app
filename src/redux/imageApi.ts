import { apiSlice } from "./api/apiSlice";

export const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userGetOwnImages: builder.query({
      query: (_id) => `/petSitters/images/${_id}`,
    }),

    userGetPetSitterImages: builder.query({
      query: (_id) => `/petSitters/petSitter-images/${_id}`,
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

    updateImagesOrder: builder.mutation({
      query: ({ body, petOwnerId }) => ({
        url: `/petSitters/updateImages/${petOwnerId}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useUploadMutation,
  useUserGetOwnImagesQuery,
  useUserGetPetSitterImagesQuery,
  useDeleteMutation,
  useUpdateImagesOrderMutation,
} = imageApi;
