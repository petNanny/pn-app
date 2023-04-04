import { apiSlice } from "./api/apiSlice";

export const petApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOnePet: builder.query({
      query: (id) => ({
        url: `/pets/onePet/${id}`,
        method: "GET",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "Pet", id: "List" }],
      }),
    }),

    getAllPets: builder.query({
      query: (id) => ({
        url: `/pets/allPets/${id}`,
        method: "GET",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "Pet", id: "List" }],
      }),
    }),

    userAddPet: builder.mutation({
      query: ({ body, petOwnerId }) => ({
        url: `/pets/add/${petOwnerId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Pet", id: arg.id }],
    }),

    userDeletePet: builder.mutation({
      query: ({ petId }) => ({
        url: `/pets/delete/${petId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Pet", id: arg.id }],
    }),

    userUpdatePet: builder.mutation({
      query: ({ body, petId }) => ({
        url: `/pets/update/${petId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Pet", id: arg.id }],
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
