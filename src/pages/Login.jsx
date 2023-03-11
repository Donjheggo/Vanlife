import React from 'react'
import { Link, useLocation, useNavigation, useActionData, Form, useNavigate } from 'react-router-dom'
import { loginUser } from '../api/api'

export const loginAction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  try{
    const login = await loginUser({email, password})
    localStorage.setItem("loggedin", true)
    return login
  }catch(err){
    return {
      error: err.message
    }
  }

}

const Login = () => {

  const location = useLocation()
  const data = useActionData()
  const navigate = useNavigate()
  const navigation = useNavigation()

  const btnStatus = navigation.state === "submitting" ? true : false
  const btnText = navigation.state === "idle" ? "Sign in" : "Signing in..."
  const urlParams = location?.state ? location.state.from : "/admin"

  React.useEffect( () => {
    if(data?.token){
      navigate(urlParams, {replace: true})
    }
  }, [data])


  return (
    <div className='container'>
      <p className='signin-text text-center'>Sign in to your account</p>
      {location?.state?.message && !data?.error && <p className='text-center text-warning'>{location.state.message}</p>}
      {data?.error && <p className='text-center text-warning'>{data.error}</p>}
      <Form action="/login" method="POST">
          <input name="email" type="email" className='username-input' placeholder='Email address'/>
          <input name="password" type="password" className='password-input' placeholder='Password'/>
          <button className='signin-btn' disabled={btnStatus}>{btnText}</button>
      </Form>
      <div className='register-sec'>
          <p className='text-center'>Doesn't have an account? <Link className='signup-link'>Create one now</Link></p>
      </div>
    </div>
  )
}

export default Login
