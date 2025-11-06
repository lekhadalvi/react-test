import React, { useState } from 'react'
import {Data} from './Data'
const Search = () => {
  const[input,setInput]=useState("");

  const result = Data.filter((item)=>{
    return(
      item.foodName.toLowerCase().includes(input.toLowerCase())||
      item.location.toLowerCase().includes(input.toLowerCase())||
      item.price.toString().includes(input)
    );
  });
  return (
    <>
    <input 
    type='text'
    placeholder='enter a foodname'
    value={input}
    onChange={(e)=>setInput(e.target.value)}></input>
    {result?.map((food)=>(
      <p key={food.id}>{food.foodName} {food.location} {food.price}</p>

    ))}
    </>
  )
}

export default Search