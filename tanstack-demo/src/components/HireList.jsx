import { useQuery } from "@tanstack/react-query";
import { fetchHires } from "../api/hireApi";

const HireList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["hires"],
    queryFn: fetchHires,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      <h2>Hire List</h2>

      {data.map((hire) => (
        <div key={hire.id} style={{ border: "1px solid gray", margin: 8, padding: 8 }}>
          <p><b>Name:</b> {hire.fullName}</p>
          <p><b>Email:</b> {hire.email}</p>
          <p><b>Role:</b> {hire.role}</p>
        </div>
      ))}
    </div>
  );
};

export default HireList;
