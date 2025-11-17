import { useEffect, useState } from "react";
import axios from "axios";

const InvestorsList = () => {
  const [investors, setInvestors] = useState([]);
  const [filter, setFilter] = useState("all");
  const API_URL = import.meta.env.VITE_INVESTORS_URL;
  const fetchInvestors = async () => {
    try {
      const response = await axios.get(API_URL);
      setInvestors(response.data);
    } catch (error) {
      console.error("Error fetching investors:", error);
    }
  };
  // useEffect(() => {}, []);

  const filteredInvestors =
    filter === "all"
      ? investors
      : investors.filter((inv) => String(inv.active).toLowerCase() === filter);

  console.log(filteredInvestors);

  const downloadCSV = () => {
    const csvData = [
      ["Name", "Email", "Phone"],
      ...filteredInvestors.map((i) => [i.name, i.email, i.phone]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvData], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "investors.csv";
    link.click();
  };

  return (
    <>
      <h1>Investor List</h1>

      <label>Filter by Active:</label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>

      <button onClick={downloadCSV} style={{ marginLeft: "10px" }}>
        Download CSV
      </button>
      <button onClick={fetchInvestors}>investor list </button>
      <table border="1" cellPadding="5" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvestors.length > 0 ? (
            filteredInvestors.map((inv) => (
              <tr key={inv.id}>
                <td>{inv.name}</td>
                <td>{inv.email}</td>
                <td>{inv.phone}</td>
                <td>{inv.active ? inv.active : "not found"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default InvestorsList;
