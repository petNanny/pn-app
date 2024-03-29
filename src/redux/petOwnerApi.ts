// import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

// const petOwnerAdapter = createEntityAdapter({});

// const initialState = petOwnerAdapter.getInitialState();

export const petOwnerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOnePetOwner: builder.query({
      query: (id) => ({
        url: `/petOwners/${id}`,
        method: "GET",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "PetSitter", id: "List" }],
      }),
    }),

    getAllPetOwners: builder.query({
      query: (page) => ({
        url: `/petOwners/?page=${page}`,
        method: "GET",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "PetOwner", id: "List" }],
      }),
    }),

    updateOnePetOwner: builder.mutation({
      query: (petOwner) => ({
        url: `/petOwners/${petOwner._id}`,
        method: "PATCH",
        body: petOwner,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "PetOwner", id: arg.id }],
    }),

    deleteOnePetOwner: builder.mutation({
      query: (id) => ({
        url: `petOwners/deletePetOwner/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "PetOwner", id: arg.id }],
    }),

    uploadPetOwnerAvatar: builder.mutation({
      query: ({ body, petOwnerId }) => ({
        url: `petOwners/uploadAvatar/${petOwnerId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "PetOwner", id: arg.id }],
    }),
  }),
});

export const {
  useGetOnePetOwnerQuery,
  useGetAllPetOwnersQuery,
  useUpdateOnePetOwnerMutation,
  useDeleteOnePetOwnerMutation,
  useUploadPetOwnerAvatarMutation,
} = petOwnerApi;
