import api from "./apiURL";

export const getData = async () => {
  try {
    const res = await api.get("/");
    return res.data;
  } catch (err) {
    console.error("GET error:", err);
  }
};
export const postData = async (data) => {
  try {
    const res = await api.post("/", data);
    return res.data;
  } catch (err) {
    console.error("POST error:", err);
  }
};

export const updateData = async (id, data) => {
  try {
    const res = await api.put(`/${id}`, data); 
    return res.data;
  } catch (err) {
    console.error("UPDATE error:", err);
  }
};

export const deleteData = async (id) => {
  try {
    const res = await api.delete(`/${id}`);
    return res.data;
  } catch (err) {
    console.error("DELETE error:", err);
  }
};
