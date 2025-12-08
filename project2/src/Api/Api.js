import React from 'react'
import URL from './URL'
import axios from 'axios';

const api = axios.create({
    BaseURL:URL,
    headers:{"Content-Type":"application/json"}, 
})

export const submiForm = async(data)=>{
    return await api.post("/forms",data);
}

export const getForms = async()=>{
    return await api.get("/forms");
}