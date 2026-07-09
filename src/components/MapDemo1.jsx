import React from "react";

const MapDemo1 = () => {
  const users = [
    "Pooja",
    "Vidhi",
    "Naiya",
    "Simran",
    "Misbah",
    "Thalapathy",
    "Kingfisher",
    "Anfal",
  ];

  return <>
    {/* {
        users.map((user) =>{
            console.log(user)
        })
    } */}
    {
        users.map((user,index) =>{
            return <ul key={index}>
                <li>{user}</li>
            </ul>
        })
    }
  
  </>;
};

export default MapDemo1;
