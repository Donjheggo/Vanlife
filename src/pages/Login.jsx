import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { loginUser } from '../api/api'

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  const handleForm = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("submitting")
    loginUser(formData)
      .then(data => console.log(data))
      .catch(error => {setError(error.message)})
      .finally(() => {setStatus("idle")})
  }

  const btnStatus = status === "submitting" ? true : false
  const btnTextStatus = status === "idle" ? "Sign in" : "Signing in..."
  const location = useLocation()

  return (
    <div className='container'>
        {error && <p className='text-center text-warning'>{error}</p>}
        {location.state && <p className='text-center text-warning'>{location.state.message}</p>}
        <p className='signin-text text-center'>Sign in to your account</p>
        <form onSubmit={handleSubmit}>
            <input onChange={handleForm} name="email" type="email" value={formData.username} className='username-input' placeholder='Email address'/>
            <input onChange={handleForm} name="password" type="password" value={formData.password} className='password-input' placeholder='Password'/>
            <button className='signin-btn' disabled={btnStatus}>{btnTextStatus}</button>
        </form>
        <div className='register-sec'>
            <p className='text-center'>Doesn't have an account? <Link className='signup-link'>Create one now</Link></p>
        </div>
    </div>
  )
}

export default Login