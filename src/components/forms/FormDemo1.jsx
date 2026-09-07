import React, { useState } from "react";

const FormDemo1 = () => {
//   let name = "";
  const[name , setname] = useState('')
  const handlechange = (e) => {
    setname(e.target.value)
  };

  return (
    <div>
      <h1>Form Demo 1</h1>

      <form>
        <label>Name : </label>
        <input type="text" onChange={handlechange} />
        {/* <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        /> */}

        <h3>Hello, {name}</h3>
        {/* <button>Submit</button> */}
      </form>
    </div>
  );
};

export default FormDemo1;


// User Type->  onchange -> e.target.value -> setname -> state change -> re-render