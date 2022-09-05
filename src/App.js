import "./App.css";
import "./Operators.css";
import Multiply from "./operators/multiply";
import Divide from "./operators/divide";
import Subtract from "./operators/subtract";
import Add from "./operators/add";

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
    </>
  );
}

export default App;
