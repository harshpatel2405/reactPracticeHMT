import axios from "axios";
import React, { useState } from "react";

const GetDataApi = () => {
   const [isLoading , setLoading] = useState(true);

    const [users , setUsers] = useState([])

  const callApi = async () => {
    // const path = "https://jsonplaceholder.typicode.com/posts";
    const path = "https://dummyjson.com/quotes";

    const response = await axios.get(path);

    console.log(response.data.quotes)
    console.log(response.status)
3
    setUsers(response.data.quotes);
    setLoading(false);
  };

  return <div>

  <button onClick={callApi}>Get Data</button>


  {
    isLoading == true ? (
        <h1>Loading ......</h1>
    ) : (<table className="table table-dark"> 
        <tr>
            {/* <th>User ID</th>
            <th>id</th>
            <th>Title</th>
            <th>Body</th> */}
            <th>Id</th>
            <th>Quote</th>
            <th>Author</th>
        </tr>
        {
            users.map((user) => {
                return ( <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.quote}</td>
                <td>{user.author}</td>
                {/* <td>{user.userId}</td>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td> */}
            </tr>)
            }
        )
    }
        </table>
    )
  }

  </div>;
};

export default GetDataApi;
