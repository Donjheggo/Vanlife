import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRequired = () => {
  const auth = {token: '123'}
  if(!auth.token){
    return <Navigate to="/login" state={{message: 'You need to login first!'}}/>
  }
  return <Outlet />
}

export default AuthRequired