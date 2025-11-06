import React from 'react'

const Card1 = ({name,age}) => {
 
 
 console.log({name,age});
return (
    <>
  <h1>Name:{name}</h1>
  <p>Age:{age}</p>
  </>
)
}

export default Card1