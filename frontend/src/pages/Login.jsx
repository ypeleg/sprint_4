
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { getEmptyUser, login } from "../store/store.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"


export function Login() {

  //todos: 
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState(getEmptyUser())

  const navigate = useNavigate()

  function handleChange(ev) {
    console.log(ev.target.value);
    ev.preventDefault()

    const type = ev.target.type
    const field = ev.target.name
    const value = ev.target.value
    setCredentials({ ...credentials, [field]: value })
    console.log(credentials);
  }

  function handleEmailChange(ev) {
    ev.preventDefault()
    handleChange(ev)
    setEmail(ev.target.value);
    if (ev.target.value.includes("@")) {
      setShowPassword(true); // Show password field if email is entered
    } else {
      setShowPassword(false);
    }
  }

  async function onLogin() {
    console.log('sss', credentials)
    try {
      // debugger
      const user = await login(credentials)
      console.log(user);
      navigate('/')
      showSuccessMsg('Logged in successfully')
    } catch (err) {
      showErrorMsg('Oops, try again')
    }
  }


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
          name="username"
          value={credentials.username}
          onChange={handleEmailChange}
          required
        />

        {showPassword && (
          <input
            className="input-field"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        )}

        <div className="remember-me">
          <input
            type="checkbox"
            id="remember"
          // checked={rememberMe}
          // onChange={() => {}}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
      </form>

      <button
        // type="submit"
        onClick={onLogin}
        className="signup-button"
      >Log in</button>

      <span className="continue-text" >Or continue with:</span>

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
    </div >
  )
}