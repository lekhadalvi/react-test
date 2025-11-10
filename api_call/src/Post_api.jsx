import axios from 'axios';
import React, { useState } from 'react'

const Post_api = () => {
    const[formData , setformData]=useState({name:"",code:"",sector:""})
    console.log(formData);

    const handleChange=(e)=>{
        setformData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }
    
    const handleSubmit = async (e)=>{
          e.preventDefault();
           try{
        const resp = await axios.post("",formData);
        console.log("data added",resp.data);
        setformData({name:"",code:"",sector:""})
    }
    catch(e){
        console.log("data added",e);
        // alert("error")        
    }
    }
      
    
    
  return (
   <>
  <div>
     <form onSubmit={handleSubmit}>
    <input type='text'
    name='name'
    placeholder='enter name'
    value={formData.name}
    onChange={handleChange}
    className="border p-2 rounded w-64"
    ></input>
     <input type='text'
     name='code'
    placeholder='enter code'
    value={formData.code}
    onChange={handleChange}
    className="border p-2 rounded w-64"
    ></input>
    <input type='text'
     name='sector'
    placeholder='enter sector'
    value={formData.sector}
    onChange={handleChange}
    className="border p-2 rounded w-64"
    ></input>
    <div>
        <button type='submit'>Submit</button>
    </div>
   </form>
  </div>
   </>
  )
}

export default Post_api