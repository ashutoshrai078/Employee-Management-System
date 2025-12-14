import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const Authprovider = ({children}) => {


  const [userData, setUserData] = useState(null);
  
  useEffect(()=>{
    const {employeeData,adminData} = getLocalStorage()
    setUserData({employeeData,adminData})
  },[])
    console.log(userData);
    
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
