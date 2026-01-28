import { useState } from "react";
import Dashboard from "./Dashboard";
import Dash from "./Dash";

const DashboardSelector = ({ onLogout }) => {
 
  const [selected, setSelected] = useState("dash");

  return (
    <div className="p-6 ">
     
      <div className="flex justify-between items-center p-4 mb-6">
        <div className="text-xl font-semibold">Choose Dashboard</div>
   <button
          onClick={onLogout}
          className="px-4 py-2  bg-[#FFEC9B] text-black rounded-lg"
        >
          Sign Out
        </button>
      </div>

      <div className="flex gap-8 ">
     
        <div className="w-[25%] flex flex-col gap-4 bg-[#FFFCF0] min-h-screen ">


          <button
            onClick={() => setSelected("dash")}
            className={`px-6 py-3 rounded-xl border text-center ${
              selected === "dash"
                ? "bg-[#FFEC9B] text-black font-bold"
                : "bg-white font-medium"
            }`}
          >
            Dashboard
          </button>
                    <button
            onClick={() => setSelected("dashboard")}
            className={`px-6 py-3 rounded-xl border text-center ${
              selected === "dashboard"
                ? "bg-[#FFEC9B] text-black font-bold"
                : "bg-white font-medium"
            }`}
          >
            Dashboard Edit
          </button>
              
        </div>

        <div className="flex-1 rounded-xl p-6">
           {selected === "dash" && (
            <Dash onLogout={onLogout} />
          )}
          {selected === "dashboard" && (
            <Dashboard onLogout={onLogout} />
          )}

        </div>
      </div>
    </div>
  );
};

export default DashboardSelector;
