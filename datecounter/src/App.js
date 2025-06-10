import { useState } from "react";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(0);

  function handlePlusStep() {
    setStep((x) => step + 1);
  }

  function handleStepMinus() {
    setStep((x) => step - 1);
  }

  function handlePlus() {
    setCount((x) => count + step);
  }

  function handleMinus() {
    setCount((x) => count - 1);
  }

  return (
    <>
      <div>
        <button onClick={handleStepMinus}>-</button>
        <span>Step: {step} </span>
        <button onClick={handlePlusStep}>+</button>
      </div>
      <button onClick={handleMinus}>-</button>
      <span>Count: {count}</span>
      <button onClick={handlePlus}>+</button>
      <h1> counter: {count} </h1>
    </>
  );
}
