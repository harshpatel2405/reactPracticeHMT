import React, { useState } from "react";
import "./useStateDemo1.css";

const UseStateDemo2 = () => {
  const [milliseconds, setmilliseconds] = useState(0);
  const [timer, settimer] = useState(null);

  function startTimer() {
    if (timer != null) return;
    const id = setInterval(() => setmilliseconds((t) => t + 10), 10);
    console.log(id);
    settimer(id);
    // setmilliseconds(milliseconds % 1000)
  }

  function stopTimer() {
    clearInterval(timer);
    settimer(null);
  }

  function resetTimer() {
    clearInterval(timer);
    settimer(null);
    setmilliseconds(0);
  }

  const ms = milliseconds % 1000;
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;

  return (
    <div>
      <center>
        <h1>Use State Demo 2</h1>
        <div className="container">
          <div className="item">
            <div className="box">{hours}</div>
            <div className="data">Hours</div>
          </div>

          <div className="item">
            <div className="box">{minutes}</div>
            <div className="data">Minutes</div>
          </div>

          <div className="item">
            <div className="box">{seconds}</div>
            <div className="data">Seconds</div>
          </div>

          <div className="item">
            <div className="box">{ms}</div>
            <div className="data">Milliseconds</div>
          </div>
        </div>

        <button onClick={startTimer} className="btn btn-success">
          Start
        </button>
        <button onClick={stopTimer} className="btn btn-warning">
          Stop
        </button>
        <button onClick={resetTimer} className="btn btn-danger">
          Reset
        </button>
      </center>
    </div>
  );
};

export default UseStateDemo2;
