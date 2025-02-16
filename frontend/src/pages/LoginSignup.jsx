
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

export function LoginSignup() {
  return (
    <div className="login-page">

      <div className="login-modal">
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
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />

          <p className="terms-text">
            By signing up, I accept the Atlassian <a href="#">Cloud Terms of Service</a> and acknowledge the <a href="#">Privacy Policy</a>.
          </p>

          <button type="submit" className="signup-button">Sign up</button>
        </form>

        {/* Divider */}
        <div className="divider">
          <hr /><span>Or continue with:</span><hr />
        </div>

        {/* Social Logins */}
        <div className="social-logins">
          <button className="social-button"><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/google-logo.5867462c.svg" alt="Google" /> Google</button>
          <button className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" /> Microsoft</button>
          <button className="social-button"><img src="	https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/apple-logo.54e0d711.svg" alt="Apple" /> Apple</button>
          <button className="social-button"><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/slack-logo.5d730c10.svg" alt="Slack" /> Slack</button>
        </div>

        {/* Login Link */}
        <p className="login-text">
          Already have an Atlassian account? <a href="#">Log in</a>
        </p>
        <footer>
          <div className="footer-text">
            <div>
              <img src="atlassian.svg" alt="" />
            </div>
            <p>One account for Trello, Jira, Confluence and more.</p>
            <p>
              This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
            </p>
          </div>
        </footer>
      </div>

      {/* Footer */}


    </div>

  )
}