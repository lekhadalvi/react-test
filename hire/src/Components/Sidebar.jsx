import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col gap-4">
 <div className="text-2xl font-bold mb-8">Logo</div>
 <Link to="/dashboard" className="hover:text-blue-500">
   Dashboard
 </Link>
    </div>
  );
};

export default Sidebar;
