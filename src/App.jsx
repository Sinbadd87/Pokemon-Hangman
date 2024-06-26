import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonByIdQuery } from "./api/pokemonApiSlice";
import { getPokemonNumber } from "./app/features/pokemonNumberSlice";

import "./App.css";

import Button from "./components/button/button";
import Alphabet from "./components/alphabet/alphabet";
import PokemonImage from "./components/pokemonImage/pokemonImage";
import MaskedWord from "./components/maskedWord/maskedWord";
import GameResult from "./components/gameresult/gameresult";
// import { pokemonNumber } from "./utilities/utilities";

function App() {
  const dispatch = useDispatch();
  const pokemonNumber = useSelector((state) => state.pokemonNumber.value);
  const {
    data = {
      name: "",
      sprites: { other: { dream_world: { front_default: "" } } },
    },
    isLoading,
    isSuccess,
  } = useGetPokemonByIdQuery(pokemonNumber);

  const [guessWord, setGuessWord] = useState([]);
  const pokemonName = data.name;
  console.log(pokemonName, pokemonNumber);

  // isGameWinner
  const isWin = pokemonName
    .split("")
    .every((letter) => guessWord.includes(letter));

  const wrongGuess = guessWord.filter(
    (letter) => !pokemonName.includes(letter)
  );
  //   isGameOver
  const isGameOver = wrongGuess.length >= 6;

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessWord.includes(letter) || isGameOver || isWin) return;

      setGuessWord([...guessWord, letter]);
    },
    [guessWord, isWin, isGameOver]
  );

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessWord]);

  return (
    <div className="mainAppDiv">
      <div>
        {isSuccess && <GameResult isGameOver={isGameOver} isWin={isWin} />}
        {isWin || isGameOver ? (
          <Button
            className={"btnInverted btnSmall"}
            name="Play again!"
            actionHandler={() => {
              dispatch(getPokemonNumber());
              setGuessWord([]);
            }}
          />
        ) : null}
      </div>
      <div className="card">
        {isLoading && "Please, wait!"}
        {isSuccess && (
          <div>
            <PokemonImage
              imageData={data.sprites.other.dream_world.front_default}
            />
            <MaskedWord
              word={pokemonName}
              guessWord={guessWord}
              isGameOver={isGameOver}
            />
          </div>
        )}
      </div>
      <div className="alphabetAppDiv">
        {isSuccess && (
          <Alphabet
            addGuessedLetter={addGuessedLetter}
            activeLetters={guessWord.filter((letter) =>
              pokemonName.includes(letter)
            )}
            inactiveLetters={wrongGuess}
          />
        )}
      </div>
    </div>
  );
}

export default App;
