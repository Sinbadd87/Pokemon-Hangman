import { configureStore } from "@reduxjs/toolkit";
import { pokemonApiSlice } from "../api/pokemonApiSlice";
import pokemonNumberReducer from "./features/pokemonNumberSlice";

export const store = configureStore({
  reducer: {
    [pokemonApiSlice.reducerPath]: pokemonApiSlice.reducer,
    pokemonNumber: pokemonNumberReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApiSlice.middleware),
});
