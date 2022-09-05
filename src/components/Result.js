function Result(props) {
  const { result } = props;
  return (
    <div className="Result">
      <div className="operand-1"></div>
      <div className="operand-2"></div>
      <div className="result">{result}</div>
    </div>
  );
}

export default Result;
