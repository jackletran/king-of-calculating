import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(300000);
  const [timerStatus, setTimerStatus] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerStatus === true) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 10);
      }, 10);
    } else if (timerStatus === false) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerStatus]);

  return (
    <div className="Timer">
      <div className="time">
        <span>
          {time >= 0 && (
            <>
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
              {("0" + ((time / 10) % 100)).slice(-2)}
            </>
          )}
          {time < 0 && "GAME OVER"}
        </span>
      </div>
      {!timerStatus && time === 300000 && (
        <button
          className="timerControl start"
          onClick={() => setTimerStatus(true)}
        >
          Start
        </button>
      )}
      {timerStatus && (
        <button
          className="timerControl stop"
          onClick={() => setTimerStatus(false)}
        >
          Stop
        </button>
      )}
      {!timerStatus && time < 300000 && (
        <button
          className="timerControl resume"
          onClick={() => setTimerStatus(true)}
        >
          Resume
        </button>
      )}
      {!timerStatus && time < 300000 && (
        <button
          className="timerControl reset"
          onClick={() => {
            setTimerStatus(false);
            setTime(300000);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Timer;
