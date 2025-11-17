import axios from 'axios';
import React, { useState } from 'react'

const PatchUsers = () => {
  const [userId,setUserId]=useState("");
  const [userName,setUserName]=useState("");
  const [userEmail,setUserEmail]=useState("");

  const URL="http://localhost:3001";

  const handlePatch =async() =>{
    if (!userId) alert("enter valid id");
    try {
      const response = await axios.patch(`${URL}/users/${userId}`,{
        ...(userName && {name:userName}),
        ...(userEmail && {email:userEmail}),
      });

      alert("updated"+JSON.stringify(response.data));
      setUserId("");
      setUserEmail("");
      setUserName("");
    } catch (error) {
      alert("error"+error)
    }
  };
  return (
  <>
  <input
  type='number'
  value={userId}
  placeholder='enter your id'
  onChange={(e)=>setUserId(e.target.value)}/>

  <input 
  type='text'
  value={userName}
  placeholder='enter your name'
  onChange={(e)=>setUserName(e.target.value)}
  />
  <input
  type='text'
  value={userEmail}
  placeholder='ente your email'
  onChange={(e)=>setUserEmail(e.target.value)}/>
  <button onClick={handlePatch}>
    click me
  </button>
  </>
  )
}

export default PatchUsers