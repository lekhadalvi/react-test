import React from 'react'

const Name1 = () => {
    let name="lekha"
    const age =20
    console.log(name);
    console.log(`hello my age is ${age}`);
    console.log("hello"+ name);
    
    
  return (
   <>
   <p>{name}</p>
   <h1>{`hello my age is ${age}`}</h1>
   <p>{"hello"+ name}</p>
   </>
  )
}

export default Name1