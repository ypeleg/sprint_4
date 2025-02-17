
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { userService } from '../services/user'
import { login } from '../store/actions/user.actions'



export function Login() {

  //todos: 
  const navigate = useNavigate()

  return (
    <div className="signup-login-modal">
      <div className="signup-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg" alt="Trello" />
      </div>

      {/* Title */}
      <div className='sub-title'>Log in to continue</div>

      {/* Signup Form */}
      <form className="signup-form" >
        <input
          type="email"
          className="input-field"
          placeholder="Enter your email"
          // value={email}
          // onChange={)}
          required
        />

        <div className="remember-me">
          <input
            type="checkbox"
            id="remember"
          // checked={rememberMe}
          // onChange={() => {}}
          />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button type="submit" className="signup-button"
        onClick={
            (ev) => {
                ev.stopPropagation()
                ev.preventDefault()
            navigate('/')}}
        >Log in</button>

      </form>

      <span style={{ margin: "auto", color: "rgb(94, 108, 132)", fontWeight: 600 }}>Or continue with:</span>

      {/* Social Logins */}
      <div className="social-logins">
        <button className="social-button"><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/google-logo.5867462c.svg" alt="Google" /> Google</button>
        <button className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" /> Microsoft</button>
        <button className="social-button"><img src="	https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/apple-logo.54e0d711.svg" alt="Apple" /> Apple</button>
        <button className="social-button"><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/slack-logo.5d730c10.svg" alt="Slack" /> Slack</button>
      </div>

      {/* Login Link */}
      <footer>
        <p>
          Don't have an account?{" "}
          <NavLink to="/login/signup" className="link-button">
            Create an account
          </NavLink>
        </p>
      </footer>
    </div>
  )
}