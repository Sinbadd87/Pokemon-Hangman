// import Button from "../button/button";
import "./alphabet.css";

const Alphabet = ({ addGuessedLetter, activeLetters, inactiveLetters }) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className="alphabetDiv">
      {alphabet.map((letter) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);
        return (
          <button
            onClick={() => addGuessedLetter(letter)}
            disabled={isInactive || isActive}
            key={letter}
            className={`${"btn"} ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
          >
            {letter}
          </button>
          //   <Button
          //     key={key}
          //     name={key}
          //     value={key}
          //     actionHandler={actionHandler}
          //     disabled={isActive || isInactive}
          //   />
        );
      })}
    </div>
  );
};

export default Alphabet;
