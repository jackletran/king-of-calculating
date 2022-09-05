import { useState } from "react";
import Result from "./Result";

function Calculator() {
  const [result, setResult] = useState(0);

  return (
    <div className="Calculator">
      <Result result={result} setResult={setResult} />
      <div className="grid-3">
        <button>AC</button>
        <button>DEL</button>
        <button>%</button>
      </div>
      <div className="grid-4">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>X</button>
      </div>
      <div className="grid-4">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
      </div>
      <div className="grid-4">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
      </div>
      <div className="grid-3-b">
        <button>.</button>
        <button>0</button>
        <button>=</button>
      </div>
    </div>
  );
}

export default Calculator;
