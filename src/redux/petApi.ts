import { apiSlice } from "./api/apiSlice";

export const petApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOnePet: builder.query({
      query: (_id) => `/pets/onePet/${_id}`,
    }),

    getAllPets: builder.query({
      query: (_id) => `/pets/allPets/${_id}`,
    }),

    userAddPet: builder.mutation({
      query: ({ body, petOwnerId }) => ({
        url: `/pets/add/${petOwnerId}`,
        method: "POST",
        body,
      }),
    }),

    userDeletePet: builder.mutation({
      query: ({ petOwnerId }) => ({
        url: `/pets/delete/${petOwnerId}`,
        method: "DELETE",
      }),
    }),

    userUpdatePet: builder.mutation({
      query: ({ body, petOwnerId }) => ({
        url: `/pets/update/${petOwnerId}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useUserAddPetMutation,
  useGetOnePetQuery,
  useGetAllPetsQuery,
  useUserDeletePetMutation,
  useUserUpdatePetMutation,
} = petApi;
