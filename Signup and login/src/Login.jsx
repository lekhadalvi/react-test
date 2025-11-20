import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUser = users.find((u) => u.email === email && u.password === password);
    if (!isUser) {
      alert("User not found");
      navigate("/");
      return;}
    sessionStorage.setItem("sessionUser", JSON.stringify(isUser));
    alert("Login successful");
    navigate("/dashboard");};

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required/>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
