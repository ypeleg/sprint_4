
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Signup } from './Signup.jsx'
import { Login } from './Login.jsx'

export function LoginSignup() {
  return (
    <div className="login-page">
      {/* <img src="bg-login-page.png" className='img-background-1' /> */}
      {/* <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="signup">Signup</NavLink>
      </nav> */}
      <Outlet />
    </div>

  )
}