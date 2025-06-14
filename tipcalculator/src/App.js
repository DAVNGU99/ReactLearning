import { use, useState } from "react";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [total, setTotal] = useState(222);

  return (
    <div>
      <Bill onSetTotal={setTotal} />
      <Service>How did you like the service?</Service>
      <Service>How did your friend like the service?</Service>
      <Total total={total} />
    </div>
  );
}

function Bill({ onSetTotal }) {
  return (
    <div>
      <h2>
        <label>How much was the bill?</label>
        <input type="text"></input>
      </h2>
    </div>
  );
}

function Service({ children }) {
  return (
    <div>
      <h2>
        <span>{children}</span>
        <select>
          <option value="0">Bad(0%)</option>
          <option value="5">Ok(5%)</option>
          <option value="10">Good(10%)</option>
          <option value="20">Perfect(20%)</option>
        </select>
      </h2>
    </div>
  );
}

function Total({ total }) {
  return (
    <div>
      <h1>You pay {total}</h1>
    </div>
  );
}

function Reset() {}
