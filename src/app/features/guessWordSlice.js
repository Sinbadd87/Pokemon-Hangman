// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { guessWord: [] };

// const isWin = pokemonName
//   .split("")
//   .every((letter) => guessWord.includes(letter));

// const wrongGuess = guessWord.filter((letter) => !pokemonName.includes(letter));
// //   isGameOver
// const isGameOver = wrongGuess.length >= 6;

// const addGuessedLetter = useCallback(
//   (letter) => {
//     if (guessWord.includes(letter) || isGameOver || isWin) return;

//     setGuessWord([...guessWord, letter]);
//   },
//   [guessWord, isWin, isGameOver]
// );

// export const guessWordSlice = createSlice({
//   name: "guessWord",
//   initialState,
//   reducers: {},
// });
