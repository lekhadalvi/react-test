import { useContext, useEffect } from "react";
import { Contextdata } from "./DataContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { data, fetchdata, removeData } = useContext(Contextdata);

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {data.length === 0 ? (
        <p>No data found</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.fullname}</td>
                <td className="border p-2">{item.email}</td>
                <td className="border p-2 flex gap-2">
                  <Link
                    to={`/edit/${item.id}`}
                    className="text-blue-600 underline"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => removeData(item.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
