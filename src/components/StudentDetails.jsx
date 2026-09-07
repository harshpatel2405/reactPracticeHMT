import React from "react";
import "./studentDetails.css";

const StudentDetails = () => {
  const data = {
    name: "Harsh",
    age: 22,
    education: {
      school: "XYZ School",
      per10: 85,
      per12: 86,
    },
    address: {
      area: "ABC",
      city: "Ahmedabad",
      pincode: 380063,
    },
    currentPursuing: "B.Tech (IT)",
    img: "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
  };

  return (
    <div className="container">
      <div className="card">
        <img
          src={data.img}
          alt={data.name}
          className="profile-img"
        />

        <h1>{data.name}</h1>
        <h3>Age : {data.age}</h3>
        <h3>Currently Pursuing : {data.currentPursuing}</h3>

        <table>
          <thead>
            <tr>
              <th>School</th>
              <th>10th %</th>
              <th>12th %</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{data.education.school}</td>
              <td>{data.education.per10}%</td>
              <td>{data.education.per12}%</td>
            </tr>
          </tbody>
        </table>

        <div className="address">
          <h3>Address</h3>

          <p>
            <strong>Area :</strong> {data.address.area}
          </p>

          <p>
            <strong>City :</strong> {data.address.city}
          </p>

          <p>
            <strong>Pincode :</strong> {data.address.pincode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;