function Counter(props) {
  const { counter, setCounter, conditionCounter, setConditionCounter } = props;

  return (
    <div className="Counter flex">
      <div className="count">Your Score: {counter}</div>
      <button
        className="plus"
        onClick={() => {
          setCounter(counter + 1);
          setConditionCounter(conditionCounter + 1);
        }}
      >
        Plus
      </button>
      <button
        className="clear"
        onClick={() => {
          setCounter(0);
          setConditionCounter(0);
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default Counter;
