import { useEffect, useState } from "react";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(100);
  const [output, setOutput] = useState(null);

  useEffect(() => {
    async function getCurrency() {
      if (fromCurrency === toCurrency) {
        setOutput("Please choose different currencies.");
        return;
      }

      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setOutput(data.rates[toCurrency]);
    }

    getCurrency();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div>
      <h2>Currency Converter</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />

      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>
        OUTPUT:{" "}
        {output !== null
          ? `${amount} ${fromCurrency} = ${output} ${toCurrency}`
          : "Loading..."}
      </p>
    </div>
  );
}
