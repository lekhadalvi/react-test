import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Both_method = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const URL = "http://localhost:5000/users";

  const fetchUsers = async () => {
    try {
      const result = await axios.get(URL);
      setUsers(result.data);
    } catch (e) {
      console.log("error", e);
    }
  };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, formData);
      setFormData({ name: "", email: "" });
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={fetchUsers} className="mb-4 p-2 bg-blue-500 text-white rounded">Load Users</button>

      {users.map((user) => (
        <p key={user.id}>{user.name} - {user.email}</p>
      ))}

      <div className="mt-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-green-500 p-2 text-white rounded">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Both_method;

