import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter } from "./store/counter";

function App() {
  // const [count, setCount] = useState(0);

  // const increase = () => {
  //   setCount((prev) => prev + 1);
  // };
  //
  // get state from store
  const count = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const increase = () => {
    // make action from action creator
    const increaseAction = increaseCounter();

    // dispatch action to store
    dispatch(increaseAction);
  };

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increase}>increase</button>
    </div>
  );
}

export default App;
