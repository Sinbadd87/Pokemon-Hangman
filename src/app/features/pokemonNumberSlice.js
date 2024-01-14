import { createSlice } from "@reduxjs/toolkit";

const pokemonNumInit = Math.floor(Math.random() * 150) + 1;

const initialState = {
  value: pokemonNumInit,
};

export const pokemonNumberSlice = createSlice({
  name: "pokemonNumber",
  initialState,
  reducers: {
    getPokemonNumber: (state) => {
      state.value = Math.floor(Math.random() * 150) + 1;
    },
  },
});

export const { getPokemonNumber } = pokemonNumberSlice.actions;
export default pokemonNumberSlice.reducer;
