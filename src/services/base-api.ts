import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Deck, DecksResponse, createDecksArgs, getDecksArgs, getLernCard } from "./decks.types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Decks"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.flashcards.andrii.es",
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.append("x-auth-skip", "true");
    },
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
        query: (body) => ({
          url: `v1/decks`,
          method: "POST",
          body,
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
    };
  },
});

export const { useGetDecksQuery, useCreateDecksMutation, useDeleteDecksMutation, useGetLearnCardQuery } = baseApi;
