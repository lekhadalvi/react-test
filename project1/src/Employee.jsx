import React, { useState } from 'react'

const Employee = () => {
  const [input, setInput] = useState("");

  const employees = [
    { id: 1, name: "John Doe", dept_name: "Engineering", department_id: 101, emp_count: 5 },
    { id: 2, name: "Jane Smith", dept_name: "Marketing", department_id: 102, emp_count: 0 },
    { id: 3, name: "Michael Brown", dept_name: "Design", department_id: 103, emp_count: 2 },
    { id: 4, name: "Sarah Lee", dept_name: "Engineering", department_id: 101, emp_count: 8 },
  ];

  const result = employees.filter((item) =>
  item.dept_name.toLowerCase().includes(input.toLowerCase()) ||
  item.name.toLowerCase().includes(input.toLowerCase()) ||
  item.department_id.toString().includes(input) ||
  item.emp_count.toString().includes(input)
);

const sortedresult = result.sort((a, b) =>
  a.dept_name.localeCompare(b.dept_name)
);
 
  

  return (
    <>
      <div className='text-center text-2xl font-bold '>Employee</div>
      <div className='flex justify-center items-center pt-6'>
        <input type="text" 
        placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>
        { sortedresult.length >0 ?( sortedresult.map((item, index) => (
            
          <div key={index} className=' rounded pt-4 pb-4 pr-2 pl-2 grid gap-3'>
            <h1 className='text-xl font-bold text-center pb-4'>{item.dept_name}</h1>
            <p>Name : {item.name}</p>
            <p>Department Name : {item.dept_name}</p>
            <p>Department Id : {item.department_id}</p>
            <p className={item.emp_count===0 ? "text-red":""}>
                Employee Count : {item.emp_count === 0 ? "no data yet" : `${item.emp_count }+`}
                </p>
          </div>
        ))):( 
            <p className='text-red-500 text-center font-bold text-3xl'>No Data Found</p>
        )}
      </div>
    </>
  );
}

export default Employee;
