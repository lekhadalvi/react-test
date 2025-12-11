import React from 'react'
import axios from "axios"

const api = axios.create({
  baseURL: "https://6939e63ec8d59937aa094e57.mockapi.io/hire",
  headers: { "Content-Type": "application/json" },
});
export default api;