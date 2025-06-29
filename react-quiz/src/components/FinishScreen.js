import Restart from "../Restart";

function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div>
      <p className="result">
        You scored <strong> {points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>
      <Restart dispatch={dispatch} />
    </div>
  );
}

export default FinishScreen;
