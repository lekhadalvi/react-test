import { useContext } from "react";
import { DataContext } from "./DataContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { records, removeRecord } = useContext(DataContext);

  return (
    <div style={{ padding: 40 }}>
      <h2>Dashboard</h2>

      {records.length === 0 ? (
        <p>No records found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item) => (
              <tr key={item.id}>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/edit/${item.id}`}>Edit</Link>{" "}
                  <button onClick={() => removeRecord(item.id)}>
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
