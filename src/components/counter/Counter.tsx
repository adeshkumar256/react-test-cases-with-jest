import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Current amount: {count}</h2>
      <input
        type="number"
        name="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
}

export default Counter;
