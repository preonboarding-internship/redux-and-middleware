import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increase}>increase</button>
    </div>
  );
}

export default App;
