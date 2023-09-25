import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-black text-white rounded-lg px-4 py-2 active:scale-105 transition-transform"
      >
        Increment
      </button>
    </div>
  );
}
