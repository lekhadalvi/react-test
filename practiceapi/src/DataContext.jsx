import React, { createContext, useState } from "react";
import { getdata, postdata, updatedata, deletedata } from "./API/Api";
import { toast } from "react-toastify";

export const Contextdata = createContext();

const DataContext = ({ children }) => {
  const [data, setdata] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await getdata();
      setdata(res);
    } catch (error) {
      toast.error("Fetch failed");
    }
  };


  const adddata = async (formdata) => {
    try {
      await postdata(formdata);
      toast.success("Data submitted");
      fetchdata();
      return true;
    } catch (error) {
      toast.error("Submission failed");
      return false;
    }
  };


  const updateData = async (id, updated) => {
    try {
      await updatedata(id, updated);
      toast.success("Data updated");
      fetchdata();
    } catch (error) {
      toast.error("Update failed");
    }
  };


  const removeData = async (id) => {
    try {
      await deletedata(id);
      toast.success("Data deleted");
      fetchdata();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <Contextdata.Provider
      value={{
        data,
        fetchdata,
        adddata,
        updateData,
        removeData,
      }}
    >
      {children}
    </Contextdata.Provider>
  );
};

export default DataContext;
