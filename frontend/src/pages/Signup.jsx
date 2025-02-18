import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { getEmptyUser, signup } from "../store/store.js"
import { useNavigate } from 'react-router'


export function Signup() {
  const [credentials, setCredentials] = useState(getEmptyUser())
  const [emailError, setEmailError] = useState(null) // ✅ Error state

  const fullNameInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  const navigate = useNavigate()

  async function onSignup(ev) {
    ev.preventDefault()

    //  Allow the browser's built-in email validation
    const form = ev.target
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    if (!validateEmail(credentials.username)) {
      setEmailError('⚠ Please enter a valid email address')
      return
    } else {
      setEmailError(null)
    }

    if (!credentials.password || !credentials.username || !credentials.fullname) return

    try {
      await signup(credentials)
      navigate('/')
    } catch (err) {
      console.error("Signup failed:", err)
      showErrorMsg("Oops, try again")
    }
  }

  function handleChange(ev) {
    console.log(ev.target.value)
    const type = ev.target.type
    const field = ev.target.name
    const value = ev.target.value
    setCredentials({ ...credentials, [field]: value })
    console.log(credentials)
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) // ✅ Email regex check
  }

  function handleEmailKeyDown(ev) {
    if (ev.key === "Enter" && credentials.username.includes("@")) {
      ev.preventDefault()
      fullNameInputRef.current?.focus()
    }
  }

  function handleFullNameKeyDown(ev) {
    if (ev.key === "Enter" && credentials.fullname.trim().length > 1) {
      ev.preventDefault()
      passwordInputRef.current?.focus()
    }
  }


  return (
    <div className="signup-login-modal">
      <div className="signup-login-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg" alt="Trello" />
      </div>

      {/* Title */}
      <div className='sub-title'>Sign up to continue</div>

      {/* Signup Form */}
      <form className="signup-form" onSubmit={onSignup}  >
        <input
          type="email"
          className={`input-field ${emailError ? "error-input" : ""}`}
          placeholder="Enter your email"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          onKeyDown={handleEmailKeyDown} // ✅ Move to full name on Enter
          required
        />
        {emailError && <p className="error-text">{emailError}</p>}
        <input
          ref={fullNameInputRef} // 🔹 Attach reference
          className="input-field"
          type="text"
          placeholder="Enter full name"
          name="fullname"
          value={credentials.fullname}
          onChange={handleChange}
          onKeyDown={handleFullNameKeyDown} // ✅ Move to password on Enter
          required
        />

        <input
          ref={passwordInputRef}
          className="input-field"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />


        <p className="terms-text">
          By signing up, I accept the Atlassian <a href="#">Cloud Terms of Service</a> and acknowledge the <a href="#">Privacy Policy</a>.
        </p>


      </form>

      <button
        type="submit"
        onClick={onSignup}
        className="signup-login-button">
        Sign up
      </button>


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
          Already have an Atlassian account?{" "}
          <NavLink to="/login" className="link-button">
            Log in
          </NavLink>
        </p>
      </footer>
    </div>

  )
}