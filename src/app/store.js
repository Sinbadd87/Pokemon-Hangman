import { configureStore } from "@reduxjs/toolkit";
import { pokemonApiSlice } from "../api/pokemonApiSlice";

export const store = configureStore({
  reducer: {
    [pokemonApiSlice.reducerPath]: pokemonApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApiSlice.middleware),
});
