import '../css/Register.css';

import { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import { useAuth } from '../contexts/AuthContext';

import { register } from '../api/authApi';

function Register() {

  const { accessToken, setAccessToken } = useAuth();

  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get('ref');

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<string>("")

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      const newAccessToken = await register(email, password)
      if (!accessToken) {
        setAccessToken(newAccessToken)
      } else {
        console.log("Already logged in (accessToken exists).")
      }
      setSubmitted(prev => !prev)

    } catch (err: any) {

      setEmailError("");
      setTimeout(() => {
        setEmailError(err.response?.data?.detail);
        setTimeout(() => setEmailError(""), 5000);
      }, 100);

    }

  }

  return (
    <div className="register-container">
      <div className="register-form">

        {submitted ? (
          <h1 className="register-title"> Thank you for signing up!</h1>
        ) : (
          <>
            <h1 className="register-title">Sign Up</h1>
            {referralCode && 
              <h2 className="register-code">Your Referral Code is: {referralCode}</h2>
            }

            <form onSubmit={handleRegister}>
              <div className="form-group">
                <input 
                  className="form-input"
                  type="email"
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value) /* we need to look at this */}
                  required
                />
                {emailError ? (<p className="form-error">{emailError}</p>) : <div className="form-gap" />}
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

              <button type='submit' className="register-button">Register</button>
            </form>
          </>
        )}

      </div>
      
    </div>
  )
}

export default Register;