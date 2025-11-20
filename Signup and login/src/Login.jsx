import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUser = users.find(
      (u) => u.email === login.email && u.password === login.password);
    if (!isUser) {
      alert("User not found! Please Signup.");
      navigate("/");
      return;
    }
  sessionStorage.setItem("sessionUser", JSON.stringify(isUser));
    alert("Login Successful!");
    navigate("/dashboard");
  };
  return (
   <>
   <form onSubmit={handleLogin}>
   <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />

        <input
          type={show ? "text" : "password"}
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          required
        />

        <button type="button" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>


        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <span onClick={() => navigate("/")}>Signup</span>
      </p>
   
   </>
  )
}

export default Login