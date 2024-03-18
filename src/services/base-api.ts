import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Deck, DecksResponse, createDecksArgs, getDecksArgs, getLernCard, postLoginType } from "./decks.types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Decks", "Login"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.flashcards.andrii.es",
    credentials: "include",
    // prepareHeaders: (headers) => {
    //   headers.append("x-auth-skip", "true");
    // },
  }),
  endpoints: (builder) => {
    return {
      getDecks: builder.query<DecksResponse, getDecksArgs | void>({
        providesTags: ["Decks"],
        query: (args) => ({
          url: `v2/decks`,
          params: args ?? {},
        }),
      }),
      createDecks: builder.mutation<Deck, createDecksArgs>({
        invalidatesTags: ["Decks"],
        query: ({ name }) => ({
          url: `v1/decks`,
          method: "POST",
          body: { name },
        }),
      }),
      deleteDecks: builder.mutation<Deck, string>({
        invalidatesTags: ["Decks"],
        query: (id) => ({
          url: `v1/decks/${id}`,
          method: "DELETE",
        }),
      }),
      getLearnCard: builder.query<getLernCard, string>({
        query: (id) => ({
          url: `v1/decks/${id}/learn`,
        }),
      }),
      getMe: builder.query<postLoginType, void>({
        providesTags: ["Login"],
        query: () => ({
          url: `v1/auth/me`,
        }),
      }),
      postLogin: builder.mutation<void, postLoginType | void>({
        invalidatesTags: ["Login"],
        query: (data) => ({
          url: `v1/auth/login`,
          method: "POST",
          body: data,
        }),
      }),
    };
  },
});

export const {
  useGetDecksQuery,
  useCreateDecksMutation,
  useDeleteDecksMutation,
  useGetLearnCardQuery,
  useGetMeQuery,
  usePostLoginMutation,
} = baseApi;
