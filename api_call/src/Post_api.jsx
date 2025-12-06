import React, { useState } from "react";
import axios from "axios";

const PostUser = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const resp = await axios.post("http://localhost:5000/users", formData);
      console.log("User added:", resp.data);
      setMessage("User added successfully!");
      setFormData({ id: "", name: "", email: "", password: "" });
    } catch (error) {
      console.error("Error adding user:", error);
      setMessage("Error adding user!");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <input
          type="text"
          name="id"
          placeholder="Enter ID"
          value={formData.id}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded mt-2"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

export default PostUser;
