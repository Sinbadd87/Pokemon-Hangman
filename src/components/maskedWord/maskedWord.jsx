import "./maskedWord.css";
const MaskedWord = ({ word, guessWord, isGameOver }) => {
  return (
    <div className="maskedWordDiv">
      {word.split("").map((letter, index) => (
        <span className="maskedWordSpan" key={index}>
          <span
            style={{
              visibility:
                guessWord.includes(letter) || isGameOver ? "visible" : "hidden",
              color:
                !guessWord.includes(letter) && isGameOver ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default MaskedWord;
