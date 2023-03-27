import { apiSlice } from "./api/apiSlice";

export const petSitterApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOnePetSitter: builder.query({
      query: (id) => ({
        url: `/petSitters/${id}`,
        method: "GET",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "PetSitter", id: "List" }],
      }),
    }),

    getAllPetSitters: builder.query({
      query: (page) => ({
        url: `/petSitters?page=${page}`,
        method: "GET",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "PetSitter", id: "List" }],
      }),
    }),

    updateOnePetSitter: builder.mutation({
      query: (petSitter) => ({
        url: `/petSitters/updatePetSitter/${petSitter._id}`,
        method: "POST",
        body: petSitter,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "PetSitter", id: arg.id }],
    }),

    CreateOnePetSitter: builder.mutation({
      query: (petOwner) => ({
        url: `/petSitters/createPetSitter/${petOwner._id}`,
        method: "POST",
        body: { ...petOwner },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "PetSitter", id: arg.id }],
    }),

    filterPetSitter: builder.mutation({
      query: ({ body }) => ({
        url: `/petSitters/filter`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetOnePetSitterQuery,
  useGetAllPetSittersQuery,
  useCreateOnePetSitterMutation,
  useUpdateOnePetSitterMutation,
  useFilterPetSitterMutation,
} = petSitterApi;
