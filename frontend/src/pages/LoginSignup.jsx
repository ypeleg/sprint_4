
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Signup } from './Signup.jsx'
import { Login } from './Login.jsx'

export function LoginSignup() {
  return (
    <div className="login-page">
      <img src="login-signup2-img.svg" className='img-background-1' />
      <img src="login-signup1-img.svg" className='img-background-2' />

      <Outlet />
    </div>

  )
}