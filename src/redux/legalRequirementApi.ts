import { apiSlice } from "./api/apiSlice";

export const legalRequirementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //get petsitter's legal doc by the petsitter's id
    userGetOwnLegalDoc: builder.query({
      query: (_id) => `/petSitters/legalDoc/${_id}`,
    }),

    // userGetPetSitterLegalDoc: builder.query({
    //   query: (_id) => `/petSitters/petSitter-legaldoc/${_id}`,
    // }),

    uploadLegalDoc: builder.mutation({
      query: ({ body, petSitterId }) => ({
        url: `/petSitters/uploadLegalDoc/${petSitterId}`,
        method: "POST",
        body,
      }),
    }),

    deleteLegalDoc: builder.mutation({
      query: ({ body, petSitterId }) => ({
        url: `/petSitters/deleteLegalDoc/${petSitterId}`,
        method: "DELETE",
        body,
      }),
    }),
  }),
});

export const {
  useUploadLegalDocMutation,
  useUserGetOwnLegalDocQuery,
  //useUserGetPetSitterLegalDocQuery,
  useDeleteLegalDocMutation,
} = legalRequirementApi;
