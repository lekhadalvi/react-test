import { useContext } from "react";
import { DataContext } from "./DataContext";
import { useNavigate } from "react-router-dom";

const Dash = ({ onLogout }) => {
  const { records } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    onLogout && onLogout();
    navigate("/dashboard");
  };

  return (
    <div className="p-6 ">
   
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold">Dashboard</div>
        {/* <button
          onClick={handleLogout}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Sign Out
        </button> */}
      </div>

      {records.length === 0 ? (
        <p>No records found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-3">
                <div className="font-semibold text-lg">
                  {item.fullName}
                </div>
                <div className="text-sm text-gray-500">
                  {item.email}
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <div>
                  <span className="font-medium">Role:</span>{" "}
                  {item.role}
                </div>
                <div>
                  <span className="font-medium">Phone:</span>{" "}
                  {item.phone}
                </div>
                <div>
                  <span className="font-medium">Budget:</span>{" "}
                  {item.budget}
                </div>
                <div>
                  <span className="font-medium">Hires:</span>{" "}
                  {item.hires}
                </div>
                <div>
                  <span className="font-medium">Persona:</span>{" "}
                  {item.persona}
                </div>
              </div>

              <div className="mt-3 text-sm text-gray-600">
                <span className="font-medium">Additional Info:</span>
                <div className="mt-1">
                  {item.additionalInfo || "-"}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dash;
