import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


export function Signup() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    console.log(email);
  }, [])

  function handleChange(ev) {
    console.log(ev.target.value);

    // const type = ev.target.type
    setEmail(ev.target.value);
    if (ev.target.value.includes("@")) {
      setShowPassword(true); // Show password field if email is entered
    } else {
      setShowPassword(false);
    }
    // const field = ev.target.name
    // const value = ev.target.value
    // setCredentials({ ...credentials, [field]: value })
  }


  return (
    <div className="signup-login-modal">
      <div className="signup-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg" alt="Trello" />
      </div>

      {/* Title */}
      <div className='sub-title'>Sign up to continue</div>

      {/* Signup Form */}
      <form className="signup-form" >
        <input
          type="email"
          className="input-field"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        {showPassword && (
          <input
            className="input-field"
            type="password"
            placeholder="Enter your password"
            // value={password}
            required
          />
        )}

        <p className="terms-text">
          By signing up, I accept the Atlassian <a href="#">Cloud Terms of Service</a> and acknowledge the <a href="#">Privacy Policy</a>.
        </p>

        <button type="submit" className="signup-button">Sign up</button>
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
          Already have an Atlassian account?{" "}
          <NavLink to="/login" className="link-button">
            Log in
          </NavLink>
        </p>
      </footer>
    </div>

  )
}