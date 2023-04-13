import { apiSlice } from "./api/apiSlice";

export const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    petOwnerStartConversation: builder.mutation({
      query: ({ body }) => ({
        url: `/conversations`,
        method: "POST",
        body,
      }),
    }),

    userGetAllConversations: builder.query({
      query: (id) => ({
        url: `/conversations/getAll/${id}`,
        method: "GET",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "Conversation", id: "List" }],
      }),
    }),

    userGetOneConversation: builder.query({
      query: (id) => ({
        url: `/conversations/getOne/${id}`,
        method: "GET",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "Conversation", id: "List" }],
      }),
    }),
  }),
});

export const {
  usePetOwnerStartConversationMutation,
  useUserGetAllConversationsQuery,
  useUserGetOneConversationQuery,
} = conversationApi;
