import axios from "axios";

const DeleteAPIExample = () => {
  const deleteUser = async () => {
    let email = prompt("Enter email ");
    let path = `http://localhost:5000/admin/userDelete/${email}`;

    try {
      const response = await axios.delete(path);

      console.log("Response : ", response);
      console.log("Response Status : ", response.status);
      console.log("Response Mesasage : ", response.data.message);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={deleteUser}
          className="btn btn-danger"
          style={{ padding: "10px 20px" }}
        >
          Click To Delete User
        </button>
      </div>
    </div>
  );
};

export default DeleteAPIExample;
