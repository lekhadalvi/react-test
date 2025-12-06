import { Link, useNavigate } from "react-router-dom";
import "./../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("sessionUser");

  const logout = () => {
    sessionStorage.removeItem("sessionUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>MyApp</Link>
        </h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout} className="btn-logout">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
