import { useState } from "react";

function Multiply() {
  const generateProblem = () => {
    let firstRandom = Math.floor(1 + Math.random() * range1);
    let secondRandom = Math.floor(1 + Math.random() * range2);

    setProblem(`${firstRandom} * ${secondRandom} = ?`);

    setSolution(firstRandom * secondRandom);

    setDisplayStyle({ display: "none" });
  };

  const [problem, setProblem] = useState(
    "Ready for a multiplication problem Evrard?"
  );

  const [solution, setSolution] = useState(null);

  const [range1, setRange1] = useState(20);
  const [range2, setRange2] = useState(20);

  const [displayStyle, setDisplayStyle] = useState({ display: "none" });

  return (
    <div className="Operator">
      <div>
        <button className="challengeme" onClick={generateProblem}>
          Challenge me!
        </button>
      </div>
      <div className="problem">{problem}</div>
      <div>
        <button
          className="showme"
          onClick={() => {
            setDisplayStyle({ display: "block" });
          }}
        >
          Show me the solution!
        </button>
        <p className="solutionis" style={displayStyle}>
          The solution is: {solution}
        </p>
      </div>
      <div className="range">
        <label>Range 1</label>
        <input
          type="number"
          name="r1"
          value={range1}
          onChange={(e) => {
            setRange1(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Range 2</label>
        <input
          type="number"
          name="r2"
          value={range2}
          onChange={(e) => {
            setRange2(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Multiply;
