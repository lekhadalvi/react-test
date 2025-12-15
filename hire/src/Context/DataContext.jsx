import { createContext, useState, useEffect } from "react";
import { getData, postData, updateData, deleteData } from "../Api/Api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getData();
      setRecords(res || []);
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const addRecord = async (data) => {
    try {
      await postData(data);
      fetchData();
    } catch (err) {
      console.error("Failed to add record:", err);
    }
  };
  const updateRecord = async (id, data) => {
    try {
      await updateData(id, data);
      fetchData();
    } catch (err) {
      console.error("Failed to update record:", err);
    }
  };

  const removeRecord = async (id) => {
    try {
      await deleteData(id);
      fetchData();
    } catch (err) {
      console.error("Failed to delete record:", err);
    }
  };

  return (
    <DataContext.Provider
      value={{ records, fetchData, addRecord, updateRecord, removeRecord }}
    >
      {children}
    </DataContext.Provider>
  );
};
