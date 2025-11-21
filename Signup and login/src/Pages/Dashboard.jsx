import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("sessionUser"));

  const logout = () => {
    sessionStorage.removeItem("sessionUser");
    navigate("/login");
  };

  return (
    <div className="page-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Welcome, {user?.name}!</h1>
        <p className="dashboard-email"><strong>Email:</strong> {user?.email}</p>

        <button className="btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
