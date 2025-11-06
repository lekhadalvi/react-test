import React, { useState } from 'react'
import foods from './Data2'
const Search2 = () => {
    const [search2,setSearch2]=useState("")

    const result = foods.filter((food)=>{
       return (food.name.toLowerCase().includes(search2.toLowerCase())||
       food.price.toString().includes(search2))
    })
  return (
   <>
   hello serach here 
   <input type="text"
   placeholder='enter' 
   onChange={(e)=>setSearch2(e.target.value)}/>
 
 {result.length === 0 ? (
    <p style={{color:"red"}}>not found</p>
 ): ( result.map((food,index)=>(
       
        <div>
            {food.name} {food.price}
        </div>
    ))

 )
 }
   </>
  );
}

export default Search2