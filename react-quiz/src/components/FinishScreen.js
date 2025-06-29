function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div>
      <p className="result">
        You scored <strong> {points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>
    </div>
  );
}

export default FinishScreen;
