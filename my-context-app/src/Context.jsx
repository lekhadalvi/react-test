import React, { createContext, useState } from 'react';


export const contextMain = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState("I am context hook");

  return (
    <contextMain.Provider value={{ user, setUser }}>
      {children}
    </contextMain.Provider>
  );
};

export default Context;
