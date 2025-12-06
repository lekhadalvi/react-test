import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
=======
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import ProtectedRoute from "./Component/ProtectedRoutes";
>>>>>>> f098ba9451756c30e63a8fce8ed2051e112f685f

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
>>>>>>> f098ba9451756c30e63a8fce8ed2051e112f685f

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
