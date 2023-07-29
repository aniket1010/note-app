const TopDiv = ({ setDarkMode }) => {
  return (
    <div className="top-div">
      <h1 className="top-h1">Notes</h1>
      <button
        onClick={() => setDarkMode((prevState) => !prevState)}
        className="top-button"
      >
        Toggle
      </button>
    </div>
  );
};

export default TopDiv;
