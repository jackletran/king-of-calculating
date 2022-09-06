import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="Counter flex">
      <div className="count">Your Score: {counter}</div>
      <button
        className="plus"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Plus
      </button>
      <button
        className="clear"
        onClick={() => {
          setCounter(0);
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default Counter;
