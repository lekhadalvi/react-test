import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthGate = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "admin" && password === "1234") {
      localStorage.setItem("isAuth", "true"); 
      onSuccess();
    } else {
      navigate("/thank");
    }
  };

  return (
    <div className="flex items-center flex-col  p-10 ">
      <div className="border rounded-2xl p-10">
        <h2 className="text-2xl p-4 ">Login to Dashboard</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-8">
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 rounded "
        />
        

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           className="border px-2 rounded"
        />
       

        <button type="submit" className="border rounded-2xl">Login</button>
      </form>
      </div>
    </div>
  );
};

export default AuthGate;
