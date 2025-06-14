import { use, useState } from "react";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <Bill onSetBill={setBill} bill={bill} />
      <Service percentage={percentage1} onSetPercentage={setPercentage1}>
        How did you like the service?
      </Service>
      <Service percentage={percentage2} onSetPercentage={setPercentage2}>
        How did your friend like the service?
      </Service>
      <Total bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function Bill({ onSetBill, bill }) {
  return (
    <div>
      <h2>
        <label>How much was the bill?</label>
        <input
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
          type="text"
        ></input>
      </h2>
    </div>
  );
}

function Service({ children, percentage, onSetPercentage }) {
  return (
    <div>
      <h2>
        <span>{children}</span>
        <select
          value={percentage}
          onChange={(e) => onSetPercentage(Number(e.target.value))}
        >
          <option value="0">Bad(0%)</option>
          <option value="5">Ok(5%)</option>
          <option value="10">Good(10%)</option>
          <option value="20">Perfect(20%)</option>
        </select>
      </h2>
    </div>
  );
}

function Total({ bill, tip }) {
  return (
    <div>
      <h1>
        You pay {bill + tip} ({bill} + {tip})
      </h1>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
