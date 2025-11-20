import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((u) => u.email === user.email);

    if (userExists) {
      alert("User already exists! Please login.");
      navigate("/login");
      return;
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <>
      <form onSubmit={handleSignup}>

        <input
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          required
        />

        <input
          type={show ? "text" : "password"}
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          required
        />

        <button type="button" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>

        <button type="submit">Signup</button>

      </form>

      <p>
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Login</span>
      </p>
    </>
  );
};

export default Signup;
