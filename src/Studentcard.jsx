import React from "react";

const Studentcard = (props) => {
  return (
    <div>
      <h1>Student Card Page</h1>
      <b>Name : {props.name}</b><br></br>
      <b>Age : {props.age}</b>
    </div>
  );
};

export default Studentcard;
