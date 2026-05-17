import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { useEffect } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  
  

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();

     setUser({ employees, admin });
    

    setLoading(false);  

  },[]);

   if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider