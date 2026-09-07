import React, { useEffect, useState } from "react";
import "./loader.css";

const UseEffectDemo3 = () => {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setloading(true);

    setTimeout(() => {
      const students = [
        {
          id: 1,
          name: "harsh",
          age: 22,
          email: "harsh@example.com",
        },
        {
          id: 2,
          name: "vasu",
          age: 23,
          email: "vasu@example.com",
        },
        {
          id: 3,
          name: "dev",
          age: 19,
          email: "dev@example.com",
        },
        {
          id: 4,
          name: "sujal",
          age: 24,
          email: "sujal@example.com",
        },
      ];

      setData(students);
      setloading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>data</h1>

      {loading ? (
         <div className="loader-container">
        <div className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-title">Status</div>
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>
          <div className="text">Loading...</div>
        </div>
        </div>
      ) : (
        <table className="table table-dark">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.age}</td>
                <td>{d.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UseEffectDemo3;
