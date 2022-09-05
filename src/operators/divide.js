import { useState } from "react";

function Divide() {
  const generateProblem = () => {
    let firstRandom = Math.floor(1 + Math.random() * range1);
    let secondRandom = Math.floor(1 + Math.random() * range2);

    setProblem(`${firstRandom} / ${secondRandom} = ?`);

    let result = firstRandom / secondRandom;

    setSolution(result.toFixed(2));

    setDisplayStyle({ display: "none" });
    setShowPercent({
      display: "none",
    });
  };

  const [problem, setProblem] = useState(
    "Ready for a division problem Evrard?"
  );

  const [solution, setSolution] = useState(null);

  const [range1, setRange1] = useState(100);
  const [range2, setRange2] = useState(100);

  const [displayStyle, setDisplayStyle] = useState({ display: "none" });
  const [showPercent, setShowPercent] = useState({ display: "none" });

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
        <div style={displayStyle}>
          <p className="solutionis">The solution is: {solution}</p>
          <br />
          <br />
          <p className="inpercent">But what is the solution in %?</p>
          <button
            onClick={() => {
              setShowPercent({
                display: "block",
                fontWeight: "bolder",
                fontSize: "1rem",
              });
            }}
          >
            Show me in percent %
          </button>
          <p style={showPercent}>
            {" "}
            {`The solution in percent is: ${(solution * 100).toFixed(1)}%`}
          </p>
        </div>
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

export default Divide;
