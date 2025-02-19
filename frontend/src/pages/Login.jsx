

import {useState, useRef} from 'react'
import {useNavigate} from 'react-router'
import {getEmptyUser, signup, login} from "../store/store.js"
import {showSuccessMsg, showErrorMsg} from "../services/util.service.js"


export function Signup({setLoginOrSignup}) {


    const navigate = useNavigate()
    const passwordInputRef = useRef(null)
    const fullNameInputRef = useRef(null)
    const emailInputRef = useRef(null)
    const [emailError, setEmailError] = useState(null)
    const [credentials, setCredentials] = useState(getEmptyUser())


    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({...credentials, [field]: value})
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
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

    async function onSignup(ev) {
        ev.preventDefault()
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
            setEmailError(`⚠ ${err}, please try again`)
        }
    }

    return (<div className="signup-login-modal">
            <div className="signup-login-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg" alt="Trello"/>
            </div>
            <div className='sub-title'>Sign up to continue</div>
            <form className="signup-form" onSubmit={onSignup}>
                <input type="email" className={`input-field ${emailError ? "error-input" : ""}`} ref={emailInputRef} placeholder="Enter your email" name="username" value={credentials.username} onChange={handleChange} onKeyDown={handleEmailKeyDown} required/>
                {emailError && <p className="error-text">{emailError}</p>} <input ref={fullNameInputRef} className="input-field" type="text" placeholder="Enter full name" name="fullname" value={credentials.fullname} onChange={handleChange} onKeyDown={handleFullNameKeyDown} required/>
                <input ref={passwordInputRef} className="input-field" type="password" placeholder="Enter your password" name="password" value={credentials.password} onChange={handleChange} required/>
                <p className="terms-text">
                    By signing up, I accept the Atlassian <a href="#">Cloud Terms of Service</a> and acknowledge the <a href="#">Privacy Policy</a>
                </p>
                <button type="submit" className="signup-login-button">Sign up</button>
            </form>
            <span className="continue-text">Or continue with:</span>
            <div className="social-logins">
                <button className="social-button"><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/google-logo.5867462c.svg" alt="Google"/> Google</button>
                <button className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft"/> Microsoft</button>
                <button className="social-button"><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/apple-logo.54e0d711.svg" alt="Apple"/> Apple</button>
                <button className="social-button"><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/slack-logo.5d730c10.svg" alt="Slack"/> Slack</button>
            </div>
            <footer>
                <p>
                    Already have an Atlassian account? <button className="link-button" onClick={ () =>
                    setLoginOrSignup('login')
                }>Log in</button>
                </p>
            </footer>
        </div>)
}


export function Login() {

    const navigate = useNavigate()
    const passwordInputRef = useRef(null)
    const [email, setEmail] = useState("")
    const [loginError, setLoginError] = useState(null)
    const [credentials, setCredentials] = useState(getEmptyUser())
    const [showPassword, setShowPassword] = useState(false)
    const [loginOrSignup, setLoginOrSignup] = useState('login')

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({...credentials, [field]: value})
    }

    function handleEmailChange(ev) {
        handleChange(ev)
        setEmail(ev.target.value)
        if (ev.target.value.includes("@")) setShowPassword(true)
        else setShowPassword(false)
    }

    function handleEmailKeyPress(ev) {
        if (ev.key === "Enter" && showPassword) {
            ev.preventDefault()
            passwordInputRef.current?.focus()
        }
    }

    async function onLogin(ev) {
        ev.preventDefault()
        const form = ev.target
        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }
        try {
            await login(credentials)
            navigate('/')
            showSuccessMsg('Logged in successfully')
        } catch (err) {
            setLoginError(`⚠ ${err}, please try again`)
            showErrorMsg('Oops, try again')
        }
    }

    return (<>
        <div className="login-page">
            {loginOrSignup === 'signup' ? <div className="scrollable-container">
                <Signup setLoginOrSignup={setLoginOrSignup}/></div>:


                <div className="scrollable-container">
                    <div className="signup-login-modal">
                        <div className="signup-login-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg" alt="Trello"/>
                        </div>
                        <div className='sub-title'>Log in to continue</div>
                        <form className="login-form" onSubmit={onLogin}>
                            <input type="email" className="input-field" placeholder="Enter your email" name="username" value={credentials.username} onChange={handleEmailChange} onKeyDown={handleEmailKeyPress} required/>
                            {showPassword && (<input ref={passwordInputRef} className="input-field" type="password" placeholder="Enter your password" name="password" value={credentials.password} onChange={handleChange} required/>)}
                            {loginError && <p className="error-text">{loginError}</p>}
                            <div className="remember-me">
                                <input type="checkbox" id="remember"/> <label htmlFor="remember">Remember me</label>
                            </div>
                            <button type="submit" className="signup-login-button">Log in</button>
                        </form>
                        <span className="continue-text">Or continue with:</span>
                        <div className="social-logins">
                            <button className="social-button"><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/google-logo.5867462c.svg" alt="Google"/> Google</button>
                            <button className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft"/> Microsoft</button>
                            <button className="social-button"><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/apple-logo.54e0d711.svg" alt="Apple"/> Apple</button>
                            <button className="social-button"><img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/slack-logo.5d730c10.svg" alt="Slack"/> Slack</button>
                        </div>
                        <footer>
                            <p>
                                Don't have an account? <button className="link-button" onClick={() => setLoginOrSignup('signup')}>Create an account</button>
                            </p>
                        </footer>
                    </div>
                </div>}

                <img src="login-signup2-img.svg" className='img-background-1'/>
                <img src="login-signup1-img.svg" className='img-background-2'/>
            </div>
                </>)}
