function Restart({ dispatch }) {
  return (
    <div className="start">
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </div>
  );
}

export default Restart;
