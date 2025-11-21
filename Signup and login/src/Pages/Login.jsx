import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!found) {
      alert("Invalid credentials!");
      return;
    }
    sessionStorage.setItem("sessionUser", JSON.stringify(found));
    setForm({ email: "", password: "" });
    navigate("/dashboard");
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2 className="title">Login</h2>

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

          <button className="btn-primary" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
