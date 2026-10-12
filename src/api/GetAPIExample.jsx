import axios from "axios";
import { useState } from "react";

const GetAPIExample = () => {
  const [user, setUsers] = useState([]);
  const [dataPresent, setdataPresent] = useState(false);

  const getAllUsers = async () => {
    let path = "http://localhost:5000/user/getUser";

    const response = await axios.get(path);
    console.log("Response : ", response);
    console.log("Response Status: ", response.status);
    console.log("Response.data ", response.data);

    setUsers(response.data);
    setdataPresent(true);
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={getAllUsers}
          className="btn btn-success"
          style={{ padding: "10px 20px" }}
        >
          Click To Get All Users
        </button>
      </div>

      {dataPresent && (
        <table
          className="table table-bordered"
          style={{ width: "50%", margin: "0 auto" }}
        >
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>

          <tbody>
            {user.map((u) => (
              <tr key={u._id}>
                <td>{u._id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetAPIExample;
