import "./App.css";
import "./index.css";
import Multiply from "./operators/Multiply";
import Divide from "./operators/Divide";
import Subtract from "./operators/Subtract";
import Add from "./operators/Add";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  let renderCondition = counter / 5;
  if (counter === 20) setCounter(0);
  return (
    <>
      <div className="flex">
        <h1>King Of Calculating</h1>
      </div>
      {renderCondition < 1 && <Multiply />}
      {renderCondition < 2 && renderCondition >= 1 && <Divide />}
      {renderCondition < 3 && renderCondition >= 2 && <Add />}
      {renderCondition < 4 && renderCondition >= 3 && <Subtract />}
      <Counter counter={counter} setCounter={setCounter} />
      <Timer />
    </>
  );
}

export default App;
