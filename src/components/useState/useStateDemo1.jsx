import React, { useState } from "react";

const useStateDemo1 = () => {
  const [count, setcount] = useState(0);

  function IncrementValue() {
    setcount(count + 1);
  }
  function DecrementValue() {
    setcount(count - 1);
  }
  function ResetValue() {
    setcount(0);
  }

  return (
    <div>
      <center>
        <h1>Use State Demo 1</h1>
     
      <h1>Count : {count}</h1>
      <button onClick={IncrementValue} className="btn btn-primary">
        Increment
      </button>
      <button onClick={DecrementValue} className="btn btn-primary">
        Decrement
      </button>
      <button onClick={ResetValue} className="btn btn-primary">
        Reset
      </button>
       </center>
    </div>
  );
};

export default useStateDemo1;


// onclick 
// function 
// useState