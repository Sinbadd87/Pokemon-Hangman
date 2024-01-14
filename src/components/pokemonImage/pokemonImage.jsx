import "./pokemonImage.css";

const PokemonImage = ({ imageData }) => {
  return <img className="pokemonImage" src={imageData} />;
};
export default PokemonImage;
