import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const clearToken = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        clearToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
