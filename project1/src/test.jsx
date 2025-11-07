import React, { useState } from "react";

const EmployeeCards = () => {
  const [search, setSearch] = useState("");

  const employees = [
    { id: 1, name: "John Doe", department: "Engineering", count: 5 },
    { id: 2, name: "Jane Smith", department: "Marketing", count: 0 },
    { id: 3, name: "Michael Brown", department: "Design", count: 2 },
    { id: 4, name: "Sarah Lee", department: "Engineering", count: 8 },
  ];


  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Filter/Search Input */}
      <input
        type="text"
        placeholder="Search by name or department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-6 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (
            <div
              key={emp.id}
              className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold text-blue-600 mb-2">
                {emp.department}
              </h2>

              <p className="text-gray-700 text-sm">
                <strong>Name:</strong> {emp.name}
              </p>

              <p className="text-gray-600 text-sm">
                <strong>Department:</strong> {emp.department}
              </p>

              {emp.count > 0 ? (
                <p className="text-gray-800 text-sm mt-2">
                  <strong>Count:</strong> {emp.count}+
                </p>
              ) : (
                <p className="text-red-500 font-semibold text-sm mt-2">
                  No data yet
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No matching employees found.
          </p>
        )}
      </div>
    </div>
  );
};

export default EmployeeCards;
