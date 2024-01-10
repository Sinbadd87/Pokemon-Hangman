import { useState, useEffect, useCallback } from "react";
import { useGetPokemonByIdQuery } from "./api/pokemonApiSlice";

import "./App.css";
import pokemonLogo from "./assets/pokemonLogo.svg";

import Button from "./components/button/button";
import Alphabet from "./components/alphabet/alphabet";
import PokemonImage from "./components/pokemonImage/pokemonImage";

const pokemon = Math.floor(Math.random() * 150) + 1;

const GameResult = ({ isGameOver, isWin }) => {
  if (isGameOver) {
    return <h1 className="pokeFont">Game over! Try again</h1>;
  } else if (isWin) {
    return <h1 className="pokeFont">You win! Catch a new Pokemon</h1>;
  } else {
    return <h1 className="pokeFont">What is </h1>;
  }
};

function App() {
  const {
    data = {
      name: "",
      sprites: { other: { dream_world: { front_default: "" } } },
    },
    isLoading,
    isSuccess,
  } = useGetPokemonByIdQuery(pokemon);

  const [guessWord, setGuessWord] = useState([]);
  const pokemonName = data.name;
  console.log(pokemonName);

  // Create isGameWinner
  const isWin = pokemonName
    .split("")
    .every((letter) => guessWord.includes(letter));

  const getPokemonId = () => pokemon;

  const maskedWord = (word) =>
    word
      .split("")
      .map((letter) => (guessWord.includes(letter) ? letter : "_"))
      .join(" ");

  const wrongGuess = guessWord.filter(
    (letter) => !pokemonName.includes(letter)
  );
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
  }, []);

  //   useEffect(() => {
  //     const handler = (e) => {
  //       const key = e.key;
  //       if (key !== "Enter") return;

  //       e.preventDefault();
  //       setGuessWord([]);
  //     };

  //     document.addEventListener("keypress", handler);

  //     return () => {
  //       document.removeEventListener("keypress", handler);
  //     };
  //   }, []);

  //   const onWordGuessHandler = (e) => {
  //     const letter = e.target.value.toLowerCase();
  //     if (isSuccess && data.name.includes(letter)) {
  //       setGuessWord([...guessWord, letter]);
  //     }
  //   };

  return (
    <div className="mainAppDiv">
      <div>
        {isSuccess && <GameResult isGameOver={isGameOver} isWin={isWin} />}
        <div className="card">
          <img src={pokemonLogo} className="logo" alt="Pokemon logo" />
        </div>
      </div>
      <div className="card">
        {isLoading && "Please, wait!"}
        {isSuccess ? (
          <div>
            <PokemonImage
              imageData={data.sprites.other.dream_world.front_default}
            />
            <h3>{maskedWord(pokemonName)}</h3>
          </div>
        ) : (
          <Button name="Play a game!" actionHandler={getPokemonId} />
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
