import axios from "axios";

const BASE_URL = "https://6939e63ec8d59937aa094e57.mockapi.io/hire";

export const fetchHires = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addHire = async (newHire) => {
  const response = await axios.post(BASE_URL, newHire);
  return response.data;
};
