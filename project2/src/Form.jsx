import axios from 'axios';
import React, { useState } from 'react'
import URL from './'
import { useForm } from 'react-dom';


const Form = () => {
  const [loading ,setloading]=useState(false);

  const{register,handleSubmit,formState:{errors},reset}=useForm();

  const onSubmit=async(data)=>{
    setloading(true);{
      try{
        await axios.post("URL",data);
        reset();
      }
      catch(e){
      alert("failed to submit form");
      reset();  
      }
     
    }
     setloading(false);
  };
  return (
    <>
<h1>form</h1>
    </>
  )
}

export default Form