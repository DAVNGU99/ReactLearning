import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((c) => c - 1);
  }

  function handleNext() {
    if (step < 3) setStep((c) => c + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <StepMessagessage step={step}>
            {" "}
            {messages[step - 1]}{" "}
          </StepMessagessage>

          <div className="buttons">
            <Button bgColor="#7950F2" textColor="#fff" onClick={handlePrevious}>
              <span>🤗</span> Previous
            </Button>

            <Button bgColor="#7950F2" textColor="#fff" onClick={handleNext}>
              Next <span>😝</span>
            </Button>
          </div>
        </div>
      )}{" "}
    </>
  );
}

function StepMessagessage({ step, children }) {
  return (
    <div className="message">
      <h3> Step {step} </h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
