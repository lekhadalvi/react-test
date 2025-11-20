import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("sessionUser");
   if (!sessionUser) {
      alert("Please login first!");
      navigate("/login");
      return;
    }
 setUser(JSON.parse(sessionUser));  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("sessionUser");
    navigate("/login");  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      {user && <h2>Welcome, {user.name}</h2>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
