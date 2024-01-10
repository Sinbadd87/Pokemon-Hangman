import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApiSlice = createApi({
  reducerPath: "pokeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getPokemonById: builder.query({
      query: (id) => ({ url: `pokemon/${id}` }),
    }),
  }),
});

export const { useGetPokemonByIdQuery } = pokemonApiSlice;
