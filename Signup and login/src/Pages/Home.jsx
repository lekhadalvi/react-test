import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const Home = () => {
  return (
    <div className="home-hero">
      <div className="home-card">
        <h1>Welcome to MyApp</h1>
        <p>A small, clean authentication demo — login or create an account to continue.</p>

        <div style={{ marginTop: 18 }}>
          <Link to="/login" className="btn-primary small">Login</Link>
          <Link to="/signup" className="btn-outline small" style={{ marginLeft: 12 }}>Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
