import React from 'react'
import axios from "axios"

const api = axios.create({
  baseURL: "https://69316d8911a8738467cec1b0.mockapi.io/lekha/api/test",
  headers: { "Content-Type": "application/json" },
});
export default api;
