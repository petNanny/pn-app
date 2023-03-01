import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

const petOwnerAdapter = createEntityAdapter({});

const initialState = petOwnerAdapter.getInitialState();

export const petOwnerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOnePetOwner: builder.query({
      query: ({ id }) => ({
        url: "/petOwners",
        method: "POST",
        body: { id },
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "PetSitter", id: "List" }],
      }),
    }),

    updateOnePetOwner: builder.mutation({
      query: (petOwner) => ({
        url: "/petOwners",
        method: "PATCH",
        body: { ...petOwner },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "PetOwner", id: arg.id }],
    }),

    deleteOnePetOwner: builder.mutation({
      query: ({ id }) => ({
        url: "petOwners/deletePetOwner",
        method: "PATCH",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "PetOwner", id: arg.id }],
    }),
  }),
});

export const {
  useGetOnePetOwnerQuery,
  useUpdateOnePetOwnerMutation,
  useDeleteOnePetOwnerMutation,
} = petOwnerApi;
