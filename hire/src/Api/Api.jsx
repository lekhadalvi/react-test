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
    console.log(data);
    const res = await api.post("/", data);
    console.log(res);
    return {
      data: res.data,
      message: "Success",
    };
  } catch (err) {
    return {
      message: "Failure In Api Call",
    };
  }
};

export const updateData = async (id, data) => {
  try {
    const res = await api.patch(`/${id}`, data);
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
