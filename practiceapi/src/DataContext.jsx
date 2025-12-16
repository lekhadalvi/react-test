import { createContext, useState } from "react";
import { getData, postData, updateData, deleteData } from "./API/Api";
import { toast } from "react-toastify";

export const Contextdata = createContext();

const DataContext = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await getData();
      setData(res);
    } catch {
      toast.error("Fetch failed");
    }
  };

  const adddata = async (formdata) => {
    try {
      await postData(formdata);
      toast.success("Data submitted");
      fetchdata();
      return true;
    } catch {
      toast.error("Submission failed");
      return false;
    }
  };

  const updateDataById = async (id, updated) => {
    try {
      await updateData(id, updated);
      toast.success("Data updated");
      fetchdata();
    } catch {
      toast.error("Update failed");
    }
  };

  const removeData = async (id) => {
    try {
      await deleteData(id);
      toast.success("Data deleted");
      fetchdata();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <Contextdata.Provider
      value={{
        data,
        fetchdata,
        adddata,
        updateDataById,
        removeData,
      }}
    >
      {children}
    </Contextdata.Provider>
  );
};

export default DataContext;
