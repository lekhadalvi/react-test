import { useContext, useEffect } from "react";
import { Contextdata } from "./DataContext";

const Dashboard = () => {
  const { data, fetchdata } = useContext(Contextdata);

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="p-6">
      {data.map((item) => (
        <div key={item.id} className="border p-4 mb-2">
          <p>{item.fullName}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
