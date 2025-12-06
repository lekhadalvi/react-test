import { createContext, useState } from "react";
import React from 'react'


export const ContextMain = createContext()
const Context = ({ children }) => {
const [first, setfirst] = useState("I am from Context lekha")
    return (                                                                                                                                                                                                                                                                                    
       <ContextMain.Provider value={first}>
            {children}
        </ContextMain.Provider>
    )
}

export default Context

