// import { useDispatch } from "react-redux";
import pokemonLogo from "../../assets/pokemonLogo.svg";
// import { pokemonNumber } from "../../utilities/utilities";
// import { getPokemonNumber } from "../../app/features/pokemonNumberSlice";
// import Button from "../button/button";

const GameResult = ({ isGameOver, isWin }) => {
  //   const dispatch = useDispatch();
  if (isGameOver) {
    return (
      <>
        <h1 className="pokeFont">Game over! Try again</h1>
        {/* <Button
          name="Play a game!"
          actionHandler={() => dispatch(getPokemonNumber())}
        /> */}
      </>
    );
  } else if (isWin) {
    return <h1 className="pokeFont">You win! Catch a new Pokemon</h1>;
  } else {
    return (
      <>
        <h1 className="pokeFont">What is </h1>
        <div className="card">
          <img src={pokemonLogo} className="logo" alt="Pokemon logo" />
        </div>
      </>
    );
  }
};

export default GameResult;
