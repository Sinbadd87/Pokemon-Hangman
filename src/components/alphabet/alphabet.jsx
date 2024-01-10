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
      {alphabet.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || isActive}
            key={key}
            className={`${"btn"} ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
          >
            {key}
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
