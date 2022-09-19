import "./App.css";
import "./index.css";
import Multiply from "./operators/Multiply";
import Divide from "./operators/Divide";
import Subtract from "./operators/Subtract";
import Add from "./operators/Add";
import Counter from "./components/Counter";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <div className="flex">
        <h1>King Of Calculating</h1>
      </div>
      <Multiply />
      <Divide />
      <Add />
      <Subtract />
      <Counter />
      <Timer />
    </>
  );
}

export default App;
