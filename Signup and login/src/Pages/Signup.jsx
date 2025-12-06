import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some((u) => u.email === form.email);
    if (exists) {
      alert("User already exists! Please login.");
      return navigate("/login");
    }
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    setForm({ email: "", password: "" });

    navigate("/login");
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2 className="title">Signup</h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="btn-primary" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
