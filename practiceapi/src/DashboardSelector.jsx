import { useState } from "react";
import Dashboard from "./Dashboard";
import Dash from "./Dash";

const DashboardSelector = ({ onLogout }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 ">
 
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold">
          Choose Dashboard
        </div>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Sign Out
        </button>
      </div>

   
      <div className="flex gap-4 mb-8 flex-col w-[30%]">
        <button
          onClick={() => setSelected("dashboard")}
          className={`px-6 py-3 rounded-xl border ${
            selected === "dashboard"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Dashboard
        </button>

        <button
          onClick={() => setSelected("dash")}
          className={`px-6 py-3 rounded-xl border ${
            selected === "dash"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Dash
        </button>
      </div>

     
      {selected === "dashboard" && <Dashboard onLogout={onLogout} />}
      {selected === "dash" && <Dash onLogout={onLogout} />}

      {!selected && (
        <div className="text-gray-500">
          Please select a dashboard to continue.
        </div>
      )}
    </div>
  );
};

export default DashboardSelector;
