import axios from "axios";

const PostAPIExample = () => {
  const postData = async () => {
    let email = prompt("Enter mail");
    let name = prompt("Enter name");
    let gender = prompt("Enter gender");
    let password = prompt("Enter password");
    let body = {
      email: email,
      name: name,
      gender: gender,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/user/signup",
        body,
      );
      console.log("Response : ", response);
      console.log("Response Status : ", response.status);

      if (response.status == 201) {
        console.log("Post Data done successfully");
      }
    } catch (error) {
      console.log("Error : ", error);
      console.log("Error Message: ", error.message);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={postData}
          className="btn btn-primary"
          style={{ padding: "10px 20px" }}
        >
          Click To post data
        </button>
      </div>
    </div>
  );
};

export default PostAPIExample;
