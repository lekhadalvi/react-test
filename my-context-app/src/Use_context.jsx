import React, {  createContext, useState } from 'react'


const Context = createContext();

const Use_context = ( {children}) => {
    const [user , setuser] =useState("guest");
  return (
    <>
    <Context.Provider value={{user,setuser}}>
         {children}
        </Context.Provider>    
    </>
  )
}

export default Use_context