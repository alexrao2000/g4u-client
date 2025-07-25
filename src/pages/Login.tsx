import '../css/Register.css';

import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

import { login } from '../api/authApi';

function Login() {

  const { accessToken, setAccessToken } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [loginError, setLoginError] = useState<string>("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newAccessToken = await login(email, password);
      if (!accessToken) {
        setAccessToken(newAccessToken);
        setSubmitted(prev => !prev);
      } else {
        console.log("Already logged in (accessToken exists).");
        setLoginError("Already logged in. Please log out first to switch accounts.");
      }
    } catch (err: any) {
      setLoginError("");
      setTimeout(() => {
        setLoginError(err.response?.data?.detail || err.message || "Login failed");
        setTimeout(() => setLoginError(""), 5000);
      }, 100);
    }
  }

  return (
    <div className="register-container">
      <div className="register-form">
        {submitted ? (
          <h1 className="register-title"> Welcome back!</h1>
        ) : (
          <>
            <h1 className="register-title">Log In</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input 
                  className="form-input"
                  type="email"
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                {loginError ? (<p className="form-error">{loginError}</p>) : <div className="form-gap" />}
              </div>

              <div className="form-group">
                <input
                  className="form-input"
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type='submit' className="register-button">Login</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default Login; 