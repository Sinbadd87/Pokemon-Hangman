const Button = ({ name, actionHandler, value }) => {
  return (
    <button onClick={actionHandler} value={value}>
      {name}
    </button>
  );
};

export default Button;
