/*
Image , Name , Occupation , Height , Weight , (BMI) , Age
*/

import React from "react";
import './User.css'

const UsersProfileCard = (props) => {

    let BMI ;

    function calculateBMI()
    {
       BMI =( props.data.weight  )/ (props.data.height / 100 * props.data.height / 100);
       console.log(BMI)
    }

  return (
    <div className="flexing">
      <div className="card">
        <img src= {props.data.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name : {props.data.name}</h5>
          <p className="card-title">
          Age : {props.data.age}
          </p>
          <p className="card-title">
          Occupation : {props.data.occupation}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Height : {props.data.height} cm</li>
          <li className="list-group-item">Weight : {props.data.weight} kg</li>
          <li className="list-group-item">BMI : {calculateBMI()}{BMI}  </li>
        </ul>
      </div>
    </div>
  );
};

export default UsersProfileCard;
