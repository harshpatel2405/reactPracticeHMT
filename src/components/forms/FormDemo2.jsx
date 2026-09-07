import React, { useState } from "react";

const FormDemo2 = () => {
  const [search, setSearch] = useState("");
  const [status,  setStatus] = useState("Fail")

  const data = [
    { id: 1, name: "Harsh", age: 21, marks: 95 },
    { id: 2, name: "Vasu", age: 22, marks: 96 },
    { id: 3, name: "Dev", age: 23, marks: 75 },
    { id: 4, name: "Shyam", age: 24, marks: 64 },
    { id: 5, name: "Shiva", age: 25, marks: 41 },
  ];

  const filteredStudents = data.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div>
      <h1>Form Demo 2</h1>

      <form>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Enter name to search"
        />
      </form>

      <table border="1" className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDemo2;
