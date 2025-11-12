import React, { useState } from 'react';
import axios from 'axios';

const Investorform = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const API_URL = import.meta.env.VITE_INVESTORS_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
     alert("User added successfully!");
     setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    try {
      const result = await axios.get(API_URL);
      setUsers(result.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
      <button onClick={fetchUsers}>click me</button>

      {users.map((user) => (
        <p key={user.id}>
          {user.email} {user.name}
        </p>
      ))}

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='enter name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='email'
            placeholder='enter email'
            value={formData.email}
            onChange={handleChange}
          />
          <button type='submit'>click me</button>
        </form>
      </div>
    </>
  );
};

export default Investorform;
