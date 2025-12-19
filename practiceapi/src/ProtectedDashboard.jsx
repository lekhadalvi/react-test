import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthGate from "./AuthGate";
import DashboardSelector from "./DashboardSelector";

const ProtectedDashboard = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isAuth", "true");
    setIsAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    navigate("/"); // back to form
  };

  if (!isAuth) {
    return <AuthGate onSuccess={handleLogin} />;
  }

  return <DashboardSelector onLogout={handleLogout} />;
};

export default ProtectedDashboard;
