/*
Character Counter : Number of characters entered by the user
*/

import React, { useState } from "react";

const UseStateDemo5 = () => {
  const [text, setText] = useState("");
  const[upper,setUpper] = useState(0)
  const[lower,setLower] = useState(0)
  const[space,setSpace] = useState(0)

  
  const counter = (e) => {
      let lc = 0;
      let uc = 0;
      let sc = 0;
    const value = e.target.value;
    setText(value);

    for (let i of value) {
      if (i >= "A" && i <= "Z") uc++;
      else if (i >= "a" && i <= "z") lc++;
      else if(i == ' ') sc++
    }

    setUpper(uc);
    setLower(lc);
    setSpace(sc);
  };
  return (
    <div>
      <textarea placeholder="Type something" onChange={counter} value={text}></textarea>

      <h3>Length : {text.length}</h3>
      <h3>Capital Characters : {upper}</h3>
      <h3>Lowercase Characters : {lower}</h3>
      <h3>Space : {space}</h3>
    </div>
  );
};

export default UseStateDemo5;
