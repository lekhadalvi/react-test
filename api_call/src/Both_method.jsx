import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Both_method = () => {
    const [users , setusers]=useState([]);
    const [formData , setformData]=useState({name:"",email:""});
    const URL="http://localhost:3001/users";

    const fetchUsers =async () =>{
        try{
            const result = await axios.get(URL);
            setusers(result.data)

        }
        catch(e){
            console.log("error",e)
        }
    }

    // useEffect(()=>{
    //     fetchUsers();
    // },[]);

    const handleChange =async(e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const result =await axios.post(URL,formData);
            setformData({name:"",email:""});
            fetchUsers();
        }
        catch(error){
            console.log(error);
            

        }
    }
  return (
    <>
    <button onClick={fetchUsers}>click me</button>

{users.map((user) => (
  <p key={user.id}>
    {user.email} {user.name}
  </p>
))}


    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'
            name='name'
            placeholder='enter  name'
            value={formData.name}
            onChange={handleChange}></input>

             <input type='text'
            name='email'
            placeholder='enter  email'
            value={formData.email}
            onChange={handleChange}></input>
            <button type='submit'>clck me</button>
        </form>
    </div>
  
    </>
  )
}

export default Both_method