/*
1. Toggle Light/Dark Mode ⭐
Create a button that switches between Light Mode and Dark Mode.
Requirements
    Initial mode: Light
    Button text:
    "Dark Mode" when light theme is active
    "Light Mode" when dark theme is active
    Change:
    Background color
    Text color

Example

Before

Background : White
Text : Black
Button : Dark Mode

Click Button

Background : Black
Text : White
Button : Light Mode
*/

import React, { useState } from "react";
import './useState.css'

const UseStateDemo4 = () => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div>
      <div className={theme ? "light-theme" : "dark-theme"}>
        <button onClick={changeTheme} className="btn btn-primary">
          {theme ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default UseStateDemo4;
