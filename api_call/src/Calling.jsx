import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Calling() {
  const [users, setUsers] = useState([]);

  const notifySuccess = (msg = "Data fetched") =>
    toast(msg, {
      className: "!bg-green-600 !text-white",
      progressClassName: "!bg-green-500",
    });

  const notifyError = (msg = "Failed to fetch") =>
    toast(msg, {
      className: "!bg-red-600 !text-white",
      progressClassName: "!bg-red-400",
    });

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      notifySuccess();
    } catch (e) {
      console.error(e);
      notifyError(e.message);
    }
  };

  return (
    <>
      <h2>Calling</h2>

      <button onClick={getData}>click</button>

      {users.length > 0 ? (
        users.map((item) => (
          <React.Fragment key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.id}</p>
          </React.Fragment>
        ))
      ) : (
        <p>not found</p>
      )}

      <ToastContainer />
    </>
  );
}

export default Calling;
