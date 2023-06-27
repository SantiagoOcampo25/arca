import React, { useState, createContext } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('jwtToken') || null);

  const logout = () => {
    setToken(null);
  };

  
  return (
    <TokenContext.Provider value={{ token, setToken, logout }}>
      {children}
    </TokenContext.Provider>
  );
};


