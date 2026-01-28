import api from "./URL";

export const getData = async () => {
  try {
    const res = await api.get("/");
    return res.data;
  } catch (error) {
    console.error("GET failed:", error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const res = await api.post("/", data);
    return res.data;
  } catch (error) {
    console.error("POST failed:", error);
    throw error;
  }
};

export const updateData = async (id, data) => {
  try {
    const res = await api.put(`/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("UPDATE failed:", error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    const res = await api.delete(`/${id}`);
    return res.data;
  } catch (error) {
    console.error("DELETE failed:", error);
    throw error;
  }
};
