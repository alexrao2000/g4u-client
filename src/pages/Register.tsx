import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import '../css/Register.css';

import { register } from '../api/authApi';

function Register() {
  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get('ref');

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await register(email, password)
      console.log(data)
      setSubmitted(prev => !prev)
    } catch (err: any) {
      setEmailError("");
      setTimeout(() => setEmailError(err.response?.data?.detail), 100);
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

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  className="form-input"
                  type="email"
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value) /* we need to look at this */}
                  required
                />
                {emailError ? (<p style={{color: 'red', maxHeight: "1em"}}>{emailError}</p>) : <div className="form-gap" />}
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