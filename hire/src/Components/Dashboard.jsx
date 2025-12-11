import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import EditCard from "./EditCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { records, removeRecord } = useContext(DataContext);
  const [editId, setEditId] = useState(null);

  return (
    <div className="flex">

 <div className="w-60 bg-[#faf7ef] h-screen p-6 shadow-md fixed left-0 top-0">
   <Link className="block bg-yellow-400 p-2 rounded text-center" to="/dashboard">
Dashboard
   </Link>
 </div>

 <div className="ml-60 p-10 h-[50%]">
   <h1 className="text-3xl font-bold mb-5">All Submissions</h1>

   {records.length === 0 ? (
<p>No entries yet.</p>
   ) : (
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {records.map((item) => (
    <div key={item.id} className="bg-yellow-100 p-5 rounded shadow ">

    
 {editId === item.id ? (
   <EditCard item={item} close={() => setEditId(null)} />
 ) : (
   <>
 
<div className="gap-6">
  <p  ><b className="bg-white gap-6 ">
  Name</b> {item.fullName}
  </p>
<p><b className="bg-white gap-6">Phone
  </b> {item.phone}</p>
<p><b className="bg-white">Email</b> {item.email}</p>
<p><b className="bg-white">Role</b> {item.role}</p>
<p><b className="bg-white">Budget</b>
{item.budget}</p>
<p><b className="bg-white">Talents</b>
 {item.talents}</p>
<p><b className="bg-white">Persona</b> {item.persona}</p>
<p><b className="bg-white">INFO</b> {item.additionalInfo}</p>
<div className="flex gap-2 mt-4">
  <button
    onClick={() => setEditId(item.id)}
    className="bg-black text-white px-3 py-2 rounded w-full"
  >
    Edit
  </button>

  <button
    onClick={() => removeRecord(item.id)}
    className="bg-black text-white px-3 py-2 rounded w-full"
  >
    Delete
  </button>
</div>
</div>
   </>
 )}

    </div>
  ))}
</div>
   )}
 </div>
    </div>
  );
};

export default Dashboard;
