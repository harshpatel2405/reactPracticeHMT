/*
Show / Hide Password 🔒

Create a password input with a Show/Hide button.

Requirements
    Password should be hidden initially.
    Clicking Show displays the password.
    Clicking Hide masks it again.
Example
Password : ********
[Show]

After Click

Password : myPassword123
[Hide]
*/

import React, { useState } from "react";

const UseStateDemo3 = () => {
  const password = "Harsh123";

  const [show, setshow] = useState(true);

  const getData = () => {
    setshow(!show);
  };

  return (
    <div>
    
       <center> 
        <h1>Password : {show ? password : "********"}</h1>
        <button onClick={getData}>

          {show ? (
            <img
              src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
              width="50"
              height="50"
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/128/2767/2767146.png"
              width="50"
              height="50"
            />
          )}
        </button>
     </center>
    </div>
  );
};

export default UseStateDemo3;
