import React, { useEffect } from "react";

const UseEffectDemo1 = () => {
  useEffect(() => {
    console.log("React has rendered and use Effect has been called...");
  });
  return (
    <div>
      <h1>UseEffect Demo 1 </h1>
    </div>
  );
};

export default UseEffectDemo1;
