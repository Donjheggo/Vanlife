import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuthRequired = () => {
  
  const isLoggedIn = localStorage.getItem("loggedin")
  const location = useLocation()
  const urlParams = location ? location.pathname : null

  if(!isLoggedIn){
    return (
      <Navigate 
        to="/login" 
        replace
        state={{message: 'You need to login first!', from: location.pathname}} 
        />
    )
  }
  return <Outlet/>
}

export default AuthRequired