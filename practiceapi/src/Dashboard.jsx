import { useContext } from "react";
import { DataContext } from "./DataContext";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = ({ onLogout }) => {
  const { records, removeRecord } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    onLogout && onLogout();
    navigate("/dashboard");
  };

  return (
    <div className="p-6">
  
      <div className="flex justify-between mb-6">
        <div className="text-xl font-semibold">Submissions</div>
 
      </div>

      {records.length === 0 ? (
        <p>No records found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
          {records.map((item) => (
  <div
    // key={item.id}
    className="bg-[#FEF2C3] border rounded-2xl p-6 shadow-sm"
  >
    <div className="">
   
 <div className="flex  flex-col gap-2 py-4 px-2">
       <div className="flex gap-4">
        <span className="bg-white px-3 py-1 rounded-lg text-sm font-medium">
          Full Name
        </span>
        <span className="text-sm font-medium">{item.fullName}</span>
      </div>

      <div className="">
        <span className="bg-white px-3 py-1 rounded-lg text-sm font-medium">
          Email
        </span>
        <span className="text-sm">{item.email}</span>
      </div>

      <div className="flex gap-4">
        <span className="bg-white px-3 py-1 rounded-lg text-sm font-medium">
          Phone
        </span>
        <span className="text-sm">{item.phone}</span>
      </div>

    
      <div className="flex gap-4">
        <span className="bg-white px-3 py-1 rounded-lg text-sm font-medium">
          Role
        </span>
        <span className="text-sm">{item.role}</span>
      </div>

      
      <div className="flex gap-4">
        <span className="bg-white px-3 py-1 rounded-lg text-sm font-medium">
          Budget
        </span>
        <span className="text-sm">{item.budget}</span>
      </div>

      <div className="flex gap-4">
        <span className="bg-white px-3 py-1 rounded-lg text-sm font-medium">
          Hires
        </span>
        <span className="text-sm">{item.hires}</span>
      </div>

      <div className="flex gap-4">
        <span className="bg-white px-3 py-1 rounded-lg text-sm font-medium">
          Persona
        </span>
        <span className="text-sm">{item.persona}</span>
      </div>

      <div className="flex items-start gap-4">
        <span className="bg-white px-3 py-1 rounded-lg text-sm font-medium">
          Additional Info
        </span>
        <span className="text-sm leading-relaxed">
          {item.additionalInfo }
        </span>
      </div>
 </div>

      <div className="pt-4 flex justify-between ">
        <Link
          to={`/edit/${item.id}`}
          className=" text-sm border px-4 py-2 rounded font-medium bg-black text-white"
        >
          Edit
        </Link>

        <button
          onClick={() => removeRecord(item.id)}
          className=" text-sm px-4 py-2 rounded font-medium bg-black text-white"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
))}

        </div>
      )}
    </div>
  );
};

export default Dashboard;
