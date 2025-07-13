import 'react';
import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import '../css/Register.css';

function Register() {
  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get('ref');

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(password, email) // DELETE THIS ONCE BACKEND IS IMPLEMENTED
  }

  return (
    <div className="register-container">
      <div className="register-form">
        <h1 className="register-title">Signing Up With Referral Code: {referralCode}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              className="form-input"
              type="email"
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
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
      </div>
    </div>
  )
}

export default Register;