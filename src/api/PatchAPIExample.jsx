import api from "./axiosInstance.js";

const PatchAPIExample = () => {
  const getUser = async () => {
    const response = await api.get("/admin/dashboard");
    console.log("Response : ", response);
    console.log("Response Status : ", response.status);
    console.log("Response Data : ", response.data);
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={getUser}
          className="btn btn-danger"
          style={{ padding: "10px 20px" }}
        >
          Click To Delete User
        </button>
      </div>
    </div>
  );
};

export default PatchAPIExample;
json dummy api for get 
json dummy api for post 
json dummy api for patch 
json dummy api for put
json dummy api for delete