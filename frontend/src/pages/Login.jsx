
import { NavLink } from "react-router-dom";
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { getEmptyUser, login } from "../store/store.js"
import { showSuccessMsg, showErrorMsg } from "../services/util.service.js"


export function Login() {

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState(getEmptyUser())
  const passwordInputRef = useRef(null); // 🔹 Reference to the password input
  const [loginError, setloginError] = useState(null) // ✅ Error state

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

  function handleEmailKeyPress(ev) {
    if (ev.key === "Enter" && showPassword) {
      ev.preventDefault(); // ✅ Prevents form submission
      passwordInputRef.current.focus() // ✅ Moves focus to password input
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
      setloginError('⚠ Somthing wrong, please try again')
      showErrorMsg('Oops, try again')
    }
  }


  return (
    <div className="signup-login-modal">
      <div className="signup-login-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg" alt="Trello" />
      </div>

      {/* Title */}
      <div className='sub-title'>Log in to continue</div>

      {/* Login Form */}
      <form className="login-form" >
        <input
          type="email"
          className="input-field"
          placeholder="Enter your email"
          name="username"
          value={credentials.username}
          onChange={handleEmailChange}
          onKeyDown={handleEmailKeyPress} // ✅ Detect Enter key

          required
        />

        {showPassword && (
          <input
            ref={passwordInputRef} // 🔹 Attach reference
            className="input-field"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        )}
        {loginError && <p className="error-text">{loginError}</p>}

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
        className="signup-login-button"
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