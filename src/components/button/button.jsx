import "./button.css";

const Button = ({ name, actionHandler, value, className }) => {
  return (
    <button onClick={actionHandler} value={value} className={className}>
      {name}
    </button>
  );
};

export default Button;
