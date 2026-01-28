import React, { createContext, useEffect, useState } from "react";
import { getData, postData, updateData, deleteData } from "./API/api";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  const fetchData = async () => {
    const data = await getData();
    setRecords(data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addRecord = async (data) => {
    await postData(data);
    fetchData();
  };

  const updateRecord = async (id, data) => {
    await updateData(id, data);
    fetchData();
  };

  const removeRecord = async (id) => {
    await deleteData(id);
    fetchData();
  };

  return (
    <DataContext.Provider
      value={{ records, addRecord, updateRecord, removeRecord }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
