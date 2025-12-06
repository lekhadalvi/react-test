import React, { useState } from 'react'
import axios from "axios";


const Delete = () => {
    const[id,setId]=useState("");
    
    const handleDelete = async () =>{
        if(!id){
            alert("please enter correct id");
            return;
        }
        try {
            await axios.delete(`http://localhost:3001/users/${id}`);
            alert(`user with ${id} deleted`);
            setId("");

        } catch (error) {
            alert("user not found")
        }
    };
  return (
    <>
   <div>hello </div>
<div>
    <input
type='number'
placeholder='enter id'
value={id}
onChange={(e)=> setId(e.target.value)}
/>
<button onClick={handleDelete}>delete user</button>
</div>
    </>
  );
};

export default Delete