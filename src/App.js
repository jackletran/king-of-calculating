import Calculator from "./components/Calculator";
import "./App.css";
import "./Operators.css";
import Multiply from "./operators/multiply";
import Divide from "./operators/divide";
import Subtract from "./operators/subtract";
import Add from "./operators/add";

function App() {
  return (
    <>
    <h1>King Of Calculating</h1>
      <Multiply />
      <Divide />
      <Add />
      <Subtract />
    </>
  );
}

export default App;
